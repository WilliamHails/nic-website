import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [role, setRole] = useState('Candidate')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // redirect based on role
    if (role === 'Department') {
      navigate('/dashboard/department')
    } else {
      alert(`${role} dashboard not implemented yet.`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h2 className="text-xl mb-4">Login</h2>
        <label className="block mb-2">Username</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full border px-2 py-1 mb-4"
        />
        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border px-2 py-1 mb-4"
        />
        <label className="block mb-2">Role</label>
        <select
          value={role}
          onChange={e => setRole(e.target.value)}
          className="w-full border px-2 py-1 mb-4"
        >
          <option>Candidate</option>
          <option>Department</option>
          <option>Admin</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2">
          Submit
        </button>
        <p className="mt-4 text-sm">
          New? <Link to="/register" className="text-blue-600">Register here</Link>
        </p>
      </form>
    </div>
  )
}
