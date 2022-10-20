import React from 'react';
import arrow from '../assets/rightarrow.png'
import '../css/Blog.css'

const Blog = () => {
    return ( <> 
    <div className='blogouter'>
        <div className='bloginner'>

            <div className='blogbody'>
                <video
                    className='w-auto  hero container max-w-screen-sm mx-auto text-end  justify-center '
                    src="https://technoisolutions.com/wp-content/uploads/2022/05/cyber-security-services107.mp4"
                    controls></video>

                <h1>Blogs</h1>
                <div className=' blogdivbody'>
                    <div className=' blogdivbodyb'>
                        <h1 >Where to get the Best Support Services to your Business</h1>
                        <h2>When it comes to technical support products and services, you should look …</h2>

                        <a href="">Read more
                            <img src={arrow} alt=""/></a>

                    </div>
                    <div className=' blogdivbodyb'>
                        <h1 >Primary advantages of Business Software program</h1>
                        <h2>Business application is software or maybe a group of laptop programs that …</h2>

                        <a href="">Read more
                            <img src={arrow} alt=""/>
                        </a>

                    </div>
                    <div className=' blogdivbodyb'>
                        <h1 >Sites Like Fiverr – As to why You Shouldn’t Make use of them</h1>
                        <h2>Many people use sites like Fiverr to hire self employed for a …</h2>

                        <a href="">Read more
                            <img src={arrow} alt=""/>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div> </> );
};

export default Blog;