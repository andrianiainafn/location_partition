import LeftDiv from "../components/LeftDiv.tsx";
import RightDiv from "../components/RightDiv.tsx";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className='w-[100vw]'>
            <div className='pt-16 pb-10 text-white flex justify-between items-center px-8'>
                <h1>Rent. </h1>
                <button> <Link className='text-white opacity-70' to=' ' >Contact Us</Link> | <Link to='auth/register' className='text-white opacity-70'>Sign In</Link> </button>
            </div>
            <div className='flex justify-between  px-40 w-[100%]'>
                <RightDiv/>
                <LeftDiv/>
            </div>
        </div>
    );
};

export default Register;