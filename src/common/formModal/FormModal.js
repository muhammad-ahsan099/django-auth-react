import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Autocomplete, MenuItem, Stack, Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { AppContext } from "../../State";
import { useTheme } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { FM } from './FormModalStyle'

export default function FormModal({ values, userData, updateModal, setUpdateModal, updateHandler, handleChange }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleCloseUpdate = () => {
    setUpdateModal(false)
  };

  return (
    <div>
      <Dialog open={updateModal} onClose={handleCloseUpdate} fullScreen={fullScreen} fullWidth={true} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)' } }}>
        <DialogTitle>
          Update
          <IconButton
            aria-label="close"
            onClick={handleCloseUpdate}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box >
            <>
              <FM.TextInput
                InputLabelProps={{ shrink: true }}
                InputProps={{ disableUnderline: true }}
                margin="dense"
                id="file"
                label={'Name'}
                name={'name'}
                type={'text'}
                required
                fullWidth
                variant="standard"
                value={values.name}
                onChange={handleChange('name')}
                />
              <br />
              <FM.TextInput
                InputLabelProps={{ shrink: true }}
                InputProps={{ disableUnderline: true }}
                margin="dense"
                id="file"
                label={'Email'}
                name={'email'}
                type={'email'}
                required
                fullWidth
                variant="standard"
                value={values.email}
                onChange={handleChange('email')}
              />
              <br />
              <br/>
              <FormLabel required id="demo-row-radio-buttons-group-label">{"Active"}</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={values.isActive}
                onChange={handleChange('isActive')}
              >
                <FormControlLabel key={'true'} value={'true'} disabled={userData !== 'Admin'} control={<Radio />} label={'True'} />
                <FormControlLabel key={'false'} value={'false'} disabled={userData !== 'Admin'} control={<Radio />} label={'False'} />
              </RadioGroup>
              <br/>
              <FormLabel required id="demo-row-radio-buttons-group-label">{"Role"}</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={values.isAdmin}
                onChange={handleChange('isAdmin')}
              >
                <FormControlLabel key={'Admin'} value={'Admin'} disabled={userData !== 'Admin'} control={<Radio />} label={'Admin'} />
                <FormControlLabel key={'Staff'} value={'Staff'} disabled={userData !== 'Admin'} control={<Radio />} label={'Staff'} />
                <FormControlLabel key={'User'} value={'User'}   disabled={userData !== 'Admin'} control={<Radio />} label={'User'} />
              </RadioGroup>

            </>
          </Box>
          <br />
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={2} justifyContent="flex-end" alignItems="center">
            <FM.FormButton style={{ color: '#1E86FF' }} variant="outlined" onClick={handleCloseUpdate}>
              Cancel
            </FM.FormButton>
            <FM.FormButton style={{ backgroundColor: '#1E86FF' }} type="submit" variant="outlined" onClick={updateHandler}>
              Update
            </FM.FormButton>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
}
