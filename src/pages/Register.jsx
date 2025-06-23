import React, { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    alert('Registration submitted:\n' + JSON.stringify(form, null, 2))
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl mb-4">Register</h2>
      {['username','email','password'].map(field => (
        <div key={field} className="mb-4">
          <label className="block mb-1">{field}</label>
          <input
            name={field}
            type={field==='password'?'password':'text'}
            value={form[field]}
            onChange={handleChange}
            className="w-full border px-2 py-1"
          />
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-green-600 text-white py-2 px-4">
        Register
      </button>
    </div>
  )
}
