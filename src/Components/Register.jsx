import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  var navi = useNavigate();

   //form data
   const [formData, setFormData] = useState({
    Role : "",
    Email : "",
    Password: "",
    OfficeNumber:"",
    BusinessName:"",
    EIN:"",
    CompanyAddress:"",
    WebsiteLink:"",
  });
  //Destructure
  const { Role , Email ,Password,OfficeNumber ,BusinessName, EIN, CompanyAddress,WebsiteLink} = formData;

  //onChange
  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //onSubmitHandler

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    if (!Email || !Password || !Role) {
      return alert("Please provide all details");
    }else{
      navi("/login");
    }
   
  }

  console.log(formData)

  return (
    <>
      <form className="App" onSubmit={onSubmitHandler}>
        <h1> Register Your Company With Collab set go</h1>
        <h5>Company details</h5>
        <div className="  form-group">
          Company Name*:
          <input
          value={Role}
          onChange={onChangeInput}
            name="Role"
            type="text"
            autoComplete="off"
            className="form-control"
            placeholder=" enter Company name"
            required
          />
        </div>
        <div className="form-group">
          Email Address*:
          <input
            value={Email }
            onChange={onChangeInput}
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
            value={Password}
            onChange={onChangeInput}
            name="Password"
            type="password"
            className="form-control"
            placeholder="enter your email"
            required
          />
        </div>
        <div className="form-group">
          Office Number*:
          <input
        value={OfficeNumber}
           onChange={onChangeInput}
            name="OfficeNumber"
            autoComplete="off"
            type="number"
            className="form-control"
            placeholder="enter office no"
            required
          />
        </div>
        <div className="form-group">
          Display name of your business*:{" "}
          <input
            value={BusinessName}
            onChange={onChangeInput}
            name="BusinessName"
            type="text"
            className="form-control"
            placeholder="enter your display name"
            required
          />
        </div>
        <div className="form-group">
          EIN*:
          <input
          value={EIN}
          onChange={onChangeInput}
            name="EIN"
            autoComplete="off"
            type="number"
            className="form-control"
            placeholder="enter office no"
            required
          />
        </div>
        <div className="form-group">
          Company Address*:
          <input
            value={CompanyAddress}
            onChange={onChangeInput}
            name="CompanyAddress"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="enter office no"
            required
          />
        </div>
        <div className="form-group">
          State <br/>
        <button class="btn btn-secondary dropdown-toggle" type="text" data-toggle="dropdown" id="id1" aria-expanded="false">
    State
  </button>
  <div className="dropdown-menu" aria-labelledby="id1">
    <a className="dropdown-item" href="#">Action</a>
    <br/>
    <a className="dropdown-item" href="#">Another action</a>
    <br/>
    <a className="dropdown-item" href="#">Something else here</a>
    <br/>
  </div>
        </div>
        <div className="form-group">
          Select city<br/>
        <button className="btn btn-secondary dropdown-toggle" type="text" data-toggle="dropdown" id="2" aria-expanded="false">
    Select city
  </button>
  <div className="dropdown-menu" aria-labelledby="id2">
    <a className="dropdown-item" href="#">Action</a>
    <br/>
    <a className="dropdown-item" href="#">Another action</a>
    <br/>
    <a className="dropdown-item" href="#">Something else here</a>
    <br/>
  </div>
        </div>

        <div className="form-group">
          Enter Zip <br/>
        <button className="btn btn-secondary dropdown-toggle" type="text" data-toggle="dropdown" aria-expanded="false">
    Enter zip
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">Action</a>
    <br/>
    <a className="dropdown-item" href="#">Another action</a>
    <br/>
    <a className="dropdown-item" href="#">Something else here</a>
    <br/>
  </div>
        </div>


        <div className="form-group">
          Upload Company Logo(Optional)
          <input
            name="offno"
            autoComplete="off"
            type="number"
            className="form-control"
            placeholder="enter office no"
           
          />
        </div>

        <div className="form-group">
          Website Link(Optional)
          <input
            name="WebsiteLink"
            value={WebsiteLink}
            onChange={onChangeInput}
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="enter office no"
        
          />
        </div>

        <div className="form-group">
         What is the size of your company? <br/>
        <button className="btn btn-secondary dropdown-toggle" type="text" data-toggle="dropdown" aria-expanded="false">
  Select size:
  </button>
  <div className="dropdown-menu">
    
    <a className="dropdown-item" href="#">50 to 100 employees</a>
    <br/>
    <a className="dropdown-item" href="#">500 to 1000 employee</a>
    <br/>
    <a className="dropdown-item" href="#">100+</a>
    <br/>
  </div>
        </div>

        <div className="form-group">
        Where did you hear about collabSetGo <br/>
        <button className="btn btn-secondary dropdown-toggle" type="text" data-toggle="dropdown" aria-expanded="false">
  Please select:
  </button>
  <div className="dropdown-menu">
    
    <a className="dropdown-item" href="#">50 to 100 employees</a>
    <br/>
    <a className="dropdown-item" href="#">500 to 1000 employee</a>
    <br/>
    <a className="dropdown-item" href="#">100+</a>
    <br/>
  </div>
        </div>
        


        <div className="form-group">
          <input
            style={{ borderRadius: 50 }}
            className="btn btn-primary"
            type="submit"
          />
        </div>
        <div className="form-group">
          Already have account <Link to="/login"> Login</Link>
         </div>
      </form>
    </>
  );
};
export default Register;
