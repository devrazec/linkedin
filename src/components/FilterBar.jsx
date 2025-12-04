import React, { useContext } from 'react';
import { Box, Button, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { GlobalContext } from '../context/GlobalContext';

export default function FilterBar() {
    const { /* your context variables */ } = useContext(GlobalContext);

    return (
        <Box
            sx={{
                width: "100%",
                borderBottom: "1px solid #e0e0e0",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mt: 1,
                p: 1,
                bgcolor: "#fff",
                overflowX: { xs: "auto", sm: "auto" }, // scroll on small screens only
                scrollbarWidth: "thin", // Firefox
                "&::-webkit-scrollbar": { // Chrome/Safari
                    height: 6,
                },
            }}
        >
            {/* Active Filter (Green) */}
            <Button
                variant="contained"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    px: 2,
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    bgcolor: "#057642",
                    color: "#fff",
                    flexShrink: 0, // prevent shrinking in scroll
                    "&:hover": { bgcolor: "#045c34" },
                }}
            >
                Jobs
            </Button>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "block" } }} />

            {/* Pill Filters */}
            <Button
                variant="outlined"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    px: 2,
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    color: "#555",
                    borderColor: "#ccc",
                    flexShrink: 0,
                }}
            >
                Date posted
            </Button>

            <Button
                variant="outlined"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    px: 2,
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    color: "#555",
                    borderColor: "#ccc",
                    flexShrink: 0,
                }}
            >
                Experience level
            </Button>

            <Button
                variant="outlined"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    px: 2,
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    color: "#555",
                    borderColor: "#ccc",
                    flexShrink: 0,
                }}
            >
                Company
            </Button>

            <Button
                variant="outlined"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    px: 2,
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    color: "#555",
                    borderColor: "#ccc",
                    flexShrink: 0,
                }}
            >
                Remote
            </Button>

            <Button
                variant="outlined"
                sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    px: 2,
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    color: "#555",
                    borderColor: "#ccc",
                    flexShrink: 0,
                }}
            >
                Easy Apply
            </Button>

            <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "block" } }} />

            <Button
                variant="outlined"
                sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    px: 2,
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    color: "#555",
                    borderColor: "#ccc",
                    flexShrink: 0,
                }}
            >
                All filters
            </Button>
        </Box>
    );
}
