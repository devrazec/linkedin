import React from "react";
import { Box, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import LeafletMap from './LeafletMap';

const sampleData = [
    { id: 1, name: "Item 1", value: 100 },
    { id: 2, name: "Item 2", value: 200 },
    { id: 3, name: "Item 3", value: 300 },
];

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
                    <Typography variant="h6" sx={{ p: 2, pb: 1, flexShrink: 0 }}>
                        Sample Table
                    </Typography>
                    <TableContainer sx={{ flex: 1, overflow: "auto" }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sampleData.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
