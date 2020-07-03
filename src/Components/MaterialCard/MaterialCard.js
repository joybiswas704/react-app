import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./MaterialCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: "25rem",
    display: "inline-block",
  },
  media: {
    height: "20rem",
    margin: "1rem",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.picture}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.paragraph}
        </Typography>
      </CardContent>
      <div style={{ padding: "2rem" }}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.instagram.com/thejoyof_photography/?hl=en"
          target="blank"
        >
          Learn more
        </Button>
      </div>
    </Card>
  );
}
