import { combineReducers } from "redux";

import allManufacturers from "./manufacturers";
import setCurrentVehicleType from "./vehicleTypeReducer";

const rootReducer = combineReducers({
  setCurrentVehicleType,
  allManufacturers,
});

export default rootReducer;
