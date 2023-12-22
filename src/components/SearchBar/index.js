import React, { useState, props} from 'react'

function SeachBar(props) {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: ""
  })

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  }

  const search = async() => {
    await props.fetchJobsCustom(jobCriteria);
  }

  return (
    <div className='flex gap-4 my-10 justify-center px-10'>
      <select onChange={handleChange} name='title' value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-50 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Job Role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Front-End Developer">Front-End Developer</option>
        <option value="Back-End Developer">Back-End Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>
      <select onChange={handleChange} name='type' value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-50 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Job Type</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select onChange={handleChange} name='location' value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-50 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select onChange={handleChange} name='experience' value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-50 font-semibold rounded-md'>
        <option value="" disabled hidden selected>Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>
      <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  )
}

export default SeachBar