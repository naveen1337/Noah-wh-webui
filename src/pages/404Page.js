import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    height: 55,
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();


  // useEffect(() => {
  //   (async () => {})();
  // }, []);


  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="space-around"
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={12} md={3}>
          <Box m={4}>
            <Typography align="center" variant="h3">
             404 Not Found
            </Typography>
          </Box>
          </Grid>
      </Grid>
    </div>
  );
}
