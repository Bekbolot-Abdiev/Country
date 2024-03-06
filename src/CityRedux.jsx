import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "./Store/Slices/сitySlice/asyncAction/asyncAction";

const CityRedux = () => {
  const { cityData, status, error } = useSelector((state) => state.city);
  console.log(cityData);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCity());
  }, []);
  return (
    <div>
      {cityData.map((el) => (
        <div key={el.area}>
          <img width={300} src={el.flags.svg} alt="" />
          <h2>{el.altSpellings[3]}</h2>
        </div>
      ))}
    </div>
  );
};

export default CityRedux;
