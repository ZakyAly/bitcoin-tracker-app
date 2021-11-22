import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Link,
  ThemeProvider,
} from "@material-ui/core";

import { useStyles, darkTheme } from "./styles";
import { CryptoState } from "../../CryptoContext";

const Header = () => {
  const classes = useStyles();

  const { currency, setCurrency } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Link className={classes.title} variant="h6" href="/">
              Bitcoin Tracker
            </Link>
            <Select
              defaultValue="Select Currency"
              variant="outlined"
              style={{
                color: "white",
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"CNY"}>CNY</MenuItem>
              <MenuItem value={"JPY"}>JPY</MenuItem>
              <MenuItem value={"PLN"}>PLN</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
