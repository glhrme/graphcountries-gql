import CountryInfo from "shared/types/Country"
import { action, actions } from './types'

const infoMapState = new Map<string, CountryInfo>() 

const infoCountries = (state: CountryInfo[] = [], action: action) => {
  switch(action.type) {
    case actions.add: {
      infoMapState.set(action.countryInfo.nativeName, action.countryInfo)
      state = Array.from(infoMapState.values())
      return state
    }
    default: return state
  }
}

export default infoCountries
