import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function JobTable() {

    const portugalCities = [
        "Lisbon", "Porto", "Faro", "Coimbra",
        "Braga", "Bragança", "Leiria", "Guarda"
    ];

    const techStacks = [
        "JavaScript, React, Node.js",
        "Java, Spring Boot, MySQL",
        "Python, Django, PostgreSQL",
        "TypeScript, Angular, RxJS",
        "PHP, Laravel, MariaDB",
        "C#, .NET Core, SQL Server",
        "Go, Gin, MongoDB",
        "Ruby, Rails, Redis",
        "Flutter, Dart, Firebase",
        "Kotlin, Android SDK, Jetpack Compose",
        "Swift, iOS SDK, SwiftUI",
        "React Native, TypeScript, Expo",
        "Vue.js, Pinia, Vite",
        "Next.js, TypeScript, Prisma",
        "Node.js, Express, Redis",
        "AWS, Docker, Kubernetes",
        "Azure, .NET, CosmosDB",
        "GCP, BigQuery, Cloud Run",
        "HTML, CSS, JavaScript",
        "Svelte, TypeScript, Supabase"
    ];

    const techPositions = [
        "Web Fullstack Developer", "Frontend Developer", "Backend Developer",
        "Software Engineer", "DevOps Engineer", "Cloud Engineer",
        "Mobile App Developer", "iOS Developer", "Android Developer",
        "React Developer", "Angular Developer", "Vue.js Developer",
        "Node.js Developer", "Java Developer", "Python Developer",
        "PHP Developer", "C# .NET Developer", "Go Developer", "Data Engineer",
        "Machine Learning Engineer", "Data Scientist", "AI Engineer",
        "QA Engineer", "Automation Test Engineer", "Cybersecurity Analyst",
        "Systems Administrator", "Solutions Architect", "Tech Lead",
        "Scrum Master", "Product Manager", "UX/UI Designer", "UI Developer",
        "Database Administrator", "Site Reliability Engineer (SRE)",
        "Blockchain Developer", "Embedded Systems Engineer",
        "Cloud Solutions Architect"
    ];

    const cityBounds = {
        Lisbon: { latMin: 38.69, latMax: 38.82, lngMin: -9.25, lngMax: -9.05 },
        Porto: { latMin: 41.11, latMax: 41.19, lngMin: -8.74, lngMax: -8.53 },
        Faro: { latMin: 37.0, latMax: 37.2, lngMin: -8.1, lngMax: -7.8 },
        Coimbra: { latMin: 40.18, latMax: 40.23, lngMin: -8.48, lngMax: -8.40 },
        Braga: { latMin: 41.53, latMax: 41.57, lngMin: -8.47, lngMax: -8.42 },
        Bragança: { latMin: 41.79, latMax: 41.83, lngMin: -6.75, lngMax: -6.70 },
        Leiria: { latMin: 39.74, latMax: 39.76, lngMin: -8.87, lngMax: -8.80 },
        Guarda: { latMin: 40.53, latMax: 40.56, lngMin: -7.48, lngMax: -7.42 },
    };

    const { data } = useDemoData({
        dataSet: 'Employee',
        rowLength: 100,
    });

    const rows = data.rows.map((row, index) => {
        const location = portugalCities[Math.floor(Math.random() * portugalCities.length)];
        const { lat, lng } = getRandomLatLng(location);

        return {
            id: row.id,
            company: row.name,
            position: techPositions[Math.floor(Math.random() * techPositions.length)],
            stack: techStacks[Math.floor(Math.random() * techStacks.length)],
            salary: '€ ' + row.salary,
            location,
            lat,
            lng,
            work: Math.random() > 0.5 ? 'Remote' : 'On-site',
            image: `/linkedin/img/company/${(index % 16) + 1}.svg`,
        };
    });

    const columns = [
        {
            field: 'info',
            headerName: '',
            flex: 1,
            sortable: false,
            renderCell: (params) => {
                const row = params.row;
                return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <img
                            src={row.image}
                            alt={row.company}
                            style={{
                                width: 60,
                                height: 60,
                                objectFit: 'contain',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        />
                        <div style={{ lineHeight: 1.4 }}>
                            <div style={{ fontWeight: 'bold', fontSize: 16 }}>{row.position}</div>
                            <div>{row.company}</div>
                            <div style={{ color: 'gray' }}>
                                {row.location} ({row.work})
                            </div>
                            <div>{row.salary}</div>
                            <div style={{ fontSize: 12, color: '#555' }}>Stack: {row.stack}</div>
                        </div>
                    </div>
                );
            },
        },

        // ⭐ ACTION BUTTONS COLUMN ⭐
        {
            field: 'actions',
            headerName: '',
            width: 240,
            sortable: false,
            disableColumnMenu: true,
            cellClassName: 'actions-cell',
            renderCell: () => (
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="contained" size="small">Apply</Button>
                    <Button variant="outlined" size="small">See More</Button>
                    <Button variant="text" size="small">Map</Button>
                </div>
            ),
        }
    ];

    function getRandomLatLng(city) {
        const bounds = cityBounds[city];
        if (!bounds) return { lat: 0, lng: 0 };

        const lat = Math.random() * (bounds.latMax - bounds.latMin) + bounds.latMin;
        const lng = Math.random() * (bounds.lngMax - bounds.lngMin) + bounds.lngMin;

        return { lat, lng };
    }

    return (
        <div style={{ height: 560, width: '100%', border: '1px solid #ccc', borderRadius: 8 }}>

            {/* Custom Top Bar */}
            <div
                style={{
                    backgroundColor: '#1976d2',
                    color: 'white',
                    padding: '16px',
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                }}
            >
                <div style={{ fontSize: 20, fontWeight: 'bold' }}>Jobs in Portugal</div>
                <div style={{ fontSize: 14, opacity: 0.8 }}>{rows.length} results</div>
            </div>

            {/* DataGrid */}
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                hideFooterSelectedRowCount
                getRowHeight={() => 100}
                hideFooter={false}
                disableColumnMenu
                hideHeader
                headerHeight={0}
                sx={{
                    border: 'none',
                    '.MuiDataGrid-columnHeaders': {
                        display: 'none',
                    },
                    '& .actions-cell': {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            />
        </div>
    );
}
