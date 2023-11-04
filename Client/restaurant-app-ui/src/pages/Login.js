import React from 'react'
import LoginForm from '../components/loginForm'

const Login = () => {
  return (
    <div style={{ width: "100%" }}>
      <h1 className="text-center text-dark-emphasis mb-4">Giriş Yap</h1>
      <LoginForm />
    </div>
  )
}

export default Login