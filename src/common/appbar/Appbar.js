import React from 'react'
import { Toolbar } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import {AppbarStyle} from './AppbarStyle';
import ProfileDropdown from '../../common/profileDropdown/ProfileDropdown';

export default function Appbar() {
  return (
    <AppbarStyle.Box >
      <CssBaseline />
      <AppbarStyle.AppBar elevation={0} position="fixed" >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <AppbarStyle.P>DRF Api's</AppbarStyle.P>
          <ProfileDropdown />
        </Toolbar>
      </AppbarStyle.AppBar>  
      </AppbarStyle.Box >
      )
}
