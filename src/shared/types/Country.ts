import OfficialLanguages from './OfficialLanguages'
import Currency from './Currency'
import Flag from './Flag'

type Country = {
  name: string,
  nativeName: string,
  alpha2Code: string,
  alpha3Code: string,
  area: number,
  population: number,
  populationDensity: number,
  capital: string,
  demonym: string,
  gini: number,
  location: {
    latitude: number,
    longitude: number
  },
  numericCode: string,
  subregion: {
    name: string,
    region: {
      name: string
    }
  },
  officialLanguages: Array<OfficialLanguages>,
  currencies: Array<Currency>,
  regionalBlocs: Array<{
    name: string,
    acronym: string,
    otherAcronyms: Array<any>,
    otherNames: Array<any>
  }>,
  flag: Flag,
  topLevelDomains: Array<{
    name: string
  }>,
  callingCodes: Array<{
    name: string
  }>,
  alternativeSpellings: Array<{
    name: string
  }>,
  distanceToOtherCountries: Array<{
    distanceInKm: string,
    countryName: string
  }>
}

export default Country