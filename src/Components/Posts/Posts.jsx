import React, { useEffect,useState,useContext } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../Store/Context';
import { db } from '../../Firebase/config';
import { collection,getDocs } from 'firebase/firestore';
import { PostContext } from '../../Store/PostContext';
import { useNavigate } from 'react-router-dom';

function Posts() {

  const {firebase} = useContext(FirebaseContext)
  const [products,setProducts]=useState([])
  const {setPostDetails} = useContext(PostContext)
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const productsCol = collection(db,"products")
      const productSnapshot = await getDocs(productsCol)
      const allPost = productSnapshot.docs.map(doc=>({
        ...doc.data(),
        id:doc.id,
        
      }))
      setProducts(allPost)
      console.log(allPost)
    }
    fetchProducts()

  },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

          {products.map(product=>{
            return <div key={product.id}
            className="card"
            onClick={()=>{setPostDetails(product),navigate('/view')}}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              {/* <span>{product.createdAt}</span> */}
            </div>
          </div>

          })}
          
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
