import React, { useEffect, useState } from 'react'
import Wrapper from 'components/WrapperContent'
import { Grid } from '@material-ui/core'
import CountryCard from 'components/CountryCard'
import CountryInfo from 'shared/types/CountryInfo'
import { useQuery } from '@apollo/client'
import CountryInfoQuery, { CountryInfoQueryResponse } from 'config/queries/countryInfo'

const Home = () => {
  const { data } = useQuery<CountryInfoQueryResponse>(CountryInfoQuery())
  const [mapInfo, setMapInfo] = useState<Map<string, CountryInfo>>(new Map())
  useEffect(() => {
    data?.Country.map((item: CountryInfo) => {
      if (!mapInfo.get(item.nativeName)) {
        return mapInfo.set(item.nativeName, item)
      }
    })
    setMapInfo(value => value)
  }, [data])

  return (
    <Wrapper>
      <div> Linha do Filtro </div>
      <Grid container>
        {Array.from(mapInfo.values()).map((item: CountryInfo) => (
          <Grid item xs={3} style={{ padding: '8px' }}>
            <CountryCard countryInfo={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Home
