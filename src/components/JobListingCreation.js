import React, { useState, props } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import Navbar from './Navbar';

function JobListingCreation(props) {
 const [jobDetails, setJobDetails] = useState({
    title: "",
    company: "",
    type: "",
    experience: "",
    location: "",
    description: "",
    skills: [],
    jobLink: "",
 });


const [errorMsg, setErrorMsg] = useState("");

const handleChange = (e) => {
 const { name, value } = e.target;

 if (name === "description") {
    if (value.length <= 45) {
      setJobDetails((prevDetails) => (
        {
          ...prevDetails,
          [name]: value,
        }
      ));
      setErrorMsg("");
    } else {
      setErrorMsg("Description should not exceed 30 characters.");
    }
 } else {
    setJobDetails((prevDetails) => (
      {
        ...prevDetails,
        [name]: value,
      }
    ));
 }
};

 const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map((skill) => skill.trim());
    setJobDetails((prevDetails) => (
      {
        ...prevDetails,
        skills,
      }
    ));
 };

 const handleSubmit = async(e) => {
  e.preventDefault();
  console.log(jobDetails);
    await addDoc(collection(props.db, "jobs"),{
      ...jobDetails,
      postedOn: new Date(),
    }).then(function(res){
      alert("Document written with ID: ", res.id);
    }).catch(function(err){
      alert("Error adding document: ");
    })
 }


 return (
    <div className=''>
      <img className="h-[300px] w-full absolute" src="\images\Salem.jpg" alt="" />
      <div className='flex flex-col gap-8 items-center relative'>
      <Navbar/>
      <h2 className='text-3xl font-bold text-white'>Craft Your Dream Team - Job Listing Wizard 🚀</h2>
      <p className='text-white text-[18px] font-mono border border-white rounded-md p-6'>Welcome, Maestro! Let's conjure up a job listing that sparks excitement and attracts the brightest stars.</p>
      </div>
      <form className='relative max-w-7xl p-12 mx-auto rounded-md shadow-md bg-zinc-100 mt-20 grid grid-flow-row-dense grid-cols-3 grid-rows-3' onSubmit={handleSubmit}>

        <div className='colspan-2 p-4'>
          <label>Job Role</label>
          <select className='w-80 h-9 ml-3 border border-gray-400 rounded-md' type="text" name="title" value={jobDetails.title} onChange={handleChange} required>
          <option value="" disabled hidden selected>--select--</option>
          <option value="iOS Developer">iOS Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Front-end Developer">Front-end Developer</option>
          <option value="Back-End Developer">Back-End Developer</option>
          <option value="Developer Advocate">Developer Advocate</option>
          </select>
        </div>

        <div className='colspan-1 p-4'>
        <label>Company: </label>
        <input className='w-80 h-9 ml-3 border border-gray-400 rounded-md' type="text" name="company" value={jobDetails.company} onChange={handleChange} required />
        </div>

        <div className='colspan-2 p-4'>
          <label>Job Type :</label>
          <select className='w-80 h-9 ml-3 border border-gray-400 rounded-md' type="text" name="type" value={jobDetails.type} onChange={handleChange} required>
              <option value="" disabled hidden selected>--select--</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
          </select>
        </div>

        <div className='colspan-2 p-4'>
          <label>Experience :</label>
          <select className='w-80 h-9 ml-3 border border-gray-400 rounded-md' type="text" name="experience" value={jobDetails.experience} onChange={handleChange} required>
              <option value="" disabled hidden selected>--select--</option>
              <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
          </select>
        </div>

        <div className='colspan-2 p-4'>
          <label>Location :</label>
          <select className='w-80 h-9 ml-3 border border-gray-400 rounded-md' type="text" name="location" value={jobDetails.location} onChange={handleChange} required>
              <option value="" disabled hidden selected>--select--</option>
              <option value="Remote">Remote</option>
              <option value="In-Office">In-Office</option>
              <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className='colspan-2 p-4'>
        <label>Description: </label>
        <textarea className='w-80 h-9 ml-3 border border-gray-400 rounded-md' name="description" value={jobDetails.description} onChange={handleChange} required />
        <p>{errorMsg}</p>
        </div>

        <div className='colspan-2 p-4'>
        <label>Skills (comma-separated): </label>
        <input className='w-72 h-9 ml-3 border border-gray-400 rounded-md' type="text" name="skills" value={jobDetails.skills.join(',')} onChange={handleSkillsChange} required />
        </div>

        {/* <div className='colspan-2 p-4'>
        <label>Job Link: </label>
        <input className='h-9 w-80 ml-3 border border-gray-400 rounded-md' type="text" name="jobLink" value={jobDetails.jobLink} onChange={handleChange} required />
        </div> */}

        <div className='colspan-2 p-4'>
        <label>Job Link: </label>
        <input type="url" className='h-9 w-80 ml-3 border border-gray-400 rounded-md' name="jobLink" value={jobDetails.jobLink} onChange={handleChange} required />
        </div>

        <button className='bg-violet-700 rounded-md mt-10 ml-7 w-44 h-9 text-white font-semibold hover:translate-y-1 hover:shadow-lg' type="submit">Submit</button>
      </form>
    </div>
 );
}

export default JobListingCreation;