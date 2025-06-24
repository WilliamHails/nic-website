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
        <Link to="/" className="font-bold text-xl mr-8">MyCompany</Link>

        {/*Links*/}
        <div classname="flex space-x-4">
            {links.map(({ to, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    className={({isActive}) =>
                        isActive ? 'underline mx-3' : 'hover:underline mx-3'
                    }
                >
                    {label}
                </NavLink>
            ))}
        </div>
    </nav>
  )
}
