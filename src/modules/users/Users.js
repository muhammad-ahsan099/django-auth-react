import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Appbar from '../../common/appbar/Appbar';
import { UserStyle } from './UsersStyle';
import TransitionsModal from '../../common/transitionsModal/TransitionsModal';
import SplashScreen from '../../common/splash/SplashScreen';
import { IconButton, Tooltip } from '@mui/material';
import { UseUsers } from './UseUsers';
import FormModal from '../../common/formModal/FormModal';
import { AvatarBgColor } from '../../common/utils/Utils'

export default function Users() {
    const [{ users, values, loading, open, setOpen, deleteHandler, deleteModalHandler, updateModal, setUpdateModal, showUpdateModal, handleChange, updateHandler }] = UseUsers();
    return (
        <div>
            {
                loading ?
                    <SplashScreen />
                    :
                    <>
                        <Appbar />
                        <UserStyle.TableContainer component={Paper}>
                            <UserStyle.Table size="medium" aria-label="a dense table">
                                <UserStyle.Tablehead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell >Email</TableCell>
                                        <TableCell >Role</TableCell>
                                        <TableCell >Created At</TableCell>
                                        <TableCell align={'center'}>Active</TableCell>
                                        <TableCell align={'center'}>Actions</TableCell>
                                    </TableRow>
                                </UserStyle.Tablehead>
                                <TableBody>
                                    {users?.map((row) => (
                                        <TableRow
                                            key={row?.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                <UserStyle.AvatarBox>
                                                    <UserStyle.Avatar
                                                        bgColor={AvatarBgColor(row.name[0].toLowerCase())?.bg}
                                                        Color={AvatarBgColor(row.name[0].toLowerCase())?.color}
                                                    >
                                                        {row?.name[0].toUpperCase()}
                                                    </UserStyle.Avatar>
                                                    <UserStyle.EmailNameContainer >
                                                        <UserStyle.PTagName>{row?.name}</UserStyle.PTagName>
                                                    </UserStyle.EmailNameContainer>
                                                </UserStyle.AvatarBox>
                                            </TableCell>
                                            <TableCell >{row?.email}</TableCell>
                                            <TableCell align={'center'}>
                                                <UserStyle.Role variant="outlined"
                                                    bgColor={AvatarBgColor(row.name[0]?.toLowerCase())?.bg}
                                                    Color={AvatarBgColor(row.name[0]?.toLowerCase())?.color}
                                                >
                                                    {row?.is_admin ? 'Admin' : 'User'}
                                                </UserStyle.Role>
                                            </TableCell>
                                            <TableCell >{row?.created_at?.split('T')[0]}</TableCell>
                                            <TableCell align={'center'}>{row?.is_active ? <UserStyle.TickIcon /> : <UserStyle.CrossIcon />}</TableCell>
                                            <TableCell align={'center'}>
                                                <UserStyle.IconDiv>
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            color="error"
                                                            aria-label="update"
                                                            size="small"
                                                            onClick={() => deleteModalHandler(row?.id)}
                                                        >
                                                            <UserStyle.DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Update">
                                                        <IconButton
                                                            aria-label="update"
                                                            size="small"
                                                            onClick={() => showUpdateModal(row)}
                                                        >
                                                            <UserStyle.EditIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </UserStyle.IconDiv>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </UserStyle.Table>
                        </UserStyle.TableContainer>
                        <TransitionsModal sumbitHandler={deleteHandler} open={open} setOpen={setOpen} />
                        <FormModal values={values} updateModal={updateModal} setUpdateModal={setUpdateModal} handleChange={handleChange} updateHandler={updateHandler} />
                    </>
            }
        </div>
    );
}
