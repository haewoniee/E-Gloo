export const LOGIN = (state, userId) => {
  state.loggedIn = true;
  state.userId = userId;
};

export const LOGOUT = state => {
  state.loggedIn = false;
  state.userId = null;
};

export const bookmark = (state, object) => {
  object.bookmarked = !object.bookmarked;
};
