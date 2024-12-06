import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  return (
    <div>
      <form>
  <div className="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" />
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd" />
  </div>
  <br />
  <button className="btn btn-success">Login</button>
</form>     
    </div>
  )
}

export default Login