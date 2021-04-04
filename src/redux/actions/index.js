import axios from "axios";
export const FETCH_REPO_LIST = "FETCH_REPO_LIST";

export const fetchRepoList = (username) => {
  return (dispatch) => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        dispatch({ type: FETCH_REPO_LIST, payload: res.data });
      })
      .catch((err) => {});
  };
};
