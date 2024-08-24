import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import TypewriterComponent from './Typewritercomponent';
import HeroSlider from './HeroSlider';


const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

  

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10 '  >

                <span className=' mx-auto  px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Find Your Dream Job Today</span>
                <h1 className='text-5xl font-bold '>Unlock Your Future <br /> with the <span className=' m-3 text-[#0ed2f7]' >Right Job<TypewriterComponent/></span>
              
                <HeroSlider/>
                </h1>
                <h2  className='text-5xl font-bold'>Career<span className='text-[#0ed2f7]'>Hive:</span> Empowering Your Job<span className='text-[#0ed2f7]'>Search</span>  with Smart Matching and <span className='text-[#0ed2f7]'>Easy</span> Applications</h2>
                <div className='bg-[] m-1'>
                    <p className='text font-bold  ' >
                        For job seekers, we offer a tailored experience that matches your unique skills, experiences, and aspirations with thousands of job listings from leading companies across various industries. Our advanced search filters and personalized job recommendations ensure that you find the right role faster and easier than ever before.
                        For employers, our intuitive job posting tools and extensive candidate
                        database make it simple to find, screen, and hire the best talent.
                        With access to a diverse pool of qualified professionals, you can
                        fill roles quickly and efficiently, ensuring your team has the skills
                        and expertise needed to succeed.
                        Join our community today and take the next step toward your goals.
                        Whether you’re seeking the next step in your career or looking for
                        the perfect candidate, Jobportal is here to help you succeed.</p></div>
                <div className='flex w-[50%] shadow-lg border border-gray-300 pl-9 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#0ed2f7]">
                        <Search className='h-5 w-8' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection