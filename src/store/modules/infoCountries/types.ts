import CountryInfo from "shared/types/Country"

export enum actions {
  add = '@countryInfo/ADD',
  edit = '@countryInfo/EDIT'
}

export type action = {
  type: actions,
  countryInfo: CountryInfo,
  key?: string
}

export type stateType = {
  mapState: Map<string, CountryInfo>,
  arrayState: CountryInfo[]
}

export type infoState = {
  InfoReducer: stateType
}