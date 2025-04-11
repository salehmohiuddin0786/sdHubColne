import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function Regestrion() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
    <div className='' >
    <Header />
    <div className='m-50 flex justify-center text-center'>

    <a target='_blank' className='border bg-blue-500 rounded-md p-5 font-bold text-white w-1/2' href="https://docs.google.com/forms/d/e/1FAIpQLSd0z9wffmY77WoLgFZXn5HflaBRK2g-ewm8OEzP6Hmepx9XQw/viewform"> regestrion from</a>

    </div>

    <Footer/>
    </div>
    </>
  );
}
