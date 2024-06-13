import {redirect} from "react-router-dom";

export function getAuthToken() {
  return localStorage.getItem('token');
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuth() {
  const token  = localStorage.getItem('token');

  if(!token) {
    return redirect('/auth');
  }

  return null;
}
