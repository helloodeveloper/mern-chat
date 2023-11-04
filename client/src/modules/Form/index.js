import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {useNavigate} from 'react-router-dom';

const Form = ({
    isSignInPage = true,
}) => {
    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName : ''
        }),
        email : '',
        password : ''
    })
    const navigate = useNavigate();
    //console.log(data);
  return (
    <div className="h-screen bg-light flex items-center justify-center shadow-xl">
        <div 
        className={isSignInPage ? "bg-white w-[500px] h-[500px] shadow-light rounded-lg flex flex-col p-5 " :"bg-white w-[500px] h-[580px] shadow-light rounded-lg flex flex-col p-5 "}
    >
        <div
            className="flex flex-col items-center"
        >
        <div
            className="text-4xl font-extrabold"
        >
            Welcome {isSignInPage && "Back"}
        </div>
        <div
            className="text-xl font-thin mt-2"
        >
             {isSignInPage ? "Sign In to get explored" : "Sign Up to get Started !"}
        </div>
        </div>
        <div 
            className="mt-5"
        >
        <form onSubmit={()=> console.log("Submitted")}>
        {!isSignInPage && <Input 
            label="Full Name" 
            name="Name" 
            type="text"
            placeholder="Enter your full name" 
            value={data.fullName} 
            onChange={(e) => setData({...data, fullName: e.target.value})}    
        />}
        <Input 
            label="Email" 
            name="Email" 
            type="email" 
            placeholder="Enter your Email address" 
            value={data.email}
            onChange={(e) => setData({...data, email: e.target.value})}    
        />
        <Input 
            label="Password" 
            name="password" 
            type="password" 
            placeholder="Enter your password" 
            value={data.password}
            onChange={(e) => setData({...data, password: e.target.value})}    
        />
        
        <Button type='submit' label={ isSignInPage ? "Sign In" : "Sign Up" } />
        </form>
        </div>
        <div className="ml-24 font-medium">{isSignInPage ? "Didn't have an account ?" : "Already have an account ?" }<span className="ml-1 text-slate-700 cursor-pointer underline hover:text-slate-500" onClick={()=> navigate(isSignInPage ? '/users/sign_up' : '/users/sign_in') }>{isSignInPage ? "Sign Up" : "Sign In"}</span></div>

        </div>
    </div>
  )
}
  
export default Form
