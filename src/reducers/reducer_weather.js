import { FETECH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETECH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}
