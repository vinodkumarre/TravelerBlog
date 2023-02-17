import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectPlaces from "react-select-places";

const useStyles = makeStyles({
  body: {
    width: "50%",
    height: "30vw",
    border: "2px solid",
    margin: "25px auto",

  },
  header: {
    width: "100%",
    height: "70px",
    backgroundColor: "antiquewhite",
    display: "flex",
    alignItems: "center",

  },
  headerBody: {
    width: "100%",
    height: "84%",
    border: "1px solid",
  },
});

function AddBlog() {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <h2>Add Blog Page</h2>
      </div>
      <div className={classes.headerBody}>
        <SelectPlaces value={{ placeId: "ChIJpTvG15DL1IkRd8S0KlBVNTI" }} />
      </div>
    </div>
  );
}
export default AddBlog;
