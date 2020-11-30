import React, { useEffect, useMemo, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Wrapper from 'components/WrapperContent'
import { Grid } from '@material-ui/core'
import CountryCard from 'components/CountryCard'
import CountryInfo from 'shared/types/Country'
import { useQuery } from '@apollo/client'
import CountryInfoQuery, { CountryInfoQueryResponse } from 'config/queries/countryInfo'
import { infoState, addCountryInfo } from 'store/modules/infoCountries'
import FilterInput from 'components/FilterInput'
import { FilterWrapper } from './Home.style'

const mapStateToProps = (state: infoState) => {
  return ({
    infos: state.InfoReducer.arrayState
  })
}

const dispatchProps = {
  addCountryInfo
}

const connector = connect(mapStateToProps, dispatchProps)

type PropsFromRedux = ConnectedProps<typeof connector>

const Home: React.FC<PropsFromRedux> = ({ infos, addCountryInfo }) => {
  const { data } = useQuery<CountryInfoQueryResponse>(CountryInfoQuery())
  const [filterText, setFilterText] = useState<string>('')
  useEffect(() => {
    data?.Country.map((item: CountryInfo) => {
      addCountryInfo(item)
    })
  }, [data])

  const filteredInfos = useMemo(() => {
    const filtered = infos.filter((item: CountryInfo) => {
      if(item.name.toLowerCase().includes(filterText.toLowerCase())) return true
      if(item.nativeName.toLowerCase().includes(filterText.toLowerCase())) return true
      return false
    })
    return filtered
  }, [infos, filterText])

  const handleClear = () => !filterText && setFilterText('')

  return (
    <Wrapper>
      <FilterWrapper>
        <FilterInput
          onFilter={(value: string) => setFilterText(value)}
          buttonColor="primary"
        />
      </FilterWrapper>
      <Grid container>
        {filteredInfos.map((item: CountryInfo) => (
          <Grid item xs={3} style={{ padding: '8px' }} key={item.nativeName}>
            <CountryCard countryInfo={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default connector(Home)
