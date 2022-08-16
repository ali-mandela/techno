import React from 'react';

const Testimonial = () => {
    return (
        <div className='mx-24 my-20'>
            <h1 className='text-violet-900 font-Poppins font-semibold text-4xl'>TESTIMONIALS</h1>
            <h1 className='text-slate-800 font-Poppins font-semibold text-2xl mt-8'>TECHNOISOLUTIONS TECHNICAL TEAM IS TOP NOTCH SAY OUR CUSTOMERS. HERE ARE A FEW TESTIMONIALS</h1>
            <div class="grid  grid-flow-col grid-cols-2 gap-4 mt-6">
                <div className='bg-white rounded-2xl p-10'>
                    <h1 className='text-slate-800 font-Poppins font-semibold text-2xl uppercase'>"zoho crm"</h1>
                    <h1 className='text-slate-400 font-Poppins text-xl my-4'>Technoisolutions Support for ZOHO CRM is one of  the  best in  the  market, I  used for a long  time. And the support is great.</h1>
                    <h2 className='text-slate-800 font-Poppins font-semibold'>Mr. Raman</h2>
                    <h1 className='text-slate-400 font-Poppins  text-xl'>IT Manager</h1>
                </div>

                <div className='bg-white rounded-2xl p-10'>
                    <h1 className='text-slate-800 font-Poppins font-semibold text-2xl '>"Migratioin to ZOHO "</h1>
                    <h1 className='text-slate-400 font-Poppins text-xl my-4'>We are looking for implementationof ZOHO and we approach Techno I Solutions  for system migration from open source CRM to ZOHO through the process we found Techno I Solutions team veryproffessional and they made the ZOHO CRM implementation smoothly. WE recommenend Techno I Solutions.</h1>
                    <h2 className='text-slate-800 font-Poppins font-semibold'>Sanjay</h2>
                    <h1 className='text-slate-400 font-Poppins  text-xl'>IT Manager, Confident Group</h1>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;