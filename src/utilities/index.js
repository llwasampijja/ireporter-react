import jwt_decode from 'jwt-decode';

const isAuthenticated = () => {
  try {
    const token = sessionStorage.getItem('access_token');
    const userData = jwt_decode(token);
    return {
      username: userData.user_identity.username,
      token,
    };
  } catch (error) {
    // invalid token
    return {
      username: '',
      token: '',
    };
  }
};

export default isAuthenticated;
