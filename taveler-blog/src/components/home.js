import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
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
    <div style={{
      width: "90%",
      border: "1px solid black",
      margin: "24px auto",
      height: "47vw",
    }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "antiquewhite",
          border: "2px solid",
        }}
      >
        <div style={{ paddingLeft: "15px" }}>
          <h5>Discover</h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h5>Home</h5>
          <h5>About</h5>
          <h5>Food</h5>
          <h5>Adventure</h5>
          <h5>Couples</h5>
        </div>
        <div style={{ paddingRight: "20px" }}>
          <Button sx={{ backgroundColor: "rgba(0, 200, 146, 0.5)" }} onClick={AddBlogHandler}>Add Blog</Button>
        </div>
      </div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "20px",
        marginBottom: "0px",
        justifyContent: "space-between",
        overflow: "scroll",
      }}
      >
        {list && list.map((blog) => (
          <Card sx={{ minWidth: 250, marginBottom: "40px" }} key={blog.blogid}>
            <CardMedia
              sx={{ height: 140 }}
              image={blog.photo_upload}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{blog.location.toUpperCase()}</Typography>
              <Typography variant="body2" color="text.secondary">{blog.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ backgroundColor: "#cc5647", color: "white" }}>Edit</Button>
              <Button size="small" sx={{ backgroundColor: "#cc5647", color: "white" }}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>

  );
}
export default Home;
