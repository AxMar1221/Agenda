import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        container
        justifyContent="center"
        className="box-shadow"
        borderRadius={ 5 }
        padding={ 5 }
        width={ 120 }
      >
        <CircularProgress color="error" />
      </Grid>
    </Grid>
  );
};
