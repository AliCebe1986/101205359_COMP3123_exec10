export const login = (credentials) => (dispatch) => {
  const mockUser = {
    username: 'testuser',
    password: '123456', 
    token: 'mock-jwt-token', 
  };

  if (
    credentials.username === mockUser.username &&
    credentials.password === mockUser.password
  ) {
    
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        user: { name: mockUser.username },
        token: mockUser.token,
      },
    });
    localStorage.setItem('token', mockUser.token);
    alert('Login successful!');
  } else {
    // Hatalı giriş
    alert('Invalid username or password');
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};
