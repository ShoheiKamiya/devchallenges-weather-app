import camelCaseKeys from "camelcase-keys";

const raw = {
  consolidated_weather: [
    {
      id: 5583711087099904,
      weather_state_name: "Showers",
      weather_state_abbr: "s",
      wind_direction_compass: "NE",
      created: "2020-09-29T12:24:46.915880Z",
      applicable_date: "2020-09-29",
      min_temp: 18.244999999999997,
      max_temp: 23.770000000000003,
      the_temp: 23.025,
      wind_speed: 8.22748261090697,
      wind_direction: 41.33387178440327,
      air_pressure: 1011.5,
      humidity: 53,
      visibility: 14.689836355682813,
      predictability: 73
    },
    {
      id: 4970811673804800,
      weather_state_name: "Light Cloud",
      weather_state_abbr: "lc",
      wind_direction_compass: "NNE",
      created: "2020-09-29T12:24:50.019450Z",
      applicable_date: "2020-09-30",
      min_temp: 17.16,
      max_temp: 25.735,
      the_temp: 23.884999999999998,
      wind_speed: 5.5379914081338315,
      wind_direction: 29.830787815119198,
      air_pressure: 1007.5,
      humidity: 46,
      visibility: 14.91166587131154,
      predictability: 70
    },
    {
      id: 5566808984649728,
      weather_state_name: "Light Rain",
      weather_state_abbr: "lr",
      wind_direction_compass: "NE",
      created: "2020-09-29T12:24:52.893728Z",
      applicable_date: "2020-10-01",
      min_temp: 18.305,
      max_temp: 22.105,
      the_temp: 21.3,
      wind_speed: 4.190327768731939,
      wind_direction: 43.91616214089163,
      air_pressure: 1012,
      humidity: 69,
      visibility: 10.2408186192635,
      predictability: 75
    },
    {
      id: 5064060108275712,
      weather_state_name: "Light Cloud",
      weather_state_abbr: "lc",
      wind_direction_compass: "NE",
      created: "2020-09-29T12:24:55.916272Z",
      applicable_date: "2020-10-02",
      min_temp: 17.06,
      max_temp: 26.355,
      the_temp: 24.83,
      wind_speed: 3.8635872112145067,
      wind_direction: 49.22889112287613,
      air_pressure: 1016.5,
      humidity: 55,
      visibility: 14.483541119860018,
      predictability: 70
    },
    {
      id: 6207740377563136,
      weather_state_name: "Light Cloud",
      weather_state_abbr: "lc",
      wind_direction_compass: "ESE",
      created: "2020-09-29T12:24:58.923668Z",
      applicable_date: "2020-10-03",
      min_temp: 18.215000000000003,
      max_temp: 26.455,
      the_temp: 24.935000000000002,
      wind_speed: 3.38075287932872,
      wind_direction: 112.02426291559358,
      air_pressure: 1016,
      humidity: 58,
      visibility: 14.300236618150004,
      predictability: 70
    },
    {
      id: 6475064708956160,
      weather_state_name: "Heavy Cloud",
      weather_state_abbr: "hc",
      wind_direction_compass: "S",
      created: "2020-09-29T12:25:01.911064Z",
      applicable_date: "2020-10-04",
      min_temp: 19.68,
      max_temp: 25.73,
      the_temp: 23.24,
      wind_speed: 3.4082643362761473,
      wind_direction: 177,
      air_pressure: 1010,
      humidity: 59,
      visibility: 9.999726596675416,
      predictability: 71
    }
  ],
  time: "2020-09-29T22:09:58.789769+09:00",
  sun_rise: "2020-09-29T05:35:07.584489+09:00",
  sun_set: "2020-09-29T17:27:44.864293+09:00",
  timezone_name: "JST",
  parent: {
    title: "Japan",
    location_type: "Country",
    woeid: 23424856,
    latt_long: "37.487598,139.838287"
  },
  sources: [
    {
      title: "BBC",
      slug: "bbc",
      url: "http://www.bbc.co.uk/weather/",
      crawl_rate: 360
    },
    {
      title: "Forecast.io",
      slug: "forecast-io",
      url: "http://forecast.io/",
      crawl_rate: 480
    },
    {
      title: "HAMweather",
      slug: "hamweather",
      url: "http://www.hamweather.com/",
      crawl_rate: 360
    },
    {
      title: "Met Office",
      slug: "met-office",
      url: "http://www.metoffice.gov.uk/",
      crawl_rate: 180
    },
    {
      title: "OpenWeatherMap",
      slug: "openweathermap",
      url: "http://openweathermap.org/",
      crawl_rate: 360
    },
    {
      title: "Weather Underground",
      slug: "wunderground",
      url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
      crawl_rate: 720
    },
    {
      title: "World Weather Online",
      slug: "world-weather-online",
      url: "http://www.worldweatheronline.com/",
      crawl_rate: 360
    }
  ],
  title: "Tokyo",
  location_type: "City",
  woeid: 1118370,
  latt_long: "35.670479,139.740921",
  timezone: "Asia/Tokyo"
};

export const data = camelCaseKeys(raw);
