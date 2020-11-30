import CountryInfo from "shared/types/Country"
import { actions } from './types'

export const addCountryInfo = (countryInfo: CountryInfo) => ({
  type: actions.add,
  countryInfo
})

export const editCountryInfo = (key: string, countryInfo: CountryInfo) => ({
  type: actions.edit,
  key,
  countryInfo
})