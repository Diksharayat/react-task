import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cistyStates } from "../assets/data/cityState.js";


const Register = () => {


  const sizeOptions = [
    { label: "Startup (1-10)", value: "Startup (1-10)" },
    { label: "Mid-sized (11-50)", value: "Mid-sized (11-50)" },
    { label: "Large (51-100)", value: "Large (51-100)" },
    { label: "Enterprise (100+)", value: "Enterprise (100+)" },
]


const hereAboutOptions = [
  { label: "Search engines (e.g., Bing, Google, Yahoo)", value: "Search engines (e.g., Bing, Google, Yahoo)" },
  { label: "Word of mouth", value: "Word of mouth" },
  { label: "Recommended by a friend", value: "Recommended by a friend" },
  { label: "Social media platforms", value: "Social media platforms" },
  { label: "Other", value: "Other" },
]
   

  let data = cistyStates;
  const [state, setState] =  useState('');
  const [cities, setCities] = useState([]);

  const[zip,setZip]=useState('');
  function getUniqueStates(data) {
    let uniqueStates = [];
    data.forEach((item) => {
      if (!uniqueStates.includes(item.state)) {
        uniqueStates.push(item.state);
      }
    });
    return uniqueStates;
  }

  // Function to fetch cities based on state ID
  function getCitiesByState(state) {
    setState(state)
    let cities = [];
    data.forEach((item) => {
      if (item.state === state) {
        cities.push(item.city);
      }
    });
    setCities(cities)
    console.log(cities)
    return cities;
  }

  
  function getZipCode(state, city) {
    let zipCode = null; // Initialize with null in case no match is found
    data.forEach((item2) => {
      if (item2.state === state && item2.city === city) {
        zipCode = item2.zip_code; // Assign the zip code value
        return; // Exit the loop after finding the match
      }
    });
    console.log(zipCode,state, city,"kkk")
    setZip(zipCode)
    console.log(zipCode)
    return zipCode;
  }
  
  let uniqueStates = getUniqueStates(data);
  

  var navi = useNavigate();
  console.log(cistyStates);
  //form data
  const [formData, setFormData] = useState({
    Role: "",
    Email: "",
    Password: "",
    OfficeNumber: "",
    BusinessName: "",
    EIN: "",
    CompanyAddress: "",
    CompanyState:"",
    WebsiteLink: "",
    CompanyLogoImage:"",
    CompanySize:"",
    CompanyCity:"",
    HearAboutCollebsetgo:"",
   
  });
  //Destructure
  const {
    Role,
    Email,
    Password,
    OfficeNumber,
    BusinessName,
    EIN,
    CompanyAddress,
    WebsiteLink,
    CompanyLogoImage,
    CompanySize,
    CompanyState,
    CompanyCity,
    HearAboutCollebsetgo,
    
  } = formData;

  //onChange
  const onChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //onSubmitHandler

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!Email || !Password || !Role) {
      return alert("Please provide all details");
    } else {
      navi("/login");
    }
  };

  console.log(formData);

  

  return (
    <>
      <form className="App" onSubmit={onSubmitHandler} encType="multipart/form-data">
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
            value={Email}
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
          State <br />
          <select className="form-control" onChange={(e) => {getCitiesByState(e.target.value)}} name="CompanyState" value={CompanyState} >
            {uniqueStates.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
         
        </div>
        <div className="form-group">
          Select city
          <br />
          <select className="form-control" onChange={e => getZipCode(state, e.target.value)} name="CompanyCity" value={CompanyCity}>
          {cities.map((item1) => (
               <option key={item1}>{item1}</option>
            ))}
          </select>
         
        </div>

        <div className="form-group">
          Enter Zip <br />
          <input type="text" value={zip}/>
        
        </div>

        <div className="form-group">
          Upload Company Logo(Optional)
          <input
            name="CompanyLogoImage"
            onChange={onChangeInput}
            value={CompanyLogoImage}
            autoComplete="off"
            type="file"
            className="form-control"
            placeholder="upload company logo"
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
          What is the size of your company? <br />
          <select name="CompanySize" id="id1" value={CompanySize} onChange={onChangeInput}>
        <option value="">Select a Size of company</option>
        {sizeOptions.map(item => (
          <option key={item.value} value={item.label}>
            {item.value}
          </option>
        ))}
      </select>
        
         
        </div>

        <div className="form-group">
          Where did you hear about collabSetGo <br />
          <select name="HearAboutCollebsetgo" id="id2" value={HearAboutCollebsetgo} onChange={onChangeInput}>
        <option value="">Select a Size of company</option>
        {hereAboutOptions.map(item => (
          <option key={item.value} value={item.label}>
            {item.value}
          </option>
        ))}
      </select>
         
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
