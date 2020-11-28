import React from 'react'
import Wrapper from 'components/WrapperContent'
import { Grid } from '@material-ui/core'
import CountryCard from 'components/CountryCard'
import CountryInfo from 'shared/types/CountryInfo'
import { useQuery } from '@apollo/client'
import CountryInfoQuery, { CountryInfoQueryResponse } from 'config/queries/countryInfo'

const Home = () => {
  const { data } = useQuery<CountryInfoQueryResponse>(CountryInfoQuery())
  
  return (
    <Wrapper>
      <div> Linha do Filtro </div>
      <Grid container>
        {data?.Country.map((item: CountryInfo) => (
          <Grid item xs={3} style={{ padding: '8px' }}>
            <CountryCard countryInfo={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Home
