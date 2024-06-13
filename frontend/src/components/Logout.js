import {redirect} from "react-router-dom";

export function action() {
  localStorage.removeItem('expiration');
  localStorage.removeItem('token');
  return redirect('/');
}
