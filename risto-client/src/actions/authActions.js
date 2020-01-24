const authRequest = () => {
  return {
    type: "AUTHENTICATION_REQUEST"
  };
};

const authSuccess = (user, token) => {
  return {
    type: "AUTHENTICATION_SUCCESS",
    user: user,
    token: token
  };
};

const authFailure = errors => {
  return {
    type: "AUTHENTICATION_FAILURE",
    errors: errors
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    return dispatch({
      type: "LOGOUT"
    });
  };
};

export const signUp = user => {
  const newUser = user;
  return dispatch => {
    return fetch("http://localhost:4000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(data => {
        // debugger;
        dispatch(
          authenticate({
            username: newUser.username,
            password: newUser.password
          })
        );
      })
      .catch(errors => {
        dispatch(authFailure(errors));
      });
  };
};

export const authenticate = credentials => {
  return dispatch => {
    // dispatch(authRequest());
    return fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ auth: credentials })
    })
      .then(res => res.json())
      .then(response => {
        const token = response.jwt;
        localStorage.setItem("token", token);
        // return getUser(credentials);
        return response.user;
      })
      .then(user => {
        // debugger;
        console.log(user);
        authSuccess(user, localStorage.token);
      });
    //   .catch(errors => {
    //     dispatch(authFailure(errors));
    //     localStorage.clear();
    //   });
  };
};

export const getUser = credentials => {
  return fetch("http://localhost:4000/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}`
    },
    body: JSON.stringify({ user: credentials })
  })
    .then(response => response.json())
    .then(userJson => {
      return userJson;
    })
    .catch(error => {
      return error;
    });
};
