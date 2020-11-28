import React from 'react'
import Wrapper from 'components/WrapperContent'
import { Grid } from '@material-ui/core'
import CountryCard from 'components/CountryCard'

const Home = () => {
  return (
    <Wrapper>
      <div> Linha do Filtro </div>
      <Grid container>
        {[1,2,3,4,5,6,7].map(item => (
          <Grid item xs={3} style={{ padding: '8px' }}>
            <CountryCard />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Home
