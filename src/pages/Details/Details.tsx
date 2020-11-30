import React, { useEffect, useState } from 'react'
import { Divider, Grid, Typography, Modal, Button, ButtonGroup } from '@material-ui/core'
import { connect, ConnectedProps } from 'react-redux'
import { infoState } from 'store/modules/infoCountries'
import WrapperContent from 'components/WrapperContent'
import EditInfo from 'components/EditInfo'
import Country from 'shared/types/Country'
import {
  WrapperInfo, WrapperImage,
  WrapperMain, WrapperButtonGroup,
  WrapperMap, MarkerIcon, MarkerMain
} from './Details.style'
import { Link } from 'react-router-dom'
import MapGL, { Marker, NavigationControl  } from '@urbica/react-map-gl'
import key from 'config/key'
import 'mapbox-gl/dist/mapbox-gl.css';

const mapStateToProps = (state: infoState) => {
  return ({
    infosMap: state.InfoReducer.mapState
  })
}

const dispatchProps = {
}

const connector = connect(mapStateToProps, dispatchProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  match: {
    params: {
      name: string
    }
  }
}

const Details: React.FC<Props> = ({ match: { params: { name }}, infosMap }) => {
  const [countryInfo, setCountryInfo] = useState<Country>()
  const [nearbyCountries, setNearbyCountries] = useState<Array<Country>>([])
  const [opened, setOpened] = useState<boolean>(false)

  useEffect(() => {
    if(infosMap.get(name)) {
      setCountryInfo(infosMap.get(name))
    } else {
      window.location.href = '/'
    }
  }, [name])

  useEffect(() => {
    const draft: Country[] = []
    countryInfo?.distanceToOtherCountries.map((item: any) => {
      draft.push(infosMap.get(item.countryName)!)
    })
    setNearbyCountries(draft)
  }, [countryInfo])

  if(countryInfo) {
    return (
      <WrapperContent>
        <Grid container style={{ height: '100%' }}>
          <WrapperInfo>
            <WrapperImage>
              <img src={countryInfo.flag.svgFile} alt={`Bandeira ${countryInfo.name}`}/>
              <Typography variant="h3">
                {countryInfo.name}
              </Typography>
            </WrapperImage>
            <WrapperMain>
              <Typography variant="subtitle1">
                {countryInfo.nativeName}
              </Typography>

              <Divider />

              <div>
                <Typography variant="body2" component="p">
                  Capital: <Typography variant="body1" component="span">{countryInfo.capital}</Typography>
                </Typography>

                <Typography variant="body2" component="p">
                  Área: <Typography variant="body1" component="span">{countryInfo.area}</Typography>
                </Typography>

                <Typography variant="body2" component="p">
                  População: <Typography variant="body1" component="span">{countryInfo.population}</Typography>
                </Typography>

                <Typography variant="body2" component="p">
                  TLD (Top-Level Domain): <ul>
                  {
                    countryInfo.topLevelDomains.map(item => {
                      return (
                        <li key={countryInfo.name}>{item.name}</li>
                      )
                    })
                  }
                  </ul>
                </Typography>
                <Divider />
                <Typography>Paises mais próximos</Typography>
                <ol>
                  {countryInfo.distanceToOtherCountries.map((item: any) => (
                    <li key={item.countryName}>
                      <Typography component="span">{item.countryName} - {item.distanceInKm}Km</Typography>
                    </li>
                  ))}
                </ol>
                <WrapperButtonGroup>
                  <ButtonGroup
                    variant="contained"
                    color="primary"
                  >
                    <Button
                      onClick={() => setOpened(true)}
                    >
                      Editar
                    </Button>
                    <Button>
                      <Link to='/'>Voltar</Link>
                    </Button>
                  </ButtonGroup>
                </WrapperButtonGroup>
              </div>
            </WrapperMain>
            <WrapperMap>
                <MapGL
                  style={{ width: '100%', height: '1200px' }}
                  mapStyle='mapbox://styles/mapbox/light-v9'
                  accessToken={key}
                  latitude={countryInfo.location.latitude}
                  longitude={countryInfo.location.longitude}
                  zoom={0}
                >
                    <Marker
                      latitude={countryInfo.location.latitude}
                      longitude={countryInfo.location.longitude}
                    >
                      <MarkerMain>{countryInfo.name}</MarkerMain>
                    </Marker>
                  {nearbyCountries.map((item: Country) => (
                    <Marker
                      key={item.name}
                      longitude={item.location.longitude}
                      latitude={item.location.latitude}
                    >
                      <MarkerIcon>{item.name}</MarkerIcon>
                    </Marker>
                  ))}
                  <NavigationControl showCompass showZoom position='top-right' />
                </MapGL>
            </WrapperMap>
          </WrapperInfo>
        </Grid>
        <Modal
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
          open={opened}
          onClose={() => setOpened(false)}
        >
          <EditInfo
            countryInfo={countryInfo}
            closeModal={setOpened}
            update={setCountryInfo}
          />
        </Modal>
      </WrapperContent>
    )
  }
  return <h1>Não há registros</h1>
}

export default connector(Details)
