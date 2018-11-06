import axios from "axios";

const API_KEY = "f6cfa10c5b1419a83df7421fb039a1f4";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETECH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETECH_WEATHER,
    payload: request
  };
}
