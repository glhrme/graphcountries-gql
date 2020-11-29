import CountryInfo from "shared/types/Country"
import { actions } from './types'

export const addCountryInfo = (countryInfo: CountryInfo) => ({
  type: actions.add,
  countryInfo
})

export const removeCountryInfo = (key: string) => ({
  type: actions.remove,
  key
})