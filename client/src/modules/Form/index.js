import Button from "../../components/Button"
import Input from "../../components/Input"

const Form = () => {
  return (
    <div 
        className="bg-white w-[500px] h-[580px] shadow-light rounded-lg flex flex-col p-5 "
    >
        <div
            className="flex flex-col items-center"
        >
        <div
            className="text-4xl font-extrabold"
        >
            Welcome
        </div>
        <div
            className="text-xl font-thin mt-2"
        >
            Sign Up to get Started !
        </div>
        </div>
        <div 
            className="mt-5"
        >
        <Input label="Full Name" name="Name" placeholder="Enter your full name"/>
        <Input label="Email" name="Email" type="email" placeholder="Enter your Email address"/>
        <Input label="Password" name="password" type="password" placeholder="Enter your password"/>
        </div>
        <Button label="Sign Up" />
        <div className="ml-24 font-medium">Already have an account ? <span className=" text-slate-700 cursor-pointer underline hover:text-slate-500">Sign In</span></div>

    </div>
  )
}
  
export default Form
