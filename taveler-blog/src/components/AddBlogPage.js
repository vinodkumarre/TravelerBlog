import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
// import { RMIUploader } from "react-multiple-image-uploader";
// import SelectPlaces from "react-select-places";

const useStyles = makeStyles({
  body: {
    width: "50%",
    height: "40vw",
    border: "2px solid",
    margin: "25px auto",

  },
  header: {
    width: "100%",
    height: "97px",
    backgroundColor: "antiquewhite",
    display: "flex",
    alignItems: "center",

  },
  headerBody: {
    width: "100%",
    height: "84%",
  },
  h2: {
    paddingLeft: "40%",
  },
  TextField: {
    width: "40%", margin: "20px auto !important",
  },
  box: {
    display: "flex",
    margin: "25px auto",
    left: "30%",
    top: "35%",
    zIndex: "1000",
    height: "30%",
    width: "30%",

  },
  headerSub: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40%",
    width: "100%",

  },
  image: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    overflow: "scroll",
    height: "40%",
    boxShadow: "0.3em 0.3em 1em rgb(0 0 0 / 30%)",

  },
  singleImage: {
    margin: "10px",
    width: "100px",
    height: "100px",

  },
  loginButton: {
    margin: "9px !important",
    float: "right",
  },
});

function AddBlog() {
  const classes = useStyles();
  const [preImage, setPreImage] = useState();
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    setLoading(true);
    const image = [];
    const privew = [];
    image.push(e.target.files);
    for (let i = 0; i < image[0].length; i += 1) {
      const data = new FormData();
      data.append("file", image[0][i]);
      data.append("upload_preset", "sq5otdxh");
      data.append("cloud_name", "dvtyxoaak");

      fetch("https://api.cloudinary.com/v1_1/dvtyxoaak/image/upload", {
        method: "post",
        body: data,
      }).then((resp) => resp.json()).then((datas) => {
        setPreImage(privew);
        privew.push(datas);
      });
    }
    setLoading(false);
  };
  console.log(preImage);
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <h2 className={classes.h2}>Add Blog Page</h2>
      </div>
      <div className={classes.headerBody}>
        <div className={classes.headerSub}>
          <TextField className={classes.TextField} placeholder="Enter Location" />
          <TextField className={classes.TextField} placeholder="Enter Description" />
          <input className={classes.TextField} type="file" onChange={handleImage} multiple />
        </div>
        <div className={classes.image}>
          {!loading ? (preImage && preImage.map((img) => (
            <img
              key={Math.random()}
              alt="upload profile"
              src={img.url}
              className={classes.singleImage}
            />
          ))) : (
            <Box className={classes.box}>
              <CircularProgress />
            </Box>
          )}
        </div>
        <Button className={classes.loginButton} variant="contained">signIn</Button>
        <Button className={classes.loginButton} variant="contained">signIn</Button>
      </div>
    </div>
  );
}
export default AddBlog;
