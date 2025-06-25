import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
    {to: '/' , label: 'Home'},
    {to: '/about', label: 'About Us'},
    {to: '/contact', label: 'Contact Us'},
    {to: '/list-candidate', label: 'List Candidate'},
    {to: '/faqs', label: 'FAQs'},
    {to: '/terms', label: 'Terms'},
    {to: '/register', label: 'Register'},
    {to: '/login', label: 'Login'},
]


export default function Navbar () {
  return (
    <nav className="bg-blue-950 text-white flex items-center px-6 h-16">

        {/*Logo */}
        <Link to="/" className="font-bold text-4xl mr-8">NIC</Link>

        {/*Links*/}
        <div classname="flex space-x-15">
            {links.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({isActive}) =>
                        isActive ? 'underline mx-10 text-lg font-semibold border-1 border-blue-900 p-1 rounded-lg' : 'hover:underline mx-10 text-lg font-semibold border-1 border-blue-900 p-1 rounded-lg'
                    }
                >
                    {label}
                </NavLink>
            ))}
        </div>
    </nav>
  )
}
