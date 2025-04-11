// import React from 'react'
// import Header from '../component/Header'
// import Footer from '../component/Footer'
// import Regestrion from './Regestrion'

// const Contact = () => {
//   return (
    
//   )
// }

// export default Contact
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
        <Header/>
        <div className=''>
        <div className='bg-sky-100 p-30 '>
          <h1 className='font-bold text-4xl '>Contact us</h1>
        </div>
        <div className='flex'>
          <div className=' m-30 my-20 w-1/2'>
            <p className=' m-3 text-blue-400'>Contact us</p>
            
            <h2 className=' m-2 text-2xl font-bold '>Get in touch with us</h2>
            
            <h3 className='m-1'> 0123456789</h3>

            <h3 className='m-1'>info@sdhub.com</h3>
            <h3 className='m-1'>Mehidipatnam,Hyderabad</h3>



          </div>
          <div className='m-30 my-20 w-1/2'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className='block' >Name</label>
      <input className='block border w-100 h-8 w-full ' type="text" placeholder="" {...register("Full Name", {required: true})} />
      <label className='block'>Email</label>
      <input className='block border w-100 h-8 w-full ' type="text" placeholder="" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <label className='block' >Mobile number</label>
      <input className='block border w-100 h-8 w-full' type="tel" placeholder="" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <label className='block' >Message(Optinoal)</label>
      <input className='block border w-100 h-40 w-full' type="text" placeholder="" {...register} />
      <br />

      <input className='block border text-blue-400 p-2 rounded-md ' type="submit" />
    </form>

            
            


          </div>
        </div>
        </div>

        <Footer/>
   </>
    
  );
}