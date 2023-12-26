import React from 'react'
import Header from './Header';
import SeachBar from './SearchBar';
import JobCard from './Jobcard';
import { collection, query,where, orderBy, getDocs } from "firebase/firestore";
import {db} from "./firebase.config";
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

function Home() {
    const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSeach] = useState(false);

  const fetchJobs = async() => {
    setCustomSeach(false);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    
    req.forEach((job) => {
    // console.log(doc.id, " => ", doc.data());
    tempJobs.push({
      id: job.id,
       ...job.data(),
      postedOn: job.data().postedOn.toDate()
        })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async(jobCriteria) => {
    setCustomSeach(true);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("location", "==", jobCriteria.location), where("experience", "==", jobCriteria.experience) ,orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
    tempJobs.push({
      id: job.id,
       ...job.data(),
      postedOn: job.data().postedOn.toDate()
        })
    });
    setJobs(tempJobs);

  }

  useEffect(() => {
    fetchJobs();
  }, [])
  return (
    <>
    <img className="h-[350px] w-full absolute" src="\images\Salem.jpg" alt="" />
    <div className='relative'>
    <Navbar/>
    <Header/>
    <SeachBar fetchJobsCustom={fetchJobsCustom}/>
    {customSearch && 
    <button onClick={fetchJobs} className='flex pl-[1250px] mb-2'>
      <p className='bg-blue-500 px-10 py-2 rounded-md text-white'>Clear Filters</p>
    </button>
    }
    {jobs.map((job) => (
      <JobCard key={job.id} {...job}/>
    ))}

    </div>
    </>
  )
}

export default Home
