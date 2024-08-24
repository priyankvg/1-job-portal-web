import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'


const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer '>
            <div>
                <h1 className='font-bold  text-black-700 text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            
            <div>
                <h1 className='font-bold text-red-500 text-lg my-2'>{job?.title}</h1>
                <p className='text-sm font-bold text-blue-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-black-700 font-bold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-green-700 font-bold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>
            </div>
            
                     

        </div>
    )
}

export default LatestJobCards