// import React from "react";

// const MyButton = ({ children, disabled, bgColor, ...restProps }) => {
//   return (
//     <button
//       className={`bg-[${bgColor}] hover:brightness-110 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-0 w-full disabled:opacity-50 disabled:cursor-not-allowed`}
//       disabled={disabled}
//       {...restProps}
//     >
//       {children}
//     </button>
//   );
// };

// export default MyButton;




import React from 'react';


const Mybutton = ({ text, bgColor = '#ff9500' }) => {
  return (
    <button 
      className={`bg-[${bgColor}] hover:brightness-110 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-0 w-full disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {text}
    </button>
  );
const MyButton = ({ children, disabled, bgColor, textColor, ...restProps }) => {
	return (
		<button
			className={`bg-[${bgColor}] hover:brightness-110 ${textColor} font-bold py-2 px-4 rounded focus:outline-none focus:ring-0 w-full disabled:opacity-50 disabled:cursor-not-allowed`}
			disabled={disabled}
			{...restProps}
		>
			{children}
		</button>
	);
};

export default Mybutton;

