import {Link} from "react-router-dom";
import {authService} from "../services/auth.services.ts";
import {ChangeEvent, useState} from "react";

const LeftDiv = () => {
    const [information,setInformation] = useState({})
    const HandleChange = (e:ChangeEvent <HTMLInputElement>  )=>{
        const name = e.target.name
        const value = e.target.value
        setInformation(info=> ({...info,[name]:value}))
    }
    return (
        <div className='bg-white flex flex-col space-y-5 text-[#000] w-[40%] p-8 rounded-xl'>
            <h2 className='text-center text-2xl'>List a property for rent</h2>
            <div className='flex flex-col space-y-8'>
                <div>
                    <h5 className='text-center'>What best describe you ?</h5>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div className='flex justify-between items-center'>
                        <input onChange={HandleChange} name='fname' type='text' className=' w-[45%] bg-transparent p-1 outline-none border border-1 border-[#444] rounded-lg' placeholder='first Name'/>
                        <input onChange={HandleChange} name='lname' type='text' className=' w-[45%] bg-transparent p-1 outline-none border border-1 border-[#444] rounded-lg' placeholder='Last Name'/>
                    </div>
                    <input onChange={HandleChange} name='email' type='email' className='bg-transparent p-1 outline-none border border-1 border-[#444] rounded-lg' placeholder='Email'/>
                    <input onChange={HandleChange} name='password' type='password' className='bg-transparent p-1 outline-none border border-1 border-[#444] rounded-lg' placeholder='Password'/>
                    <button onClick={()=>authService.HandleClickCreate(information)} className='bg-blue-500 text-white'>Create Account</button>
                </div>
                <div className='text-center text-sm'>
                    <p className='text-lg'>Already have a login ? <Link to='auth/login' className='text-blue-500'>Sign in</Link></p>
                    <p className='opacity-70 '>Try creating an account,I am agreeing to the Rent.com</p>
                    <p ><Link to='' className='text-blue-500' >Term of Service</Link> <span className='opacity-70'>and</span> <Link to='' className='text-blue-500'>Privacy Policy</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LeftDiv;