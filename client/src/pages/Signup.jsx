import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
      <div className="w-96 mx-auto mt-20 p-4 bg-white shadow-md rounded-md">
        <h1 className="text-xl text-center mb-3 ">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
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
        </form>

        <div>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
