import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import HeaderComponent from './Header.styles'

const Header = () => {
  return (
    <HeaderComponent>
      <Typography variant="h6">Lista dos Países</Typography>
    </HeaderComponent>
    
  )
}

export default Header
