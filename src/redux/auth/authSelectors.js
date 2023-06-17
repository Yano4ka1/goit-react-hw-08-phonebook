const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user;

const selectIsRefreshing = state => state.auth.isRefreshing;

export const authSelectors = {
    selectIsLoggedIn,
    selectUser,
    selectIsRefreshing,
  };