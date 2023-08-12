import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email: "",
    password: ""
  })

  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const handleChange = (e : any) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e : any) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate('/')
    } catch (err:any) {
      setError(err.response.data)
    }
  }

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" name="username" id="" placeholder='username' onChange={handleChange} />
        <input type="password" name="password" id="" placeholder='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>Don't you have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login