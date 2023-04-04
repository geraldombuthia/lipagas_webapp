// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';

// Personal Attempt to added a link
import { Link as RouterLink } from 'react-router-dom';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import LoginLayout from '../../layouts/login';
//
import AuthSignInForm from './AuthSignInForm';
import AuthWithSocial from './AuthWithSocial';


// ----------------------------------------------------------------------


export default function Register() {
  const { method } = useAuthContext();

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Enter your Phone number to Sign Up</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Already have an account</Typography>

          <Link variant="subtitle2" component={RouterLink} to="/login">Go to login</Link>
        </Stack>
        <Tooltip title={method} placement="left">
          <Box
            component="img"
            alt={method}
            src={`/assets/icons/auth/ic_${method}.png`}
            sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
          />
        </Tooltip>
      </Stack>

      <AuthSignInForm />

      <AuthWithSocial />
    </LoginLayout>
  );
}
