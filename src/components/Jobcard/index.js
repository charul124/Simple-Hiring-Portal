import React, { useState } from 'react'
import dayjs from 'dayjs'

function JobCard(props) {
    // const skills = ["JavaScript", "React", "NodeJs"]
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');
  return (
    <div className='Flex inline-block ml-[1%] mt-12'>
      <div className='Flex gap-5 p-5'>
    <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#" className="w-full block h-full">
            <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" className="h-[90px] w-full object-cover"/>
            <div className="bg-white w-full p-4 text-left">
                <p className="text-violet-500 text-2xl font-medium">
                    {props.title}
                </p>
                <p className="text-gray-800 text-sm font-medium mb-2">
                    {props.company} - Posted {diffInDays > 1? `${diffInDays} days` : `${diffInDays} day`} ago
                </p>
                <p className="text-gray-800 font-light text-md pb-1">
                {props.type} &#x2022; {props.experience} &#x2022; {props.location}
                </p>
                <p className="text-gray-600 font-light text-md">
                    {props.description}
                    <a className="inline-flex text-violet-500 pl-1" href="#">Read More...</a>
                </p>
                <div className='flex items-center gap-2 pt-3'>
                    {props.skills.map((skill, i) => (
                        <p key={i} className='text-gray-500 py-1 px-2 rounded-md border border-gray-500'>{skill}</p>
                    ))}
                </div>
                <div className="flex flex-wrap justify-starts items-center py-2 border-b-2 text-xs text-white font-medium">
                   
                </div>
                <div className="flex items-center mt-2">
                    <a href={props.job_link}>
                        <button className="text-white px-10 bg-violet-600 font-semibold py-2 rounded-md">Apply</button>
                    </a>
                </div>
            </div>
        </a>
    </div>
    
</div>


    </div>
  )
}

export default JobCard
