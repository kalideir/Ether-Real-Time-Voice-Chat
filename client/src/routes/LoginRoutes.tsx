import { Email, Login, NewPassword, Register, VerifyAccount } from '../pages';

const LoginRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/email', element: <Email /> },
  { path: '/new-password', element: <NewPassword /> },
  { path: '/verify-account', element: <VerifyAccount /> },
];

export default LoginRoutes;
