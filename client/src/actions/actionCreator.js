/* import { batch } from "react-redux"; */
import axios from "axios";
import { history } from "../index";

import {
  FETCH_TODOS
} from "./types";

/* export function fetchManufacturers({ vehicle_type, }) {
  return async function(dispatch) {
    try {
      const response = await axios.post(
        `/api/catalogo/${vehicle_type}`,
        {
          vehicle_type,
        }
      );
      await dispatch({
        type: FETCH_MANUFACTURERS,
        payload: response.data,
      });
      return await history.replace(`/catalogo/${vehicle_type}`);
    } catch (err) {
      return console.log(err);
    }
  };
}

export function setCurrentManufacturer({ vehicle_type, manufacturer, }) {
  return async function(dispatch) {
    try {
      const response = await axios.post(`http://${host}:5000/api/modelli`, {
        vehicle_type,
        manufacturer,
      });
      await dispatch({ type: CLEAR_ALL_VERSIONS, });
      await dispatch({ type: CLEAR_VERSION_SPEC, });
      return await dispatch({
        type: SET_ALL_MODELS,
        currentManufacturer: response.data,
        selectedManufacturer: manufacturer,
      });
    } catch (err) {
      return console.log(err);
    }
  };
}

export function setCurrentModel({ vehicle_type, manufacturer, model, }) {
  return async function(dispatch) {
    try {
      const response = await axios.post(`http://${host}:5000/api/versioni`, {
        vehicle_type,
        manufacturer,
        model,
      });
      await dispatch({ type: CLEAR_VERSION_SPEC, });
      return await dispatch({
        type: SET_ALL_VERSIONS,
        currentModel: response.data,
        selectedModel: model,
      });
    } catch (err) {
      return console.log(err);
    }
  };
}

export function setProductsFound({ products, }) {
  return async function(dispatch) {
    try {
      return await dispatch({ type: PRODUCTS_FOUND, payload: products, });
    } catch (err) {
      return console.log(err);
    }
  };
}

export function clearAllModels() {
  return async function(dispatch) {
    try {
      return await dispatch({ type: CLEAR_ALL_MODELS, });
    } catch (err) {
      return console.log(err);
    }
  };
}

export function clearAllVersions() {
  return async function(dispatch) {
    try {
      return await dispatch({ type: CLEAR_ALL_VERSIONS, });
    } catch (err) {
      return console.log(err);
    }
  };
}

export function setCurrentVersion({ vehicle_type, model, version, }) {
  return async function(dispatch) {
    try {
      const response = await axios.post(`http://${host}:5000/api/spec`, {
        vehicle_type,
        model,
        version,
      });
      console.log(`TCL: setCurrentVersion -> response`, response);
      return await dispatch({
        type: SET_VERSION_DATA,
        productSpec: response.data.spec,
        productCrossReferences: response.data.crossReferences,
      });
      // return await history.push(`${model}/${version}`);
    } catch (err) {
      return console.log(err);
    }
  };
}

 */