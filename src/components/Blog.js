import React from 'react';
import arrow from '../assets/rightarrow.png'
const Blog = () => {
    return (
        <div className='p-16 bg-white'>
            <div className=''>
                <video className='w-auto h-96 hero container max-w-screen-lg mx-auto text-end  justify-center ' src="https://technoisolutions.com/wp-content/uploads/2022/05/cyber-security-services107.mp4" controls></video>
            </div>
            <h1 className='text-violet-700 font-bold text-4xl  my-8 text-center font-Poppins'>Blogs</h1>
            <div className='grid  grid-flow-col grid-cols-3 gap-4 mt-6'>
                <div className='bg-slate-200 rounded-2xl p-8'>
                    <h1 className='text-violet-700 font-Poppins font-semibold text-2xl uppercase'>Where to get the Best Support Services to your Business</h1>
                    <h1 className=' font-Poppins text-xl my-4'>When it comes to technical support products and services, you should look …</h1>
                    <div className='flex
                    '>

                        <a className='text-orange-500 font-Poppins text-xl' href="">Read more </a>
                        <img className='ml-2 h-full mt-3' src={arrow} alt="" />
                    </div>
                </div>
                <div className='bg-slate-200 rounded-2xl p-8'>
                    <h1 className='text-violet-700 font-Poppins font-semibold text-2xl uppercase'>Primary advantages of Business Software program</h1>
                    <h1 className=' font-Poppins text-xl my-4'>Business application is software or maybe a group of laptop programs that …</h1>
                    <div className='flex
                    '>

                        <a className='text-orange-500 font-Poppins text-xl' href="">Read more </a>
                        <img className='ml-2 h-full mt-3' src={arrow} alt="" />
                    </div>
                </div>
                <div className='bg-slate-200 rounded-2xl p-8'>
                    <h1 className='text-violet-700 font-Poppins font-semibold text-2xl uppercase'>Sites Like Fiverr – As to why You Shouldn’t Make use of them</h1>
                    <h1 className=' font-Poppins text-xl my-4'>Many people use sites like Fiverr to hire self employed for a …</h1>
                    <div className='flex
                    '>

                        <a className='text-orange-500 font-Poppins text-xl' href="">Read more </a>
                        <img className='ml-2 h-full mt-3' src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;