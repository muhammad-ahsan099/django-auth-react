import * as React from 'react';
import { CPD } from './ProfileDropdownStyle'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../State';
import admin from '../../assets/images/admin.png'
import { removeToken } from '../localStorage/LocalStorage';
export default function ProfileDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const { state, dispatch } = React.useContext(AppContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ctaLogoutHandler = () => {
    removeToken()
    dispatch({
      type: "setAuthState",
      payload: {
        authState: false,
        access_token: null,
      }
    })
    navigate('/login')
    window.reload()
  }
  return (
    <div>
      <CPD.IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <CPD.ProfileLinkImage src={admin} alt='img' />

      </CPD.IconButton>

      <CPD.Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <CPD.DropDown >
          <CPD.ProfileLink to={`/profile`} onClick={handleClose}>Profile</CPD.ProfileLink >
        </CPD.DropDown>
        {/* <CPD.DropDown >
          <CPD.ProfileLink to='/profile/ChangePassword' onClick={handleClose}>Change Password</CPD.ProfileLink >
        </CPD.DropDown> */}
        <CPD.DropDown >
          <CPD.ProfileLink to='/login' onClick={ctaLogoutHandler}>Logout</CPD.ProfileLink >
        </CPD.DropDown>
      </CPD.Menu>
    </div>
  );
}
