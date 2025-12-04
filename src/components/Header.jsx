import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    InputBase,
    Avatar,
    Menu,
    MenuItem
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
    const {
        darkMode,
        setDarkMode,
        markerGeo,
        setMarkerGeo,
        portugalGeo,
        setPortugalGeo,
        filterOpen,
        setFilterOpen,
        flagOpen,
        setFlagOpen,
        flag,
        setFlag,
        hoveredId,
        setHoveredId,
        region,
        setRegion,
        selectedRegion,
        setSelectedRegion,
        zoomView,
        setZoomView,
        initialView,
        setInitialView,
    } = useContext(GlobalContext);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [langAnchor, setLangAnchor] = React.useState(null);
    const [lang, setLang] = React.useState("en");
    const flags = { en: "fi fi-gb", pt: "fi fi-pt", es: "fi fi-es" };
    const changeLang = (code) => { setLang(code); setLangAnchor(null); };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar position="static" color="default" sx={{ boxShadow: 1, px: 2 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Left side: Logo + Search */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box>
                        <img src="linkedin/img/logo.png" alt="LinkedIn Logo" style={{ height: 30 }} />
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#eef3f8",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1
                        }}
                    >
                        <SearchIcon fontSize="small" />
                        <InputBase
                            placeholder="Search"
                            sx={{ ml: 1, fontSize: 14, width: 180 }}
                        />
                    </Box>
                </Box>

                {/* Right side navigation icons */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 12, color: "#666" }}>
                        <IconButton><HomeIcon sx={{ color: "#000" }} /></IconButton>
                        <Box sx={{ width: "100%", height: 2, backgroundColor: "#000", mt: 0.5 }} />
                        Home
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 12, color: "#666" }}>
                        <IconButton><PeopleIcon sx={{ color: "#666" }} /></IconButton>
                        My Network
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 12, color: "#666" }}>
                        <IconButton><WorkIcon sx={{ color: "#666" }} /></IconButton>
                        Jobs
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 12, color: "#666" }}>
                        <IconButton><ChatIcon sx={{ color: "#666" }} /></IconButton>
                        Messaging
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 12, color: "#666" }}>
                        <IconButton>
                            <Box sx={{ position: "relative" }}>
                                <NotificationsIcon sx={{ color: "#666" }} />
                                <Box
                                    sx={{ position: "absolute", top: -2, right: -2, background: "#d11124", color: "#fff", width: 16, height: 16, fontSize: 10, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
                                >5</Box>
                            </Box>
                        </IconButton>
                        Notifications
                    </Box>

                    {/* Language Selector */}
                    <Box sx={{ textAlign: "center" }}>
                        <IconButton onClick={(e) => setLangAnchor(e.currentTarget)}>
                            <span className={flags[lang]} style={{ width: 24, height: 24, borderRadius: "50%", display: "inline-block" }} />
                        </IconButton>
                        <Menu anchorEl={langAnchor} open={Boolean(langAnchor)} onClose={() => setLangAnchor(null)}>
                            <MenuItem onClick={() => changeLang("en")}><span className={flags.en} style={{ width: 20, height: 20, borderRadius: "50%", marginRight: 8, display: "inline-block" }} /> English</MenuItem>
                            <MenuItem onClick={() => changeLang("pt")}><span className={flags.pt} style={{ width: 20, height: 20, borderRadius: "50%", marginRight: 8, display: "inline-block" }} /> Portuguese</MenuItem>
                            <MenuItem onClick={() => changeLang("es")}><span className={flags.es} style={{ width: 20, height: 20, borderRadius: "50%", marginRight: 8, display: "inline-block" }} /> Spanish</MenuItem>
                        </Menu>
                    </Box>

                    {/* Profile dropdown */}
                    <Box sx={{ textAlign: "center" }}>
                        <IconButton onClick={handleMenuOpen}>
                            <Avatar sx={{ width: 28, height: 28 }}>C</Avatar>
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default React.memo(Header);