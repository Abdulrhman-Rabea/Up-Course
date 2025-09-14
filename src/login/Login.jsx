<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import MyButton from "../Component/MyButton";

>>>>>>> caf1ea7 (footer)
import React, { useState } from "react";
import { Link} from "react-router-dom";


<<<<<<< HEAD
const MyButton = ({ children, disabled, ...restProps }) => {
  return (
    <button
      className="bg-[#ff9500] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-0 w-full disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
=======
import {
  signInWithEmail,
  signInWithGoogle,
  resetPassword,
  mapLoginError,
} from "../lib/login"; 
>>>>>>> caf1ea7 (footer)

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    emailErr: "",
    passErr: "",
  });

  const emailRegex = /\S+@\S+\.\S+/;
  const passRegex = /^.{6,}$/;

  const handleForm = (e) => {
    const { name, value } = e.target;

    if (name === "useremail") {
      setEmail(value);
      if (value.length === 0) {
        setErrors({ ...errors, emailErr: "Email is required" });
      } else if (!emailRegex.test(value)) {
        setErrors({ ...errors, emailErr: "Invalid email format" });
      } else {
        setErrors({ ...errors, emailErr: "" });
      }
    }

    if (name === "userpass") {
      setPass(value);
      if (value.length === 0) {
        setErrors({ ...errors, passErr: "Password is required" });
      } else if (!passRegex.test(value)) {
        setErrors({
          ...errors,
          passErr: "Password must be at least 6 characters",
        });
      } else {
        setErrors({ ...errors, passErr: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", pass);
    console.log("Remember Me:", rememberMe);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-oklch(96.7% 0.001 286.375)">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-7xl gap-20">
        <div className="flex-grow flex flex-col justify-center p-8 hidden lg:flex">
          <div className="max-w-xl text-left text-gray-700">
            <h2 className="text-3xl font-bold mb-4">Students Testimonials</h2>
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id
              imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit
              fringilla feugiat senectus in.
            </p>

            <div className="bg-oklch(98.5% 0 0) p-6 rounded-2xl shadow-lg mb-8 text-left">
              <p className="italic text-gray-600 mb-4">
                "The web design course provided a solid foundation for me. The instructors
                were knowledgeable and supportive, and the interactive learning
                environment was engaging. I highly recommend it!"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                
                  <div className="w-10 h-10 rounded-md bg-gray-300 mr-4" style={{ backgroundImage: "url('https://placehold.co/100x100/A3A3A3/FFFFFF?text=Sarah+L')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sarah L</h4>
                  </div>
                </div>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-md border border-gray-300">
                  Read Full Story
                </button>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <button className="p-3 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button className="p-3 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>


        <div className="w-full lg:w-[600px] flex items-center justify-center p-8">
          <div className="oklch(98.5% 0 0) shadow-lg p-8 rounded-2xl w-full max-w-sm">
            <h1 className="text-center mb-6 text-black font-bold text-2xl">Login</h1>
            <div className="text-center mb-4">
              <p className="text-center text-md text-gray-500 ">Welcome back! Please log in to access your account.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-black-400 text-sm font-bold mb-2 text-left">Email</label>
                <input
                  type="text"
                  name="useremail"
                  value={email}
                  onChange={handleForm}
                  placeholder="Enter your email"
                  className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-0 text-gray-900 bg-oklch(96.7% 0.001 286.375) placeholder:text-gray-500"
                />
                {errors.emailErr && (
                  <p className="text-red-500 text-xs italic mt-2">{errors.emailErr}</p>
                )}
              </div>

              <div className="mb-1 relative">
                <label className="block text-black-400 text-sm font-bold mb-2 text-left">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="userpass"
                  value={pass}
                  onChange={handleForm}
                  placeholder="Enter your password"
                  className="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:ring-0 text-gray-900 bg-oklch(96.7% 0.001 286.375) placeholder:text-gray-500 pr-10"
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-sm leading-5 cursor-pointer text-gray-400 hover:text-gray-200 transition-colors"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M3.53 2.45L2.47 3.51a.75.75 0 001.06 1.06l1.246-1.246a10.993 10.993 0 00-2.31 2.395A11.026 11.026 0 001.995 12c.319.98.665 1.933 1.034 2.852l-1.353 1.353a.75.75 0 101.06 1.06l1.22-1.22A11.024 11.024 0 008.25 18c.954 0 1.884-.131 2.768-.37l.453-.122a.75.75 0 00.548-.823L11.23 15.3l-.285-.882A6.5 6.5 0 0112 6.5a6.471 6.471 0 011.042 2.628l.493-.493a7.973 7.973 0 001.918-.753l.488-.162c.304-.101.564-.06.745.069.18.13.255.334.225.54l-1.634 5.05A6.476 6.476 0 0117.5 15c.613 0 1.205-.091 1.772-.258l2.064 2.064a.75.75 0 101.06-1.06l-1.246-1.246a11.025 11.025 0 002.396-2.31c.369-.919.715-1.872 1.034-2.852l-1.353-1.353a.75.75 0 10-1.06 1.06l1.22 1.22a11.025 11.025 0 00-2.31-2.396L17.53 2.45a.75.75 0 00-1.06 1.06l1.246 1.246c-1.127-1.161-2.456-2.128-3.921-2.864a.75.75 0 10-.642 1.35c1.233.61 2.35 1.48 3.321 2.583L14.773 7.854l-1.42 1.42A4.985 4.985 0 0012 8.5c-.752 0-1.48-.126-2.162-.359L8.3 7.5l-1.42-1.42a1.5 1.5 0 00-2.122 0l-1.42 1.42a1.5 1.5 0 00-2.122 0l-1.42 1.42zM5.5 8.5a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 4.5c-4.7 0-9 3.2-11.4 7.5-0.1 0.3-0.1 0.7 0 1C3 16.3 7.3 19.5 12 19.5s9-3.2 11.4-7.5c0.1-0.3 0.1-0.7 0-1C21 7.7 16.7 4.5 12 4.5zM12 18c-3.3 0-6.1-2.2-8.6-6.4C5.9 8.2 8.7 6 12 6s6.1 2.2 8.6 6.4C18.1 15.8 15.3 18 12 18zM12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
                    </svg>
                  )}
                </span>
                {errors.passErr && (
                  <p className="text-red-500 text-xs italic mt-2">{errors.passErr}</p>
                )}
              </div>
              <div className="flex justify-end text-sm mb-4">
                <a href="#" className="text-gray-400 hover:text-[#ff9500] transition-colors duration-200">Forgot password?</a>
              </div>

              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-[#ff9500] rounded-full"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-400">Remember me</label>
              </div>

              <MyButton  bgColor={"#ff9500"} textColor={"text-white"} 
                disabled={
                  !email ||
                  !pass ||
                  errors.emailErr ||
                  errors.passErr
                  
                }
                
                type="submit"

              >
                
                Login
              </MyButton>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="flex-shrink mx-4 text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>

              <button
<<<<<<< HEAD
                className="flex items-center justify-center space-x-2 w-full py-2 px-4 rounded border text-gray-700 hover:bg-gray-100 transition-colors mb-4 focus:outline-none focus:ring-0"
              >

                <span className="text-black font-bold text-base">Login with Google</span>
=======
                type="button"
                onClick={handleGoogle}
                className="flex items-center justify-center space-x-2 w-full py-2 px-4 rounded border bg-[#ff9500]  hover:bg-orange-400 transition-colors mb-4 focus:outline-none focus:ring-0">
                <span className="text-black font-bold text-base text-white">
                  
                  <i className="fa-brands fa-google text-white"></i> Login with Google</span>
>>>>>>> caf1ea7 (footer)
              </button>

           
              <div className="text-center text-sm mt-4 text-gray-400">
                Don't have an account?{" "}
                  <Link to="/register" className="text-black hover:text-black cursor-pointer">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
