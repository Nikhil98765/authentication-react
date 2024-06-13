import {Outlet, redirect, useLoaderData, useSubmit} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import {useEffect} from "react";
import {getTokenDuration} from "../util/auth";

function RootLayout() {

  const submit = useSubmit();
  // const navigation = useNavigation();
  const token = useLoaderData();

  useEffect(() => {

    // For first time, we won't set the timeout
    if (!token) {
      return;
    }

    // If token got expired, navigate it to logout route.
    if (token === "EXPIRED") {
      submit(null, {action: '/logout', method: 'post'});
      return;
    }

    const duration = getTokenDuration();
    console.log('duration', duration);

    setTimeout(() => {
      submit(null, {action: '/logout', method: 'post'});
    },  duration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
