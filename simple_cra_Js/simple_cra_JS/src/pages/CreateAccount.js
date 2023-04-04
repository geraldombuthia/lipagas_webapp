// 1. This is the file from which the create an account render will 
// placed, A choice between number registration or social media 
// authentication will be provided. Clicking on either will move to new interfaces
import { Helmet } from 'react-helmet-async';
// sections
import Register from '../sections/auth/Register';
// import Login from '../../sections/auth/LoginAuth0';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Minimal UI</title>
      </Helmet>

      <Register />
    </>
  );
}