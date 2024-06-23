"use client"
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'

const PaymentPage = ({username}) => {
    // const {data: session} = useSession()
    const [paymentform, setPaymentform] = useState({name:"", message:"", amount:""})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    // useEffect(() => {
    //   if(searchParams.get("paymentdone") == "true"){
    //     toast('Thanks for your donation!',{
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         });        
    //     }
    //     router.push(`/${username}`)
    // }, [])    

    const handleChange = (e)=>{
        setPaymentform({...paymentform, [e.target.name]: e.target.value})
    }

    const getData = async ()=>{
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const pay = async (amount) => {
        // get order id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        
        var options = {
            "key": currentUser.razorpayid,
            "amount": amount, 
            "currency": "INR",
            "name": "TeaBreeze", 
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, 
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar", 
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        toast('Thanks for your donation!',{
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
        router.push(`/${username}`)
    }

    // var rzp1 = new Razorpay(options);
    // rzp1.open();

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
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

        <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>            

        <div className='cover w-full bg-red-50 relative'>
            <img className='object-cover w-full h-[250px] md:h-[350px]' src={currentUser.coverpic} alt="" />

            <div className='absolute -bottom-16 right-[36%] md:right-[45%] border-2 overflow-hidden border-white rounded-full size-36'>
                <img className='rounded-full object-cover size-36' width={128} height={128} src={currentUser.profilepic} />
            </div>
        </div>

        <div className="info flex flex-col gap-1 justify-center items-center my-20 px-5 md:px-0 text-xs md:text-base">
            <div className='font-bold text-lg text-center'>@{username}</div>
            <div className='text-slate-400 text-center'>Let's help {username} get a refreshing cup of tea!</div>
            <div className='text-slate-400 text-center'>{currentUser.name} is raising funds for tea. Contribute to accomplish the goal!</div>
            <div className='text-slate-400 text-center'>{payments.length} Payments . ₹{payments.reduce((a,b)=>a+b.amount, 0)} Raised</div>

            <div className="payment flex flex-col md:flex-row gap-3 w-[90%] md:w-[80%] mt-6">
                <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg px-6 md:px-10 md:py-4">
                    {/* show list of all supporters as a leaderboard */}
                    <h2 className='text-2xl font-bold my-4'>Top 10 Supporters</h2>
                    <ul className='ml-3 md:ml-5'>    
                        {payments.length == 0 && <li>No payments yet</li>}
                        {payments.map(( p,i )=>{
                            return <li key={i} className='my-2 flex gap-2 items-center'>
                            <img width={25} className='invert' src="user.png" alt="user_avatar" />
                            <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message 
                                "{p.message}"</span>                            
                        </li>        
                        })}
                                        
                    </ul>
                </div>

                <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg px-6 md:px-10 md:py-4">
                    <h2 className='text-2xl font-bold my-4'>Make a Payment</h2>

                    <div className="flex flex-col gap-2">
                        <input onChange={handleChange} value={paymentform.name} type="text" name='name' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                        <input onChange={handleChange} value={paymentform.message} type="text" name='message' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                        <input onChange={handleChange} value={paymentform.amount} type="text" name='amount' className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />                        
                        <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
                        dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2 text-center me-2 mb-2 
                        disabled:from-slate-500 disabled:to-slate-600" disabled={paymentform.name?.length<3 || 
                        paymentform.message?.length<4 || paymentform.amount?.length<1}>Pay</button>
                    </div>

                    {/* or choose from these amounts */}
                    <div className="flex flex-col  gap-1 md:flex-row md:gap-4 md:mt-2 md:justify-center">
                        <div className="bg-slate-800 p-3 rounded-lg text-center" onClick={()=>pay(1000)}>Pay ₹10</div>
                        <div className="bg-slate-800 p-3 rounded-lg text-center" onClick={()=>pay(2000)}>Pay ₹20</div>
                        <div className="bg-slate-800 p-3 rounded-lg text-center" onClick={()=>pay(3000)}>Pay ₹30</div>
                    
                        {/* <button onClick={()=>pay(1000)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
                        dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2 text-center me-2 mb-2">
                            Pay ₹1000</button>
                        <button onClick={()=>pay(2000)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
                        dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2 text-center me-2 mb-2">
                            Pay ₹2000</button>
                        <button onClick={()=>pay(3000)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
                        dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-2 text-center me-2 mb-2">
                            Pay ₹3000</button> */}
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default PaymentPage
