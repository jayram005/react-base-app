import * as React from 'react'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Header from '../../routes/header'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction={props.transitionDirection} ref={ref} {...props} />
});

export default function FullScreenDialog(props) {
    const {
        open,
        titleKey,
        children,
        closeHandler,
        transitionDirection = 'up',
        hideClose = false,
        preventClose = false
    } = props
    const [openModal, setOpenModal] = React.useState(false)

    React.useEffect(() => {
        setOpenModal(open)
    }, [open])

    const handleClose = () => {
        if (!preventClose) {
            setOpenModal(false)
        }
        typeof closeHandler === 'function' && closeHandler()
    }

    return (
        <Dialog
            fullScreen
            open={openModal}
            onClose={handleClose}
            TransitionComponent={Transition}
            TransitionProps={{ direction: transitionDirection }}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar variant='dense' sx={{ justifyContent: 'space-between'}} >
                    <Header titleResourceKey={titleKey} />
                    {!hideClose && <IconButton
                        edge="start"
                        color="inherit"
                        size="large"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>}
                </Toolbar>
            </AppBar>
            <Grid container direction="column" justify="flex-start">
                <>
                    {children}
                </>
            </Grid>            
        </Dialog>
    )

}
