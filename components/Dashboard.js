"use client"
import { useSession, signIn, signOut } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const Dashboard = () => {

  const { data: session, update } = useSession()
  // if (!session) {
  //   const router = useRouter()
  //   router.push('/login')
  // }
  
  const router = useRouter()
  const [form, setform] = useState({})

  useEffect(() => {
    getData()
    if (!session) {
      router.push('/login')
    }
  }, [router, session])

  const getData = async ()=>{
    let u = await fetchuser(session?.user.name)
    setform(u)
  }
  
  const handleChange = (e)=>{
    setform({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e)=>{
    let a = await updateProfile(e, session.user.name)
    toast('Profile Updated!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <ToastContainer />
    
    <div className='py-5 container mx-auto px-5 md:px-0'>
      <h1 className="font-bold text-3xl my-5 text-center">
        Welcome to your Dashboard!
      </h1>

      <form className='max-w-2xl mx-auto' action={handleSubmit}>
        <div className="my-2">
          <label htmlFor="name" className='block mb-2 text-sm font-medium'>Name</label>
          <input value={form.name?form.name: ""} onChange={handleChange} type="text" name='name' id='name'
          className='block w-full p-2 rounded-lg text-sm bg-slate-700' />
        </div>

        <div className="my-2">
          <label htmlFor="email" className='block mb-2 text-sm font-medium'>Email</label>
          <input value={form.email?form.email: ""} onChange={handleChange} type="text" name='email' id='email'
          className='block w-full p-2 rounded-lg text-sm bg-slate-700' />
        </div>

        <div className="my-2">
          <label htmlFor="username" className='block mb-2 text-sm font-medium dark:text-white'>Username</label>
          <input value={form.username?form.username: ""} onChange={handleChange} type="text" name='username' id='username'
          className='block w-full p-2 rounded-lg text-sm bg-slate-700' />
        </div>

        <div className="my-2">
          <label htmlFor="profilepic" className='block mb-2 text-sm font-medium dark:text-white'>Profile Picture</label>
          <input value={form.profilepic?form.profilepic: ""} onChange={handleChange} type="text" name='profilepic' id='profilepic'
          className='block w-full p-2 rounded-lg text-sm bg-slate-700' />
        </div>

        <div className="my-2">
          <label htmlFor="coverpic" className='block mb-2 text-sm font-medium dark:text-white'>Cover Picture</label>
          <input value={form.coverpic?form.coverpic: ""} onChange={handleChange} type="text" name='coverpic' id='coverpic'
          className='block w-full p-2 rounded-lg text-sm bg-slate-700' />
        </div>

        <div className="my-2">
          <label htmlFor="razorpayid" className='block mb-2 text-sm font-medium dark:text-white'>Razorpay Id</label>
          <input value={form.razorpayid?form.razorpayid: ""} onChange={handleChange} type="text" name='razorpayid' id='razorpayid'
          className='block w-full p-2 rounded-lg text-sm bg-slate-700' />
        </div>

        <div className="my-2">
          <label htmlFor="razorpaysecret" className='block mb-2 text-sm font-medium dark:text-white'>Razorpay Secret</label>
          <input value={form.razorpaysecret?form.razorpaysecret: ""} onChange={handleChange} type="text" name='razorpaysecret' id='razorpaysecret'
          className='block w-full p-2 rounded-lg text-sm bg-slate-700 text-white' />
        </div>

        <div>
          <button type="submit" className="block w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 
          hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
          font-medium rounded-lg text-md px-5 py-2 text-center mb-2 mt-1">Save</button>
        </div>        
        

      </form>

    </div>
    </>
  )  
}

export default Dashboard
