import "./App.css";
import useStyles from "./styles.js";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Orders from "./components/showOrders/showOrders";
import Create from "./components/createOrder/createOrder";

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className="heading" variant="h2" align="center">
            Apparel Orders ADMIN Page
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appbar} position="static" color="inherit">
                  <Orders />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar className={classes.appbar} position="static" color="inherit">
                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
