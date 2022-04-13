import React from "react";
import PropTypes from "prop-types";
import styles from "./Cardstyle.module.css";
import "./index.css";
import { CardActionArea, CardContent, Grid } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Card, Typography } from "@material-ui/core";

export default function Gif({ source, url, title }) {
  return (
    <div>
      <Grid container spacing={5} columns={8}>
        <Grid item xs={10}>
          <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardContent>
                <CardMedia>
                  <img src={source} alt={title} className={styles.Cardstyle} />
                </CardMedia>
                <Typography gutterBottom variant="h5" component="div">
                  <p>{title}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

Gif.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
