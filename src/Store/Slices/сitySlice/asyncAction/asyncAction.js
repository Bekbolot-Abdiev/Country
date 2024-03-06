import axios from "axios";
import {
  ADD_CITY_REJECTED,
  ADD_CITY_STARTED,
  ADD_CITY_SUCCESS,
} from "../../types/types";

export const getCity = () => {
  return async (dispatch) => {
    dispatch(addCityStarted());
    try {
      const { data } = await axios(
        `https://restcountries.com/v3.1/name/kyrgyzstan`
      );
      dispatch(addCitySuccess(data));
    } catch (error) {
      dispatch(addCityRejected(error));
    }
  };
};

const addCityStarted = () => ({ type: ADD_CITY_STARTED });
const addCitySuccess = (data) => {
  return {
    type: ADD_CITY_SUCCESS,
    payload: data,
  };
};

const addCityRejected = () => ({ type: ADD_CITY_REJECTED, payload: err });
