import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  TextField,
  Box,
  Button,
  Snackbar,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

// import { useQueryClient, useQuery } from "react-query";
import { makeStyles } from "@material-ui/core/styles";
import { login,sendBeat } from "../../remote/appRemote";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    height: 55,
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();

  const [mail, mailSet] = useState("admin1@mail.com");
  const [password, passwordSet] = useState("admin");
  const [loading, loadingSet] = useState(false);
  const [failLogin, failLoginSet] = useState(false);

  useEffect(() => {
    (async () => {
      const beat = await sendBeat()
      console.log(beat)
    })();
  }, []);

  const loginAction = async () => {
    // loadingSet(false);
    // history.push("/admin/dashboard");
    loadingSet(true);
    failLoginSet(false);
    const response = await login({
      mail: mail,
      password: password,
    });
    if (response) {
      loadingSet(false);
      history.push("/admin/dashboard");
    } else {
      failLoginSet(true);
      loadingSet(false);
    }
  };

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
              Login to Noah Admin
            </Typography>
          </Box>
          <Box m={2}>
            <TextField
              value={mail}
              onChange={(e) => mailSet(e.target.value)}
              fullWidth={true}
              label="Email"
              variant="outlined"
            />
          </Box>
          <Box m={2}>
            <TextField
              value={password}
              onChange={(e) => passwordSet(e.target.value)}
              fullWidth={true}
              label="Password"
              variant="outlined"
            />
          </Box>
          <Box m={2}>
            <Button
              onClick={loginAction}
              disabled={loading ? true : false}
              className={classes.button}
              size="large"
              variant="contained"
              color="primary"
            >
              {loading ? "Please Wait..." : "Login"}
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h6">
            Copy rights 2021
          </Typography>
        </Grid>
      </Grid>
      <Snackbar open={failLogin} message="Login Failed" />
    </div>
  );
}
