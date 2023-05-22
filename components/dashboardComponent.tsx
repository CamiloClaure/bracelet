import React from "react"
import {experimentalStyled as styled} from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import MuiDrawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import MuiAppBar, {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import AdminMenu from "./admin_menu"
import IconButton from "@mui/material/IconButton"
import AccountCircle from "@mui/icons-material/AccountCircle"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import {useRouter} from "next/router"
import Image from "next/image"
import Logo from "../assets/img/logo-white.png"
import {createTheme, ThemeProvider} from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#7ebcf2"
    }
  }
})

export let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
})


const drawerWidth: number = 300

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open"
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const Drawer = styled(MuiDrawer, {shouldForwardProp: prop => prop !== "open"})(({theme, open}) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}))

export default function DashboardComponent({children, title}) {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const goToChangePassword = () => {
    router.push("/admin/change-password")
  }

  const logOut = () => {
    setAnchorEl(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{display: "flex"}}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: "24px" // keep right padding when drawer closed
            }}>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
              <div style={{marginTop: "7px"}}></div>
              {/*<Image src={Logo} alt="Logo" width="200px" height="50px" />*/}
            </Typography>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={goToChangePassword}>Change Password</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={true}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1]
            }}
          />
          <Divider />
          <AdminMenu />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: theme => theme.palette.grey[100],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
          }}>
          <Toolbar />
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Toolbar
                sx={{
                  pr: "24px",
                  pt: "24px"
                }}>
                <h2>{title}</h2>
              </Toolbar>
              {children}
            </Grid>
            {/*<Copyright sx={{pt: 4}} />*/}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
