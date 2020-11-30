import { gql } from '@apollo/client'
import CountryInfo from 'shared/types/Country'

const CountryInfoQuery = () => {
  return gql`
    query {
      Country {
        name
        nativeName
        alpha2Code
        alpha3Code
        area
        population
        populationDensity
        capital
        demonym
        gini
        location {
          latitude
          longitude
        }
        numericCode
        subregion {
          name
          region {
            name
          }
        }
        officialLanguages {
          iso639_1
          iso639_2
          name
          nativeName
        }
        currencies {
          name
          symbol
        }
        regionalBlocs {
          name
          acronym
          otherAcronyms {
            name
          }
          otherNames {
            name
          }
        }
        flag {
          emoji
          emojiUnicode
          svgFile
        }
        topLevelDomains {
          name
        }
        callingCodes {
          name
        }
        alternativeSpellings {
          name
        }
        distanceToOtherCountries(first: 5) {
          distanceInKm
          countryName
        }
      }
    }

  `
}

export interface CountryInfoQueryResponse {
  Country: Array<CountryInfo>
}

export default CountryInfoQuery
