export const signInWithGoogle = () => {
  const baseURL = import.meta.env.VITE_SERVER_ENDPOINT || 'http://localhost:5000';
  const googleAuthURL = `${baseURL}/auth/google`;

  window.open(
    googleAuthURL,
    '_self',
    'toolbar=no,scrollbars=yes,resizable=no,width=1000,height=600'
  );
};
