export type Weather = {
  id: number,
  applicableDate: string,
  weatherStateName:string,
  weatherStateAbbr:string,
  windSpeed: number,
  windDirection: number,
  windDirectionCompass: string,
  minTemp: number,
  maxTemp: number,
  theTemp: number,
  airPressure: number,
  humidity: number,
  visibility: number,
  predictability: number,
}

type Source = {
  title: string,
  slug: string,
  url: string,
  crawlRate: number,
}

export type WetherResponse = {
  consolidatedWeather: Weather[],
  time: string,
  sunRise: string,
  sunSet: string,
  timezoneName: string,
  parent: object,
  sources: Source[],
  title: string,
  locationType: string,
  woeid: number,
  lattLong: string,
  timezone: string,
}
