import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  body: {
    width: "90%",
    border: "1px solid black",
    margin: "24px auto",
    height: "47vw",

  },
  header: {
    display: "flex",
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
    minWidth: 250, marginBottom: "40px",
  },
  cardMedia: {
    height: 140,
  },
});

function Home() {
  const classes = useStyle();
  const prams = useParams();
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState();
  useEffect(() => {
    fetch("http://localhost:3002/blogs")
      .then((response) => response.json())
      .then((data) => setFetchData(data));
  }, []);
  const list = fetchData && fetchData.filter((item) => item.userid === +prams.id);
  const AddBlogHandler = () => {
    navigate(`/Home/AddBlog/${prams.id}`);
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
        {list && list.map((blog) => (
          <Card className={classes.card} key={blog.blogid}>
            <CardMedia
              className={classes.cardMedia}
              image={blog.photo_upload}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{blog.location.toUpperCase()}</Typography>
              <Typography variant="body2" color="text.secondary">{blog.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className={classes.Button}>Edit</Button>
              <Button size="small" className={classes.Button}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default Home;
