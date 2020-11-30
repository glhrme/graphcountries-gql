import CountryInfo from "shared/types/Country"

export enum actions {
  add = '@countryInfo/ADD',
  remove = '@countryInfo/REMOVE'
}

export type action = {
  type: actions,
  countryInfo: CountryInfo
}

export type stateType = {
  mapState: Map<string, CountryInfo>,
  arrayState: CountryInfo[]
}

export type infoState = {
  InfoReducer: stateType
}