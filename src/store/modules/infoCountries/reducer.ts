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
    case actions.edit: {
      let draftMap = mapInfo.get(action.key!)
      mapInfo.delete(action.key!)
      draftMap = {
        ...draftMap,
        ...action.countryInfo
      }
      mapInfo.set(draftMap.nativeName, draftMap)
      state = {
        mapState: mapInfo,
        arrayState: Array.from(mapInfo.values())
      }
      return state
    }
    default: return state
  }
}

export default infoCountries
