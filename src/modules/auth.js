import AuthService from "@/service/auth";
import { setItem } from "@/helper/persistanceStorage";

const state = {
  isLoading: false,
  user: null,
  errors: null,
};

const mutations = {
  //every time we tap "Register" button we make user & errors null
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },
  registerFailure(state, payload) {
    state.isLoading = false;
    state.errors = payload.errors;
  },
};

const actions = {
  // we are sending user's information using AuthService method and action in Vue and that is the most easy way
  register(context, user) {
    //When the registration phase starts we can see "registerStart" in the console and if it become successful we will see "registerSuccess" else "registerFailure"
    return new Promise((resolve, reject) => {
      //When promise starts we call registerStart function
      context.commit("registerStart");

      AuthService.register(user)
        .then((response) => {
          context.commit("registerSuccess", response.data.user); // i am giving second param just to show the data
          setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((err) => {
          context.commit("registerFailure", err.response.data); // here also
          reject(err.response.data);
        });
    });
  },
};

export default { state, mutations, actions, namespaced: true };
