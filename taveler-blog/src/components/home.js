/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ApiFetchCall from "./ApiFetchCall";

const useStyle = makeStyles({
  body: {
    width: "90%",
    border: "1px solid black",
    margin: "24px auto",
    height: "47vw",
    overflow: "scroll",

  },
  header: {
    display: "flex",
    position: "sticky",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "antiquewhite",
    border: "2px solid",

  },
  list1: {
    paddingLeft: "15px",
    paddingRight: "20px",
  },
  list2: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  Button: {
    backgroundColor: "#cc5647 !important",
    color: "white !important",
    "&:hover": {
      backgroundColor: "white !important",
      color: "#cc5647 !important",
    },

  },
  headerBody: {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
    marginBottom: "0px",
    justifyContent: "space-between",
    overflow: "scroll",

  },
  card: {
    minWidth: 250, marginBottom: "10px",
  },
  cardMedia: {
    height: 140,
    display: "flex",
    overflow: "scroll",
    width: "250px",
  },
});

function Home() {
  const classes = useStyle();
  const prams = useParams();
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState();
  const reguestSucces = (lists) => {
    const list = lists && lists.filter((item) => item.userid === +prams.id);
    setFetchData(list);
  };
  useEffect(() => {
    ApiFetchCall("/blogs", "Get", reguestSucces);
  }, []);
  const AddBlogHandler = () => {
    navigate(`/Home/AddBlog/${prams.id}`);
  };
  const editHandler = (x) => {
    navigate(`/Home/${x.userid}/Edit/${x.blogid}`);
  };
  const deleteHandler = (y) => {
    ApiFetchCall(`/blog/${y.blogid}`, "Delete", () => {
      ApiFetchCall("/blogs", "Get", reguestSucces);
    });
  };
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <div className={classes.list1}>
          <h5>Discover</h5>
        </div>
        <div className={classes.list2}>
          <h5>Home</h5>
          <h5>About</h5>
          <h5>Food</h5>
          <h5>Adventure</h5>
          <h5>Couples</h5>
        </div>
        <div className={classes.list1}>
          <Button className={classes.Button} onClick={AddBlogHandler}>Add Blog</Button>
        </div>
      </div>
      <div className={classes.headerBody}>
        {fetchData && fetchData.map((blog) => (
          <Card className={classes.card} key={blog.blogid}>
            <div className={classes.cardMedia}>
              {blog.photo_upload.split(",").map((image) => (<img src={image} alt="tittle" style={{ width: "100%", height: "100%", objectFit: "cover" }} />))}
            </div>
            <CardContent>
              <Typography variant="h5" component="div">{blog.location.toUpperCase()}</Typography>
              <Typography variant="body2" color="text.secondary">{blog.description}</Typography>
              <a href={blog.sites_to_visit}>sites_to_visit</a>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => editHandler(blog)} className={classes.Button}>Edit</Button>
              <Button size="small" onClick={() => deleteHandler(blog)} className={classes.Button}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Home;
