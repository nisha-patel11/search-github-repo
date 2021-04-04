import { FETCH_REPO_LIST } from "../actions";

const initialState = {
  repoList: [],
};

const repo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPO_LIST:
      return {
        ...state,
        repoList: action.payload,
      };

    default:
      return { ...state };
  }
};

export default repo;
