import { gql } from '@apollo/client'

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

export default CountryInfoQuery
