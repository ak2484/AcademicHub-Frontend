// import axios from "axios";
// import { useState } from "react";
// import { API_URL } from "../../constants";

// // LoginForm for students
// export function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailInput = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordInput = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();

//       const res = await axios.post(
//         `${API_URL}/users/login`,
//         {
//           email,
//           password,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       console.log(res);
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className='max-w-lg mx-auto p-6 mt-[130px] bg-gradient-to-br from-lavender to-lavender-web shadow-xl rounded-xl text-dark-imperial-blue transform transition-transform hover:scale-105'
//     >
//       <h2 className='text-3xl font-bold mb-6 text-blue-800 text-center'>
//         Login
//       </h2>

//       <div className='mb-5'>
//         <label
//           htmlFor='combinedDetails'
//           className='block text-gray-700 text-sm font-medium mb-2'
//         >
//           Email
//         </label>
//         <input
//           type='email'
//           id='email'
//           name='email'
//           value={email}
//           onChange={handleEmailInput}
//           placeholder='Enter your email'
//           required
//           className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300'
//         />
//       </div>

//       <div className='mb-5'>
//         <label
//           htmlFor='password'
//           className='block text-gray-700 text-sm font-medium mb-2'
//         >
//           Password
//         </label>
//         <input
//           type='password'
//           id='password'
//           name='password'
//           value={password}
//           onChange={handlePasswordInput}
//           placeholder='Enter your password'
//           required
//           className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300'
//         />
//       </div>

//       <button
//         type='submit'
//         className=' w-full bg-gradient-to-r from-palatinate-blue to-blue-600 text-white-smoke px-5 py-3 rounded-full hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 transform hover:scale-105 text-xl'
//       >
//         Login
//       </button>

//       <div className='mt-6 text-center'>
//         <a href='#' className='text-sm text-blue-500 hover:underline'>
//           Forgot your password?
//         </a>
//       </div>
//     </form>
//   );
// }

// // EnrollForm only for college admins
// export function EnrollForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     mobileNumber: "",
//     instituteName: "",
//     dteUdiseCode: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Enrollment data:", formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className='max-w-lg mx-auto p-4 mt-[25px] bg-gradient-to-br from-lavender to-lavender-web shadow-xl rounded-xl text-dark-imperial-blue transform transition-transform hover:scale-105'
//     >
//       <h2 className='text-3xl font-bold mb-5 text-dark-imperial-blue text-center font-serif'>
//         Admin Enrollment
//       </h2>

//       <div className='mb-5'>
//         <label
//           htmlFor='instituteName'
//           className='block text-dark-imperial-blue text-lg font-medium mb-1'
//         >
//           Institute Name
//         </label>
//         <input
//           type='text'
//           id='instituteName'
//           name='instituteName'
//           value={formData.instituteName}
//           onChange={handleChange}
//           placeholder='Enter your institute name'
//           required
//           className='w-full px-4 py-3 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-blue transition duration-300 bg-white placeholder-cadmium-blue'
//         />
//       </div>

//       <div className='mb-4'>
//         <label
//           htmlFor='email'
//           className='block text-dark-imperial-blue text-lg font-medium mb-1'
//         >
//           Email
//         </label>
//         <input
//           type='email'
//           id='email'
//           name='email'
//           value={formData.email}
//           onChange={handleChange}
//           placeholder='Enter your email'
//           required
//           className='w-full px-4 py-3 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-blue transition duration-300 bg-white placeholder-cadmium-blue'
//         />
//       </div>

//       <div className='mb-4'>
//         <label
//           htmlFor='mobileNumber'
//           className='block text-dark-imperial-blue text-lg font-medium mb-1'
//         >
//           Mobile Number
//         </label>
//         <input
//           type='tel'
//           id='mobileNumber'
//           name='mobileNumber'
//           value={formData.mobileNumber}
//           onChange={handleChange}
//           placeholder='Enter your mobile number'
//           required
//           className='w-full px-4 py-3 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-blue transition duration-300 bg-white placeholder-cadmium-blue'
//         />
//       </div>

//       <div className='mb-5'>
//         <label
//           htmlFor='dteUdiseCode'
//           className='block text-dark-imperial-blue text-lg font-medium mb-1'
//         >
//           DTE/UDISE Code
//         </label>
//         <input
//           type='text'
//           id='dteUdiseCode'
//           name='dteUdiseCode'
//           value={formData.dteUdiseCode}
//           onChange={handleChange}
//           placeholder='Enter DTE/UDISE Code'
//           required
//           className='w-full px-4 py-3 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-blue transition duration-300 bg-white placeholder-cadmium-blue'
//         />
//       </div>

//       <div className='mb-4'>
//         <label
//           htmlFor='message'
//           className='block text-dark-imperial-blue text-lg font-medium mb-2'
//         >
//           Message
//         </label>
//         <textarea
//           id='message'
//           name='message'
//           value={formData.message}
//           onChange={handleChange}
//           placeholder='Write your message'
//           required
//           className='w-full px-4 py-3 border border-lavender rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-blue transition duration-300 bg-white placeholder-cadmium-blue'
//         />
//       </div>

//       <button
//         type='submit'
//         className='w-full bg-gradient-to-r from-palatinate-blue to-blue-600 text-white-smoke px-5 py-3 rounded-full hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 transform hover:scale-105 text-xl'
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

// // Default export
// // export default { LoginForm, EnrollForm };
