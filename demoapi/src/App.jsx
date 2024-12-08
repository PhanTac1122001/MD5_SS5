import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const [data,setData]=useState(null)
  useEffect(()=>{
    axios
    .get("http://localhost:8080/api/v1/categories")
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err));
  },[]);
  return (
    <>
{data && data.map((item)=><p>{item.categoryName}</p>)}
    </>
  )
}
