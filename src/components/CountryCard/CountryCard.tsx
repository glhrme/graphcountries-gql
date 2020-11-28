import React from 'react'
import { Card, CardActions, CardContent, Typography, CardMedia, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Flag from 'shared/types/Flag'

export type CountryInfo = {
  name: string,
  nativeName: string,
  capital: string,
  flag: Flag
}

type CountryProps = {
  countryInfo: CountryInfo
}

/**
 * Utilizo makeStyles apenas para mostrar que também há essa forma para o Material-UI de estilizar os componentes ao invés de styled-components ou .css
 */
const useStyles = makeStyles({
  title: {
    fontSize: 18
  },
  media: {
    width: '100%',
    height: 192
  }
})

const CountryCard: React.FC<CountryProps> = ({
  countryInfo
}) => {
  const styles = useStyles()

  return (
    <Card>
      <CardMedia
        className={styles.media}
        image={countryInfo.flag.svgFile}
      />
      <CardContent>
        <Typography className={styles.title}>
          {countryInfo.nativeName} ({countryInfo.name})
        </Typography>
        <Typography variant="body2" component="span">
          {countryInfo.capital}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
        >
          Detalhes
        </Button>
      </CardActions>
    </Card>
  )
}

export default CountryCard
