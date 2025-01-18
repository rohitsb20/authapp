import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Oauth from '../components/Oauth';

export default function Signup() {

  const [formData, setFormData] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();


const handleChange = (e) => {
  
  setFormData({ ...formData, [e.target.id] : e.target.value });
  console.log(formData);
  
}
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setError(false);
     const response = await fetch("/api/auth/signup", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(formData),
     });
     const data = await response.json();
     console.log(data);
      navigate("/signin");
     
    }
     
   catch (error) {
     console.error(error);
     setError(true);
  }
 
  

}

  return (
    <>
      <div className="w-96 mx-auto mt-20 p-4 bg-white shadow-md rounded-md">
        <h1 className="text-xl text-center mb-3 ">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input 
            onChange={handleChange}
              type="name"
              name="name"
              id="name"
              autoComplete="name"
              required
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input 
            onChange={handleChange}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input 
            onChange={handleChange}
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
            />
          </div>

        <button className="w-full disabled:opacity-80 rounded-lg p-2 bg-slate-700 hover:opacity-95 text-white uppercase" type="submit">
          Sign Up
        </button>
        <Oauth/>
        </form>

        <div>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-700">
              Sign in
            </Link>
          </p>
          <p className='text-red-600'>{error && "Something went wrong"}</p>
        </div>
      </div>
    </>
  );
}
