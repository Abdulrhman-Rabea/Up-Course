import React, { useState } from "react";
const MyButton = ({ children, disabled, ...restProps }) => {
  return (
    <button
      className="bg-[#ff9500] hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [errors, setErrors] = useState({
    nameErr: "",
    emailErr: "",
    passErr: "",
    rePassErr: "",
  });
  const emailRegex = /\S+@\S+\.\S+/;
  const passRegex = /^.{6,}$/;
  const handleform = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setName(value);
      if (value.length === 0) {
        setErrors({ ...errors, nameErr: "Name is required" });
      } else {
        setErrors({ ...errors, nameErr: "" });
      }
    }
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
    if (name === "repass") {
      setRePass(value);
      if (value.length === 0) {
        setErrors({ ...errors, rePassErr: "Please re-enter password" });
      } else if (value !== pass) {
        setErrors({ ...errors, rePassErr: "Passwords do not match" });
      } else {
        setErrors({ ...errors, rePassErr: "" });
      }
    }
  };
  return (
    <div
      className="flex justify-center items-center min-h-screen "
    >
 
      <div
        className="oklch(98.5% 0 0) shadow-lg p-8 rounded-2xl w-96 text-white"
      >
        <h3 className="text-center mb-6 text-black font-bold text-2xl">Register</h3>
        <form>
      
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="username"
              value={name}
              onChange={handleform}
              placeholder="Enter your name"
              className="shadow appearance-none border oklch(96.7% 0.001 286.375) rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-900 bg-oklch(96.7% 0.001 286.375) placeholder:text-gray-500"
            />
            {errors.nameErr && (
              <p className="text-red-500 text-xs italic mt-2">{errors.nameErr}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">Email</label>
            <input
              type="text"
              name="useremail"
              value={email}
              onChange={handleform}
              placeholder="Enter your email"
              className="shadow appearance-none border oklch(96.7% 0.001 286.375) rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-900 bg-oklch(96.7% 0.001 286.375) placeholder:text-gray-500"
            />
            {errors.emailErr && (
              <p className="text-red-500 text-xs italic mt-2">{errors.emailErr}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              name="userpass"
              value={pass}
              onChange={handleform}
              placeholder="Enter your password"
              className="shadow appearance-none border oklch(96.7% 0.001 286.375) rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-900 bg-oklch(96.7% 0.001 286.375) placeholder:text-gray-500"
            />
            {errors.passErr && (
              <p className="text-red-500 text-xs italic mt-2">{errors.passErr}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-400 text-sm font-bold mb-2">Re-enter Password</label>
            <input
              type="password"
              name="repass"
              value={rePass}
              onChange={handleform}
              placeholder="Re-enter your password"
              className="shadow appearance-none border oklch(96.7% 0.001 286.375) rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-900 bg-oklch(96.7% 0.001 286.375) placeholder:text-gray-500"
            />
            {errors.rePassErr && (
              <p className="text-red-500 text-xs italic mt-2">{errors.rePassErr}</p>
            )}
          </div>
          <MyButton
            disabled={
              errors.nameErr ||
              errors.emailErr ||
              errors.passErr ||
              errors.rePassErr
            }
            type="submit"
          >
            Register
          </MyButton>
        </form>
      </div>
    </div>
  );
}
export default Registration;
