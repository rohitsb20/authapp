import { Link } from "react-router-dom";

const links = [
    {
        to: "/",
        name: "Home"
    },
    {
        to: "/signin",
        name: "Signin"
    },
    {
        to: "/about",
        name: "About"
    }
]

export default function Header() {
  return (
    <div className="bg-gray-800 flex justify-between items-center px-12 h-16">
        <div>
            <Link to="/" className="text-green-500 text-xl font-semibold">Authapp</Link>
        </div>
        <div className="flex space-x-4">
{
    links.map( link => <Link to={link.to} key={link.name} className="text-white text-lg">{link.name}</Link>)
}
        </div>
    </div>
  )
}
