/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  card: {
    margin: "25px auto",
    width: "30%",
    height: "500px",
  },
  button: {
    width: "50%",
    height: "70px",
    backgroundColor: "lightgray !important",
  },
  activeButton: {
    width: "50%",
    height: "70px",
    backgroundColor: "gray !important",
  },
  container: {
    height: "70px",
    gap: "1px",
    display: "flex",
    alignItems: "center",
  },
  card1: {
    border: "2px solid black",
    width: "100%",
    height: "430px",

  },
  container1: {
    display: "grid",
    width: "80%",
    marginLeft: "30px",
    gap: "30px",
    marginTop: "30px",
  },
  textField: {
    marginTop: "30px",
  },
  loginButton: {
    width: "80%",
    marginTop: "40px !important",
    marginLeft: "40px !important",
    marginRight: "20px !important",
  },
});
function Login() {
  const classes = useStyle();
  const navigate = useNavigate();
  const [logData, setLogData] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [helperDetails, setHelperDetails] = useState({
    helperName: "",
    helperEmail: "",
    helperPassword: "",
  });
  const [active, setActive] = useState({
    isLogin: true,
    isSignIn: false,
    page: true,
  });
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    fetch("http://localhost:3002/login")
      .then((response) => response.json())
      .then((data) => setLogData(data));
  }, []);
  const handleClick = () => {
    setActive({
      isLogin: false,
      isSignIn: true,
      page: false,
    });
  };
  const handleChange = () => {
    setActive({
      isLogin: true,
      isSignIn: false,
      page: true,
    });
  };
  const handleName = (e) => {
    setUserDetails({
      ...userDetails,
      firstName: e.target.value,
    });
    if (e.target.value === "") {
      setHelperDetails({
        helperName: "please enter Name",
        helperEmail: "",
        helperPassword: "",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }
  };
  const handleEmail = (e) => {
    setUserDetails({
      ...userDetails,
      email: e.target.value,
    });
    if (e.target.value === "") {
      setHelperDetails({
        helperName: "",
        helperEmail: "please enter email",
        helperPassword: "",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }
  };
  const handlePassword = (e) => {
    setUserDetails({
      ...userDetails,
      password: e.target.value,
    });
    if (e.target.value === "") {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "please enter password",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "please enter password",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "please enter password",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }
  };
  const handleLogin = () => {
    if (email === "") {
      setHelperDetails({
        helperName: "",
        helperEmail: "please enter email",
        helperPassword: "",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }
    if (password === "") {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "please enter password",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }
    logData.find((item) => {
      if (email === item.email && password === item.password) {
        navigate(`/Home/${item.id}`);
        return true;
      }
      return false;
    });
  };
  const handleSigin = () => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (userDetails.firstName === "") {
      setHelperDetails({
        helperName: "please enter firstName",
        helperEmail: "",
        helperPassword: "",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }
    if (userDetails.email === "") {
      setHelperDetails({
        helperName: "",
        helperEmail: "please enter email",
        helperPassword: "",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }
    if (userDetails.password === "") {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "please enter password",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }

    if (!regex.test(userDetails.email)) {
      setHelperDetails({
        helperName: "",
        helperEmail: "please enter Email",
        helperPassword: "",
      });
    } else {
      setHelperDetails({
        helperName: "",
        helperEmail: "",
        helperPassword: "",
      });
    }

    if (userDetails.firstName !== "" && userDetails.email !== "" && userDetails.password !== "" && regex.test(userDetails.email)) {
      const newUser = {
        firstname: userDetails.firstName,
        email: userDetails.email,
        password: userDetails.password,
      };
      fetch("http://localhost:3002/sigin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newUser) });
      setUserDetails({
        firstName: "",
        email: "",
        password: "",
      });
      navigate(`/Home/${logData[logData.length - 1].id}`);
    }
  };

  return (
    <div className={classes.card}>
      <div className={classes.container}>
        <Button onClick={handleChange} className={active.isLogin ? classes.activeButton : classes.button}>Login</Button>
        <Button onClick={handleClick} className={active.isSignIn ? classes.activeButton : classes.button}>SignUp</Button>

      </div>
      {active.page ? (
        <div className={classes.card1}>
          <div className={classes.container1}>
            <TextField className={classes.textField} value={email} onChange={handleChangeEmail} label="Email" helperText={helperDetails.helperEmail} />
            <TextField className={classes.textField} value={password} onChange={handleChangePassword} label="password" helperText={helperDetails.helperPassword} />
          </div>
          <Button className={classes.loginButton} variant="contained" onClick={handleLogin}>login</Button>
        </div>
      ) : (
        <div className={classes.card1}>
          <div className={classes.container1}>
            <TextField className={classes.textField} value={userDetails.firstName} onChange={handleName} label="FirstName" helperText={helperDetails.helperName} />
            <TextField className={classes.textField} value={userDetails.email} onChange={handleEmail} label="email" helperText={helperDetails.helperEmail} />
            <TextField className={classes.textField} value={userDetails.password} onChange={handlePassword} label="password" helperText={helperDetails.helperPassword} />
          </div>
          <Button className={classes.loginButton} onClick={handleSigin} variant="contained">signIn</Button>
        </div>
      )}
    </div>
  );
}
export default Login;
