import React from "react";
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import LeafletMap from './LeafletMap';
import JobTable from './JobTable';

export default function Content() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                height: "calc(100vh - 128px)", // Full viewport height minus header
                width: "100%",
                gap: 2,
                p: 2,
                boxSizing: "border-box",
                overflow: "hidden"
            }}
        >
            {/* Left Column: Table */}
            <Box
                sx={{
                    flex: 1,
                    minWidth: 0,
                    height: { xs: "50%", md: "100%" }
                }}
            >
                <Paper
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                    }}
                >
                    <JobTable />

                </Paper>
            </Box>

            {/* Right Column: Map */}
            <Box
                sx={{
                    flex: 1,
                    minWidth: 0,
                    height: { xs: "50%", md: "100%" }
                }}
            >
                <Paper
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            position: "relative",
                            overflow: "hidden"
                        }}
                    >
                        <LeafletMap />
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
