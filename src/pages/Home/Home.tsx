import React from 'react'
import Wrapper from 'components/WrapperContent'
import { Grid } from '@material-ui/core'
import CountryCard, { CountryInfo } from 'components/CountryCard'

const info: CountryInfo = {
  "name": "Brazil",
  "nativeName": 'Brasil',
  "capital": "Brasília",
  "flag": {
    "emoji": "🇧🇷",
    "emojiUnicode": "U+1F1E7 U+1F1F7",
    "svgFile": "https://restcountries.eu/data/bra.svg"
  }
}

const Home = () => {
  return (
    <Wrapper>
      <div> Linha do Filtro </div>
      <Grid container>
        {[1,2,3,4,5,6,7,8,8,8,8,8,8,8].map(item => (
          <Grid item xs={3} style={{ padding: '8px' }}>
            <CountryCard countryInfo={info} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Home
