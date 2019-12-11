export default {
  saveToken(state, token) {
    state.token = token;
  },

  login(state, user) {
    state.user = user;
  },

  logout(state) {
  },
};
