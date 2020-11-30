import React, { useEffect, useState } from 'react'
import { Divider, Grid, Typography, Modal, Button } from '@material-ui/core'
import { connect, ConnectedProps } from 'react-redux'
import { infoState } from 'store/modules/infoCountries'
import WrapperContent from 'components/WrapperContent'
import EditInfo from 'components/EditInfo'
import Country from 'shared/types/Country'
import { WrapperInfo, WrapperImage, WrapperMain } from './Details.style'

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
      nativeName: string
    }
  }
}

const Details: React.FC<Props> = ({ match: { params: { nativeName }}, infosMap }) => {
  const [countryInfo, setCountryInfo] = useState<Country>()
  const [opened, setOpened] = useState<boolean>(false)

  useEffect(() => {
    const searchItem = infosMap.get(nativeName)
    if(searchItem) {
      setCountryInfo(searchItem)
    } else {
      window.location.href = '/'
    }
  }, [])

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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setOpened(true)}
                >
                  Editar
                </Button>
              </div>
            </WrapperMain>
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
            nativeName={nativeName}
          />
        </Modal>
      </WrapperContent>
    )
  }
  return <h1>Não há registros</h1>
}

export default connector(Details)
