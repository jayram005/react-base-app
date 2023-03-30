import React, { useState, useEffect, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import {
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useNavigate } from 'react-router-dom'
import navigationConfig from './navigationConfig'
// const drawerWidth = 240
import FullScreen from '../components/full-screen'
// import API from '../../internal-api'
import ErrorBoundary from '../components/errors/ErrorBoundary'

const listItemStyle = (theme) => ({
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  '& .MuiListItemIcon-root': {
    color: '#fff',
    minWidth: 'auto',
  },
  '& .MuiListItemText-root': {
    color: '#fff',
    textTransform: 'uppercase',
  },
  '& .MuiListItemText-root .MuiTypography-root': {
    fontSize: '21px',
    lineHeight: '30px',
    padding: '0 16px',
  },
})

const selectedListItemStyle = (theme) => ({
  // backgroundColor: theme.app.primary.backgroundColor,
  backgroundColor: '#f2f2f2 !important',
  color: '#000 !important',
  '&:hover': {
    backgroundColor: '#f2f2f2',
  },
  '& .MuiListItemIcon-root': {
    color: '#000',
    minWidth: 'auto',
  },
  '& .MuiListItemText-root': {
    color: '#000',
    textTransform: 'uppercase',
  },
  '& .MuiListItemText-root .MuiTypography-root': {
    fontSize: '21px',
    lineHeight: '30px',
    padding: '0 16px',
  },
})

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => true,
})(({ theme, open }) => ({
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer - 1,
  backgroundColor: theme.app.primary.backgroundColor,
  color: theme.app.primary.color,
}))

const Drawer = styled(SwipeableDrawer, {
  shouldForwardProp: (prop) => true,
})(({ theme, open }) => {
  return {
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.primary.main,
    },
  }
})

function NavigationItem(props) {
  const theme = useTheme()
  const { item, context } = props
  const { selectedId, selectedPath, handleListItemClick } = context
  const isSelected = selectedId === item.id
  const isSelectedPath = selectedPath.includes(item.id)
  const [ open, setOpen ] = useState(isSelectedPath) // open group when in selected path

  return (<>
    {item.type === 'item' && (
      <ListItem
        // button
        key={item.id}
        // selected={isSelected}
        onClick={(e) => (item.routeType == 'group' ?
          setOpen(!open)
          : handleListItemClick(e, item)
        )}
        sx={(isSelected) ? selectedListItemStyle(theme) : listItemStyle(theme)}
      >
        <ListItemIcon sx={{ width: '3rem !important' }}>
          {' '}
          {item.icon}{' '}
        </ListItemIcon>
        <ListItemText primary={item.name} />
        {item.children?.length && (open ? <ExpandLess sx={{ color: '#fff'}} /> : <ExpandMore sx={{ color: '#fff'}} />)}
      </ListItem>
    )}
    {item.children != null && (
      <>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <NavigationList 
            items={item.children}
            context={context} 
            sx={{ marginLeft: '1rem' }}
          />
        </Collapse>
      </>
    )}
    {item.type === 'divider' && (
      <Divider key={item.id} sx={{ m: 1, borderColor: theme.app.primary.backgroundColor }} />
    )}
  </>)
}

function NavigationList(props) {
  const { items, context, sx } = props

  return (<List sx={sx} >
    {items.map((item, index) => <NavigationItem 
      key={item.id}
      item={item}
      context={context} 
    />)}
  </List>)
}

function getSelectedPath(items, id) {
  const walk = (items, id, path) => {
    for (const item of items) {
      if (item.id === id) {
        path.push(id)
        return true
      }
      else if (item.children) {
        if (walk(item.children, id, path)) {
          path.push(item.id)
          return true
        }
      }
    }
    return false
  }
  const path = []
  walk(items, id, path)
  return path
}

export default function AppDrawer({ children }) {
  const [state, setState] = useState({
    left: false,
  })
  const theme = useTheme()
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState(null)
  const [open, setOpen] = useState({})
  // const {
  //   salonInfo,
  //   salonSettings,
  //   employees,
  //   addSalonInfo,
  //   addSalonSettings,
  //   loadEmployees,
  //   requestService,
  //   loadSalonProducts,
  //   loadStylistReqServices,
  //   giftCardItem
  // } = useGlobal()

  const selectedPath = useMemo(() => getSelectedPath(navigationConfig, selectedId), [navigationConfig, selectedId])

  useEffect(() => {

    // async function  getSalonInfo()  {
    //   try {
    //       const salonInfo = await API.Salons.get() // Always get from API to get the recent salon details
    //       addSalonInfo && addSalonInfo(salonInfo) // Add Salon Info to the global in-memory context 
    //       console.log(salonInfo)
    //   } catch (error) {
    //       console.log(error)
          
    //   }
    // }    
  }, [])

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const handleListItemClick = (event, item) => {
    if (item.routeType === 'route') {
      setSelectedId(item.id)
      navigate(item.url)
      toggleDrawer('left', false)(event)
    }
    else if (item.routeType === 'fullpageModal') {
      setOpen({ ...open, [item.id]: true })
      toggleDrawer('left', false)(event)
    }
  }

  const closeHandler = (item) => setOpen({ ...open, [item.id]: false })

  return (
    <React.Fragment key={'left'}>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="static">
          <Toolbar>
          <Stack direction="row" sx={{ width: '100%'}} justifyContent={"space-between"}>
            <Stack  direction="row" alignItems={'center'}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer('left', true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
            </Typography>
            <Typography
              variant="body1"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              {'Hello'}
            </Typography>
            </Stack>
          </Stack>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          <Box
            sx={{ width: '65rem' }}
            role="presentation"
          >
            <NavigationList 
              items={navigationConfig}
              context={{ handleListItemClick, selectedId, selectedPath }}
              sx={{ marginTop: '1rem' }}
            />
          </Box>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: theme.app.primary.backgroundColor,
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        {/* {children} */}
        <ErrorBoundary>
            <Outlet />
        </ErrorBoundary>

      </Box>
      {navigationConfig.map((item, index) => (
        item.routeType === 'fullpageModal' ?
          <FullScreen open={open[item.id]} closeHandler={() => closeHandler(item)} titleKey={item.modalTitle || item.name} >
                     <ErrorBoundary>
                        <item.component closeHandler={() => closeHandler(item)} />
                     </ErrorBoundary>
          </FullScreen> : ''
      ))}
    </React.Fragment>
  )
}
