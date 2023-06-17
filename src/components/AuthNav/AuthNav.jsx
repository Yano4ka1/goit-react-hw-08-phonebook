import { LinkEl } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <LinkEl to="/register">Register</LinkEl>
      <LinkEl to="/login">Log In</LinkEl>
    </div>
  );
};