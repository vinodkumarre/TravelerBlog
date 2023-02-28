/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ApiFetchCall from "./ApiFetchCall";

const useStyles = makeStyles({
  body: {
    width: "50%",
    height: "35vw",
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
    width: "100%",

  },
  image: {
    display: "flex",
    // flexWrap: "wrap",
    gap: "10px",
    overflow: "scroll",
    height: "40%",
    boxShadow: "0.3em 0.3em 1em rgb(0 0 0 / 30%)",
    marginLeft: "15px",
    marginRight: "15px",

  },
  singleImage: {
    margin: "10px",
    width: "40%",
    height: "90%",
    boxShadow: "0.3em 0.3em 1em rgb(0 0 0 / 30%)",

  },
  loginButton: {
    marginLeft: "9px !important",
    marginRight: "9px !important",
    float: "right",
  },
  Bottom: {
    display: "flex",
    marginTop: "15px",
    gap: "72%",
    marginLeft: "15px",
  },
});

function Edit() {
  const classes = useStyles();
  const prams = useParams();
  const [preImage, setPreImage] = useState([]);
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [site, setSite] = useState();
  useEffect(() => {
    const reguestSucces = (lists) => {
      const list = lists.find((item) => item.blogid === +prams.id);
      if (list) {
        setLocation(list.location);
        setDescription(list.description);
        setSite(list.sites_to_visit);
        setPreImage(list.photo_upload.split(","));
      }
    };
    ApiFetchCall("/blogs", "Get", reguestSucces);
  }, [prams.id]);
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <h2 className={classes.h2}>Edit Blog Page</h2>
      </div>
      <div className={classes.headerBody}>
        <div className={classes.headerSub}>
          <TextField className={classes.TextField} value={location} placeholder="Enter Location" />
          <TextField className={classes.TextField} value={description} placeholder="Enter Description" />
          <TextField className={classes.TextField} value={site} placeholder="upload url to visit" />
          <TextField
            className={classes.TextField}
            type="file"
            multiple
            // onChange={handleImage}
            inputProps={{
              multiple: true,
            }}
          />
        </div>
        <div className={classes.image}>
          {preImage.map((im) => (
            <img
              key={Math.random()}
              alt="upload profile"
              src={im}
              className={classes.singleImage}
            />
          ))}
        </div>
        <div className={classes.Bottom}>
          <Button variant="contained">Cancel</Button>
          <Button variant="contained">EditBlog</Button>
        </div>
      </div>
    </div>
  );
}
export default Edit;
