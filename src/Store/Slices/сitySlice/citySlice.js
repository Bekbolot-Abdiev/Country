import { ADD_CITY_REJECTED, ADD_CITY_STARTED, ADD_CITY_SUCCESS } from "../types/types";

const cityState = {
  cityData: [],
  status: "", //fulfilled, pending, rejected
  error: "",
};

const cityReducer = (state = cityState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CITY_STARTED:
      return {
        ...state,
        status: "pending",
      };
    case ADD_CITY_SUCCESS:
      return {
        ...state,
        status: "success",
        cityData: payload,
      };
    case ADD_CITY_REJECTED:
      return {
        ...state,
        status: "error",
        error: payload,
      };
    default:
      return state;
  }
};

export default cityReducer;
