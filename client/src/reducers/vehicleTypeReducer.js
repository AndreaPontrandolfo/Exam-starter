import { SET_VEHICLE_TYPE } from "../actions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_VEHICLE_TYPE:
      return {
        ...state,
        current_vehicleType: action.payload
      };
    default:
      return state;
  }
}
