import React, { useState } from 'react'
import Main from '../3dAnimations/Main';
import emailjs from "@emailjs/browser";

import styled from 'styled-components';
import { Loader, SendHorizontalIcon, Snowflake } from 'lucide-react';
import toast from 'react-hot-toast';
const Div=styled.div`
margin-top:15%;
@media(max-width:768px){
width:80%;
margin-top:20%;
margin-left:10%;
}
`


export default function Contact() {
  const [isSending,setIsSending]=useState(false);
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    subject:"",
    message:""
  });
  const SERVICE_ID = import.meta.env.VITE_EMAILSERVICEID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILTEMPLATEID;
  const sendEmail = (formData) => {
  const PUBLIC_KEY = import.meta.env.VITE_PUBLICAPIKEY;
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setIsSending(true)
    try {
      await sendEmail(formData);
      toast.success("Mail sent successfully!!🤗")
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong!😥");
    }finally{
      setIsSending(false)
    }
  }


  return (
    <div >
      <Div className='w-[50%] '>
        <h1 className='text-gray-300 text-4xl !pl-10 !pt-10'><Snowflake className='animate-bounce' />Let's Connect!!</h1>
        {/* Email template */}
        <div className='w-full !pt-20 '>
        <form onSubmit={handleSubmit} className="flex w-full flex-wrap gap-y-7 justify-center">
          
          <input type="text"
          placeholder='Your name'
            value={formData.name}  
            onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
            className="w-full !p-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:border-white transition-transform duration-300" 
            />
          <input type="email" name='email'
          value={formData.email} 
          placeholder="Your Email" 
          className="w-full !p-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:border-white transition-transform duration-300" 
          onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
          required />
          
          <input type="text" name="subject" 
          value={formData.subject}
          placeholder="Enter Subject" 
          className="w-full !p-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:border-white transition-transform duration-300" 
          onChange={(e)=>{setFormData({...formData,subject:e.target.value})}} required />
          
          <textarea 
          name="message" 
          value={formData.message} 
          placeholder="Your Message..." 
          className="overflow-y-scroll custom-scrollbar w-full !p-2 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg hover:border-white transition-transform duration-300 " rows={4} 
          onChange={(e)=>{setFormData({...formData,message:e.target.value})}} required></textarea>
          <button type="submit" disabled={isSending} className={`flex ${isSending?'cursor-not-allowed':'cursor-pointer'} justify-center self-center bg-orange-500 text-white !p-2 rounded w-50 hover:text-gray-400`}>{isSending==false?<span className='flex'>Send Message<SendHorizontalIcon/></span>:<Loader className='animate-spin'/>}</button>
        </form>
      </div>

      </Div>
      <Main/>
    </div>
  )
}
