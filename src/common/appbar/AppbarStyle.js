
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import { colors } from '../../constants/Color';

export const AppbarStyle = {
    Box: styled(Box)(({ theme }) => ({
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        },
    })),
    AppBar: styled(MuiAppBar)(({ theme }) => ({
        backgroundColor: colors.appBar,
    })),
    P: styled('p')(({ theme }) => ({
        margin: 0,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000'
    })),
}