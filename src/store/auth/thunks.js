import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWhitEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWhitEmailPassword({
      email,
      password,
      displayName,
    });
    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const starLogout = () => {
  return async( dispatch ) => {
    await logoutFirebase();

    dispatch( logout() );
  }
}
