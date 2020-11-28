import { gql } from '@apollo/client'
import CountryInfo from 'shared/types/CountryInfo'

const CountryInfoQuery = () => {
  return gql`
    query {
      Country {
        _id
        name
        nativeName
        capital
        flag {
          emoji
          emojiUnicode
          svgFile
        }
      }
    }

  `
}

export interface CountryInfoQueryResponse {
  Country: Array<CountryInfo>
}

export default CountryInfoQuery
