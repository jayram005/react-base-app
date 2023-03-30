import * as React from 'react'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog(props) {
  const { open, titleKey, children, closeHandler } = props
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [openModal, setOpenModal] = React.useState(false)

  React.useEffect(() => {
    setOpenModal(open)
  }, [open])

  const handleClose = () => {
    setOpenModal(false)
    navigate(-1)
  }

  return (
    <Dialog
      fullScreen
      open={openModal}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <Typography
            sx={{ ml: 2, flex: 1, fontWeight: 'bold' }}
            variant="h6"
            component="div"
          >
            {`${t(titleKey)}`}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            size="small"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container direction="column" justify="flex-start">
        {children}
      </Grid>
    </Dialog>
  )
}
