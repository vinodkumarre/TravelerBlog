/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ApiFetchCall from "./ApiFetchCall";

const useStyle = makeStyles({
  container: {
    gap: "5px",
    width: "40%",
    margin: "25px auto",
    border: "1px solid",
    display: "flex",
    height: "300px",
    position: "relative",

  },
  subContainer: {
    boxShadow: "3px 0px 8px #888888",
    width: "30%",
    overflow: "scroll",

  },
  textContainer: {
    width: "70%",
  },
  rating: {
    display: "flex",
    margin: "25px",
    position: "absolute",
    bottom: "-6%",
    alignItems: "flex-end",
    gap: "140px",
  },
  locationH: {
    height: "18%",
    padding: "15px",
    marginTop: "0px",
    marginBottom: "0px",
    backgroundColor: "#cc5647",
  },
  descriptionP: {
    height: "40%",
    padding: "14px",
    overflow: "scroll",
    marginTop: "0px",
    marginBottom: "0px",
  },
});

function ViewPage() {
  const classes = useStyle();
  const prams = useParams();
  const navgate = useNavigate();
  const [value, setValue] = useState();
  const [viewData, setViewData] = useState();
  useEffect(() => {
    fetch("http://localhost:3002/blogs")
      .then((response) => response.json())
      .then((data) => setViewData(data));
  }, []);
  const list = viewData && viewData.filter((item) => item.blogid === +prams.id);
  console.log(list);
  const handleSetRating = (e) => {
    setValue(Number(e.target.value));
  };
  const handleRating = () => {
    console.log(value);
    if (value) {
        const newUser = {
          ratting: value,
        };
        ApiFetchCall(`/blog/${prams.userid}/${prams.id}`, "Put", () => {
            navgate(`/Home/${prams.userid}`);
        }, JSON.stringify(newUser), {
          "Content-type": "application/json",
        });
      }
  };
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        {list && list[0].photo_upload.split(",").map((imagUrl) => (

          <img src={imagUrl} alt="pocation" key={Math.random()} style={{ height: "100%", width: "100%" }} />
            ))}
      </div>
      <div className={classes.textContainer}>
        <h1 className={classes.locationH}>{list && list[0].location}</h1>
        <p className={classes.descriptionP}>{list && list[0].description}</p>
        <div className={classes.rating}>
          <div>
            <Typography component="legend">Rate this Blog</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={handleSetRating}
            />
          </div>
          <Button variant="contained" onClick={handleRating}>AddRating</Button>
        </div>
      </div>
    </div>
  );
}
export default ViewPage;
