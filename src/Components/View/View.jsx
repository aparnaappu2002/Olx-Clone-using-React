import React, { useState,useContext,useEffect } from 'react';
import { PostContext } from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/Context';
import { db } from '../../Firebase/config';
import { collection,where,query,getDocs } from 'firebase/firestore';

import './View.css';

function View() {
const [userDetails,setUserDetails] = useState()
const {postDetails} = useContext(PostContext)
const {firebase} = useContext(FirebaseContext)


useEffect(() => {
  const fetchUserDetails = async () => {
    try {
      const { userId } = postDetails;
      const userQuery = query(collection(db,'users'),where('id', '==', userId));
      const querySnapshot = await getDocs(userQuery);
      
      querySnapshot.forEach(doc => {
        setUserDetails(doc.data());
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  if (postDetails) {
    fetchUserDetails();
  }
}, [postDetails, firebase]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>Tue May 04 2021</span>
        </div>
       { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
