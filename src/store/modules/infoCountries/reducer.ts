import Country from 'shared/types/Country'
import { action, actions, stateType } from './types'

const initialState: stateType = {
  mapState: new Map(),
  arrayState: []
}

const mapInfo: Map<string, Country> = new Map()

const infoCountries = (state: stateType = initialState, action: action) => {
  switch(action.type) {
    case actions.add: {
      if (!mapInfo.get(action.countryInfo.nativeName)) mapInfo.set(action.countryInfo.nativeName, action.countryInfo)
      const draft: stateType = {
        arrayState: Array.from(mapInfo.values()),
        mapState: mapInfo
      } 
      state = draft
      return state
    }
    default: return state
  }
}

export default infoCountries
