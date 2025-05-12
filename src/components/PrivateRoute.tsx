import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppStore } from '../store';
import { useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { search } = useLocation();

  const { getUser, loginWithToken} = useAppStore.authStore.getState();
  const [hasToken, setHasToken] = useState<boolean | null>(null);

  useEffect(() => {
    // when login in with gmail....
    const params = new URLSearchParams(search);
    const gmailToken = params.get("token");

    if (gmailToken) {
      loginWithToken(gmailToken);
    }

    const token = getUser();
    setHasToken(!!token);
  }, []);

  if (hasToken === null) {
    return <div>Loading...</div>;
  }

  return hasToken ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
