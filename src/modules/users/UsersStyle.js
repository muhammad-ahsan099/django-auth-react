import styled from "@emotion/styled";
import { Delete, Edit } from '@mui/icons-material'
import { Avatar, Table, TableContainer, TableHead } from "@mui/material";
import  { tableCellClasses } from "@mui/material/TableCell";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

export const UserStyle = {
    TableContainer: styled(TableContainer)(({ theme }) => ({
        overflow: 'scroll',
        overflowX: 'auto',
        width: '70%',
        "@media (max-width: 900px)": {
            width: '84%',
            marginLeft: '8%',
            mrginRight: '8%',
        },
        "@media (max-width: 600px)": {
            width: '90%',
            marginLeft: '5%',
            mrginRight: '5%',
        },
        marginLeft: '15%',
        mrginRight: '15%',
        marginTop: 80

    })),
    Table: styled(Table)(({ theme }) => ({
        // minWidth: 'auto',
        [`& .${tableCellClasses.root}`]: {
            borderBottom: "none"
        },
        "@media (max-width: 900px)": {
            width: 700,
        },
    })),
    Tablehead: styled(TableHead)(({ theme }) => ({
        borderRadius: 8,
        backgroundColor: '#F8FAFB',
        height: 42,
    })),
    IconDiv: styled('div')(() => ({
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    })),
    DeleteIcon: styled(Delete)(() => ({
        color: '#d32f2f',
    })),
    EditIcon: styled(Edit)(({ theme }) => ({
        color: '#1E86FF',
    })),
    TickIcon: styled(CheckCircleRoundedIcon)(({ theme }) => ({
        color: '#388e3c',
        fontSize: 20
    })),
    CrossIcon:styled(CancelRoundedIcon)(({ theme }) => ({
        color: '#f44336',
        fontSize: 20
    })),
    AvatarBox: styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center' 
        
    })),
    Avatar: styled(Avatar)(({ bgColor , Color }) => ({
        backgroundColor: `${bgColor}`, 
        color: `${Color}`
    })),
    EmailNameContainer: styled('div')(({ theme }) => ({
        marginLeft: 12,
        
    })),
    PTime: styled('p')(({ theme }) => ({
        margin: 0,
        
    })),
    PTagName: styled('p')(({ theme }) => ({
        fontSize: '14px',
        margin: 0,
        fontWeight: '500',
        marginBottom: 4,
        
    })),
    PTagEmail: styled('p')(({ theme }) => ({
        fontSize: '12px',
        margin: 0,
        fontWeight: '500',
        color: '#96A0B5',
        
    })),
    Role: styled('div')(({ bgColor, Color }) => ({
        borderRadius: '8px',
        backgroundColor: `${bgColor}`, 
        color: `${Color}`,
        border: 'none',
        width: 78,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 500,
    })),


}