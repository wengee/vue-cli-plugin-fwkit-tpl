export default {
  accessToken(state) {
    const { token } = state;
    if (!token || !token.value) {
      return null;
    }

    const expiresIn = token.expiresIn || 0;
    if (new Date().getTime() > expiresIn && expiresIn > 0) {
      return null;
    }
    return token.value || null;
  },

  isLogined(state) {
    return !!(state.user && state.user.id);
  },
};
