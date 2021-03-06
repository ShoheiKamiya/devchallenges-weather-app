import axios, { AxiosInstance, AxiosResponse, AxiosPromise } from "axios";
import camelCaseKeys from "camelcase-keys";
import { WetherResponse } from "../../models/Weather";
import { Location } from "../../models/Location";

const client: AxiosInstance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api"
});

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return camelCaseKeys(response, { deep: true });
  }
);

export const fetchWeather = (woeid: string): AxiosPromise<WetherResponse> =>
  client.get(`/location/${woeid}/`);

export const fetchLocation = (city: string): AxiosPromise<Location[]> =>
  client.get(`/location/search/?query=${city}`);

export const searchLocation = (
  latt: number,
  long: number
): AxiosPromise<Location[]> =>
  client.get(`/location/search?lattlong=${latt},${long}`);
