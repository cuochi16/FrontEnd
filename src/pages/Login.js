// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = () => { 
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/profile-detail'; 
    navigate(path);
  }
  return (
    <div className="login-div">
      <img className="bgr-1-icon" alt="" src="assets/Images/bgr-1@2x.png" />
      <button className="btnlogin-button">
        <Button onClick={routeChange} className="rectangle-button" variant="danger">
        <b className="log-in-b">LOG IN</b>
        </Button>
      </button>
      <b className="welcome-to-bedating">
        <span className="welcome-to-bedating-container">
          <p className="welcome-to-p">
            <span>WELCOME TO</span>
          </p>
          <p className="bedating-p">
            <span>BeDating</span>
          </p>
        </span>
      </b>
      <img className="logo-icon" alt="" src="assets/Images/logo@2x.png" />
    </div>
  );
};

export default Login;
