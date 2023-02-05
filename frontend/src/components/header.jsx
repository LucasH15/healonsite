import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem, Select,
  Toolbar,
  Typography
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useIntl } from "gatsby-plugin-intl"

const pages = [
  {
    text: "Accueil",
    link: "/"
  },
  {
    text: "À propos de moi",
    link: "/about"
  },
  {
    text: "FAQ",
    link: "/faq"
  },
  {
    text: "Contact",
    link: "/contact"
  }
]

const Header = () => {
  const intl = useIntl()
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const changeLanguage = ({target: {value}}) => {
    navigate(`/${value}`)
  }

  return (
    <AppBar position='static' elevation='0'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 4,
              display: {xs: "none", md: "flex"},
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Heal on site
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <IconButton
              size='large'
              aria-label='Menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: "block", md: "none"}
              }}
            >
              {pages.map(({text, link}) => (
                <MenuItem key={text} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' component={Link} to={`/${intl.locale}${link}`}>{text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant='h5'
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 4,
              display: {xs: "flex", md: "none"},
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Heal on site
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
            {pages.map(({text, link}) => (
              <Typography
                key={text}
                component={Link}
                onClick={handleCloseNavMenu}
                to={`/${intl.locale}${link}`}
                sx={{my: 2, mr: 2, color: "white", display: "block", textDecoration: "none"}}
                activeStyle={{fontWeight: "bold"}}
              >
                {text}
              </Typography>
            ))}
          </Box>

          <Select
            labelId='language'
            value={intl.locale}
            label='Language'
            onChange={changeLanguage}
            variant='standard'
            sx={{
              color: "white",
              "&:before, &:hover:not(.Mui-disabled, .Mui-error):before": {
                "border-bottom-color": "white"
              },
              svg: {
                color: "white"
              }
            }}
          >
            <MenuItem value='fr'>FR</MenuItem>
            <MenuItem value='en'>EN</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
