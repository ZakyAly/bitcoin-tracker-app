import { makeStyles, createTheme } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
