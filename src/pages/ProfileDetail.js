import { useCallback } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";
import "../css/ProfileDetail.css";

const ProfileDetail = () => {
  const onInputFirstNameClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='containerInput']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="profile-detail-div">
      <div className="formprofile-div">
        <b className="lets-complete-the-profile">Let's complete the profile</b>
        <img className="face-icon" alt="" src="../assets/SVG/face.svg" />
        <div className="input-last-name">
          <TextField
            className="inputtextnone-textfield"
            sx={{ width: 300 }}
            color="primary"
            variant="outlined"
            type="text"
            label="Last name"
            size="medium"
            margin="none"
          />
        </div>
        <TextField
          className="input-last-name1"
          sx={{ width: 513 }}
          color="primary"
          variant="outlined"
          multiline
          rows={5}
          maxRows={5}
          label="About me"
          margin="none"
        />
        <div className="input-first-name" onClick={onInputFirstNameClick}>
          <TextField
            className="inputtextnone-textfield"
            sx={{ width: 300 }}
            color="primary"
            variant="outlined"
            type="text"
            label="First name"
            size="medium"
            margin="none"
          />
        </div>
        <div className="gallery-div">
          <div className="photo-main-div">
            <img className="photo-icon" alt="" src="../assets/Images/photo@2x.png" />
          </div>
          <img className="rectangle-icon" alt="" src="../assets/SVG/rectangle-84.svg" />
          <img className="plus-math-icon" alt="" src="../assets/Images/plus-math@2x.png" />
        </div>
        <div className="input-calendar-div">
          <div className="container-div" />
          <b className="b">Date</b>
          <img className="iconcalendar" alt="" src="../assets/SVG/iconcalendar.svg" />
        </div>
        <div className="input-calendar-div1">
          <div className="container-div" />
          <b className="b1">Interests</b>
          <img
            className="facebook-like-icon"
            alt=""
            src="../assets/Images/facebook-like@2x.png"
          />
        </div>
        <div className="btnnext-div">
          <div className="rectangle-div" />
          <b className="continue-b">Continue</b>
        </div>
        <div className="component-1-div">
          <div className="rectangle-div" />
          <b className="gender-b">Man</b>
        </div>
        <div className="component-2-div">
          <div className="rectangle-div" />
          <b className="gender-b">Woman</b>
        </div>
        <div className="component-3-div">
          <div className="rectangle-div" />
          <b className="gender-b">Othes</b>
        </div>
      </div>
      <div className="header-div">
        <div className="logo-div">
          <img className="logo-icon" alt="" src="../assets/Images/logo@2x.png" />
          <b className="bedating">BeDating</b>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
