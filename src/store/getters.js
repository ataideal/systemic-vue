const getters = {
  loading: state => state.context.loading,
  snackBar: state => state.context.snackBar,
  currentUser: state => state.context.currentUser,
  accessToken: state => state.context.accessToken,

  users: state => state.user.users,
};
export default getters;
