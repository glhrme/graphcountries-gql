import CountryInfo from "shared/types/CountryInfo"

export enum actions {
  add = '@countryInfo/ADD',
  remove = '@countryInfo/REMOVE'
}

export type action = {
  type: actions,
  countryInfo: CountryInfo
}

export type infoState = {
  InfoReducer: CountryInfo[]
}