import { useRef } from 'react'

const isEmpty = (value) => value.trim() === ''

export const SimpleForm = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const email = emailRef.current.value.trim()
    const password = passwordRef.current.value.trim()
    if (isEmpty(email) || isEmpty(password)) {
      return
    }
    console.log(email)
    console.log(password)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          id="email"
          type="email"
          ref={emailRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="pass">
          Password
        </label>
        <input
          className="form-control"
          id="pass"
          type="password"
          ref={passwordRef}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </form>
  )
}
