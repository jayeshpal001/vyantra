import axios from 'axios';
import React, { use, useEffect, useState } from 'react'

const Profile = () => {
  const [data, setData] = useState([])
   useEffect(() => {
    const fetchProfile = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/users/profile",{withCredentials:true});
            console.log(res.data);
            setData(res.data.user);

        } catch (error) {
            console.error("Error fetching profile data:", error.response.data.message);
            console.log(error.message);     
        }
    }
    fetchProfile();
   }, [])
  return (
   <>
    <div>
        <h1 className='text-3xl font-bold mb-4'>User Profile</h1>
        <div className='bg-white shadow-md rounded-lg p-6 w-full max-w-md'>
            <p className='text-gray-700 mb-2'><span className='font-semibold'>Name:</span> {data.name}</p>
            <p className='text-gray-700 mb-2'><span className='font-semibold'>Email:</span> {data.email}</p>
            <p className='text-gray-700 mb-2'><span className='font-semibold'>ID:</span> {data._id}</p>
        </div>
    </div>
   </>
  )
}

export default Profile