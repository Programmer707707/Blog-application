import AuthService from "@/service/auth";

const state = {
  isLoading: false,
};

const mutations = {
  setLoading(state) {
    state.isLoading = true;
  },
};

const actions = {
  // we are sending user's information using AuthService method and action in Vue and that is the most easy way
  register(context, user) {
    AuthService.register(user);
  },
};

export default { state, mutations };
