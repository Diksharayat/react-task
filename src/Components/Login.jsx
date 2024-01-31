import { Link } from "react-router-dom";
import Register from "./Register";

const Login =()=>{
  return(
    <>
    <h1>Login</h1>
    <form>
    <div className="form-group">
          Email Address*:
          <input
           
            name="Email"
            type="email"
            className="form-control"
            placeholder="enter your email"
            required
          />
        </div>

        <div className="form-group">
          Password*:
          <input
           
            name="Password"
            type="password"
            className="form-control"
            placeholder="enter your email"
            required
          />
        </div>
        <div className="form-group">
          <input
            style={{ borderRadius: 50 }}
            className="btn btn-primary"
            type="submit"
          />
        </div>

        <div className="form-group">
          New to Application? <Link to="/"> Register</Link>
         </div>
    </form>
    </>
  )
}
export default Login;