import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../Store/Context';
import { storage } from '../../Firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../Firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const date = new Date();
  const navigate = useNavigate();

  // Check if the user is logged in, otherwise show alert
  if (!user) {
    alert("Please log in to create a product.");
    navigate('/login'); // Redirect to the login page
    return null; // Prevent rendering the rest of the component
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page on submit

    // Reset errors
    setErrors({});

    // Validation
    const validationErrors = {};
    if (!name) validationErrors.name = "Product name is required.";
    if (!category) validationErrors.category = "Category is required.";
    if (!price) validationErrors.price = "Price is required.";
    if (price <= 0 || isNaN(price)) validationErrors.price = "Price must be a valid number greater than 0.";
    if (!image) validationErrors.image = "Product image is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop execution if validation fails
    }

    // Upload image to Firebase storage if selected
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, image);
        const url = await getDownloadURL(snapshot.ref());
        console.log("Image URL:", url);

        // Add product details to Firestore
        await addDoc(collection(db, 'products'), {
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toDateString(),
        });

        // Navigate back to home page
        navigate('/');
      } catch (error) {
        console.log("Upload failed:", error);
      }
    } else {
      console.log("No image selected");
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="Name"
          />
          {errors.name && <div className="error" style={{color:"red"}}>{errors.name}</div>}
          <br />

          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="category"
          />
          {errors.category && <div className="error" style={{color:"red"}}>{errors.category}</div>}
          <br />

          <label htmlFor="price">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="Price"
          />
          {errors.price && <div className="error" style={{color:"red"}}>{errors.price}</div>}
          <br />
          
          {/* Display image preview */}
          <img
            alt="Preview"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ''}
          />
          <br />
          
          {/* Image upload input */}
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {errors.image && <div className="error" style={{color:"red"}}>{errors.image}</div>}
          <br />

          <button type="submit" className="uploadBtn">Upload and Submit</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Create;
