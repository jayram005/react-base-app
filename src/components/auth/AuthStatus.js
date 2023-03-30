import * as React from 'react'
import {
  useNavigate,
} from 'react-router-dom'
// import { useTranslation } from 'react-i18next'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LogoutIcon from '@mui/icons-material/Logout'
import useAuth from './AuthContext'

export default function AuthStatus() {
    const auth = useAuth()
    const navigate = useNavigate()
    const { t } = useTranslation()
  
    if (!auth.user) {
      return <p>You are not logged in.</p>;
    }
  
    return (
      <Stack spacing={2} direction="row" justifyItems={"center"} justifyContent={"center"}>
        <Typography component={"div"} sx={{ fontWeight: 600, fontSize: '2rem', verticalAlign: 'center', paddingTop: '1rem'}}>
          {`Welcome ${auth.user.firstName}!`}
        </Typography>
        <Tooltip title="Logout" sx={{ marginRight: '1rem' }}>
            <IconButton>
            <LogoutIcon fontSize="large" onClick={() => {
              auth.signout(() => navigate("/login"));
            }}/>
        </IconButton>
        </Tooltip>        
      </Stack>
    );
  }