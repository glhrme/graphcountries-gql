import React, { useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Wrapper from 'components/WrapperContent'
import { Grid } from '@material-ui/core'
import CountryCard from 'components/CountryCard'
import CountryInfo from 'shared/types/CountryInfo'
import { useQuery } from '@apollo/client'
import CountryInfoQuery, { CountryInfoQueryResponse } from 'config/queries/countryInfo'
import { infoState, addCountryInfo } from 'store/modules/infoCountries'

const mapStateToProps = (state: infoState) => ({
  infos: state.InfoReducer
})

const dispatchProps = {
  addCountryInfo
}

const connector = connect(mapStateToProps, dispatchProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const Home: React.FC<PropsFromRedux> = (props) => {
  const { data } = useQuery<CountryInfoQueryResponse>(CountryInfoQuery())
  useEffect(() => {
    data?.Country.map((item: CountryInfo) => {
      props.addCountryInfo(item)
    })
  }, [data])

  return (
    <Wrapper>
      <div> Linha do Filtro </div>
      <Grid container>
        {props.infos.map((item: CountryInfo) => (
          <Grid item xs={3} style={{ padding: '8px' }} key={item.nativeName}>
            <CountryCard countryInfo={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default connector(Home)
