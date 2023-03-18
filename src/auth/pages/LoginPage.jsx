import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/";

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticated = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSingIn = (event) => {
    event.preventDefault();
    dispatch(startGoogleSignIn);
  };

  return (
    <AuthLayout title="Iniciar sesión">
      <form
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
        >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email"
              type="email"
              placeholder="Correo electronico"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="password"
              autoComplete="off"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            display={ !!errorMessage ? '' : 'none'}
            sx={{ mt: 1 }}
          >
            <Grid
              item
              xs={12}
            >
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>

          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                xs={{ color: "white" }}
                fullWidth
                type="submit"
                disable={isAuthenticated}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                xs={{ color: "white" }}
                fullWidth
                onClick={onGoogleSingIn}
                disable={isAuthenticated}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="end"
            color="secondary"
          >
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
