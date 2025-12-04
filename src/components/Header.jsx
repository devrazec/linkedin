import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import FilterBar from './FilterBar';

// Navigation item component with hover and active states
const NavItem = ({ icon: Icon, label, active, badge, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 12,
        color: active ? '#000' : '#666',
        cursor: 'pointer',
        transition: 'color 0.2s ease',
        position: 'relative',
        px: 1,
        '&:hover': {
          color: '#000',
        },
      }}
    >
      <IconButton
        aria-label={label}
        sx={{
          color: 'inherit',
          transition: 'background-color 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        {badge ? (
          <Badge
            badgeContent={badge}
            color="error"
            sx={{
              '& .MuiBadge-badge': {
                fontSize: 10,
                height: 16,
                minWidth: 16,
                fontWeight: 600,
              },
            }}
          >
            <Icon sx={{ fontSize: 24 }} />
          </Badge>
        ) : (
          <Icon sx={{ fontSize: 24 }} />
        )}
      </IconButton>
      <Typography
        variant="caption"
        sx={{
          fontSize: 12,
          fontWeight: active ? 600 : 400,
          mt: -0.5,
        }}
      >
        {label}
      </Typography>
      {active && (
        <Box
          sx={{
            position: 'absolute',
            bottom: -4,
            width: '100%',
            height: 2,
            backgroundColor: '#000',
            //borderRadius: "2px 2px 0 0"
          }}
        />
      )}
    </Box>
  );
};

const Header = () => {
  const context = useContext(GlobalContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [activeTab, setActiveTab] = useState('home');
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchor, setLangAnchor] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [lang, setLang] = useState('en');

  const flags = { en: 'fi fi-gb', pt: 'fi fi-pt', es: 'fi fi-es' };
  const open = Boolean(anchorEl);

  const changeLang = code => {
    setLang(code);
    setLangAnchor(null);
  };

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const navigationItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'network', icon: PeopleIcon, label: 'My Network' },
    { id: 'jobs', icon: WorkIcon, label: 'Jobs' },
    { id: 'messaging', icon: ChatIcon, label: 'Messaging' },
    {
      id: 'notifications',
      icon: NotificationsIcon,
      label: 'Notifications',
      badge: 5,
    },
  ];

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        boxShadow: 1,
        backgroundColor: '#fff',
        m: 0,
        width: '100%',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: { xs: 56, sm: 64 },
          px: { xs: 1.5, sm: 2, md: 3 },
          width: '100%',
        }}
      >
        {/* Left side: Logo + Search */}
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2 } }}
        >
          <Box
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="LinkedIn Home"
          >
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 34 34"
              sx={{
                width: { xs: 32, sm: 36 },
                height: { xs: 32, sm: 36 },
                fill: '#0a66c2',
              }}
            >
              <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5ZM7.5,11A2.5,2.5,0,1,0,5,8.5,2.5,2.5,0,0,0,7.5,11ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58c1.92,0,3,1.53,3,3.58V29h5Z" />
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              backgroundColor: '#eef3f8',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              transition: 'background-color 0.2s ease',
              '&:focus-within': {
                backgroundColor: '#e0e8f0',
              },
            }}
          >
            <SearchIcon fontSize="small" sx={{ color: '#666' }} />
            <InputBase
              placeholder="Search"
              aria-label="Search"
              sx={{
                ml: 1,
                fontSize: 14,
                width: { sm: 150, md: 200 },
                '& input::placeholder': {
                  opacity: 0.7,
                },
              }}
            />
          </Box>
        </Box>

        {/* Right side navigation */}
        {!isMobile ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { sm: 2, md: 3 },
            }}
          >
            {navigationItems.map(item => (
              <NavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                active={activeTab === item.id}
                badge={item.badge}
                onClick={() => setActiveTab(item.id)}
              />
            ))}

            {/* Language Selector */}
            <Box
              sx={{ textAlign: 'center', display: { xs: 'none', lg: 'block' } }}
            >
              <IconButton
                onClick={e => setLangAnchor(e.currentTarget)}
                aria-label="Change language"
                sx={{
                  p: 0.5,
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e0e0e0',
                  }}
                >
                  <span
                    className={flags[lang]}
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      transform: 'scale(1.5)',
                    }}
                  />
                </Box>
              </IconButton>
              <Menu
                anchorEl={langAnchor}
                open={Boolean(langAnchor)}
                onClose={() => setLangAnchor(null)}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={() => changeLang('en')}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 1.5,
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    <span
                      className={flags.en}
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        transform: 'scale(1.5)',
                      }}
                    />
                  </Box>
                  English
                </MenuItem>
                <MenuItem onClick={() => changeLang('pt')}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 1.5,
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    <span
                      className={flags.pt}
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        transform: 'scale(1.5)',
                      }}
                    />
                  </Box>
                  Portuguese
                </MenuItem>
                <MenuItem onClick={() => changeLang('es')}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 1.5,
                      border: '1px solid #e0e0e0',
                    }}
                  >
                    <span
                      className={flags.es}
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        transform: 'scale(1.5)',
                      }}
                    />
                  </Box>
                  Spanish
                </MenuItem>
              </Menu>
            </Box>

            {/* Profile dropdown */}
            <Box
              sx={{
                textAlign: 'center',
                borderLeft: { md: '1px solid #e0e0e0' },
                pl: { md: 2 },
              }}
            >
              <IconButton
                onClick={handleMenuOpen}
                aria-label="Profile menu"
                sx={{
                  transition: 'background-color 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Avatar sx={{ width: 28, height: 28 }}>C</Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        ) : (
          /* Mobile menu */
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton aria-label="Search" sx={{ color: '#666' }}>
              <SearchIcon />
            </IconButton>
            <IconButton
              onClick={handleMobileMenuOpen}
              aria-label="Open menu"
              sx={{ color: '#666' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              {navigationItems.map(item => (
                <MenuItem
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    handleMobileMenuClose();
                  }}
                  sx={{
                    fontWeight: activeTab === item.id ? 600 : 400,
                  }}
                >
                  <item.icon sx={{ mr: 2, fontSize: 20 }} />
                  {item.label}
                  {item.badge && (
                    <Badge
                      badgeContent={item.badge}
                      color="error"
                      sx={{ ml: 2 }}
                    />
                  )}
                </MenuItem>
              ))}
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
