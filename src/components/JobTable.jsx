import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function JobTable() {

    const portugalCities = [
        "Lisbon",
        "Porto",
        "Faro",
        "Coimbra",
        "Braga",
        "Bragança",
        "Leiria",
        "Guarda"
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
        "Web Fullstack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Software Engineer",
        "DevOps Engineer",
        "Cloud Engineer",
        "Mobile App Developer",
        "iOS Developer",
        "Android Developer",
        "React Developer",
        "Angular Developer",
        "Vue.js Developer",
        "Node.js Developer",
        "Java Developer",
        "Python Developer",
        "PHP Developer",
        "C# .NET Developer",
        "Go Developer",
        "Data Engineer",
        "Machine Learning Engineer",
        "Data Scientist",
        "AI Engineer",
        "QA Engineer",
        "Automation Test Engineer",
        "Cybersecurity Analyst",
        "Systems Administrator",
        "Solutions Architect",
        "Tech Lead",
        "Scrum Master",
        "Product Manager",
        "UX/UI Designer",
        "UI Developer",
        "Database Administrator",
        "Site Reliability Engineer (SRE)",
        "Blockchain Developer",
        "Embedded Systems Engineer",
        "Cloud Solutions Architect"
    ];


    const { data } = useDemoData({
        dataSet: 'Employee',
        rowLength: 100,
    });

    const rows = data.rows.map((row, index) => ({
        id: row.id,
        company: row.name,
        position: techPositions[Math.floor(Math.random() * techPositions.length)],
        stack: techStacks[Math.floor(Math.random() * techStacks.length)],
        salary: '€ ' + row.salary,
        location: portugalCities[Math.floor(Math.random() * portugalCities.length)],
        work: Math.random() > 0.5 ? 'Remote' : 'On-site',
        image: `/linkedin/img/company/${(index % 16) + 1}.svg`,
    }));

    const columns = [
        {
            field: 'info',
            headerName: 'Employee',
            width: 600,
            flex: 1,
            renderCell: (params) => {
                const row = params.row;
                return (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <img
                            src={row.image}
                            alt={row.company}
                            style={{ width: 60, height: 60, objectFit: 'contain' }}
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
    ];

    return (
        <div style={{ height: 560, width: '100%', border: '1px solid #ccc', borderRadius: 8 }}>
            {/* Custom Top Bar */}
            <div
                style={{
                    backgroundColor: '#1976d2', // MUI blue
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
                hideFooter={false} // keep footer if needed
                disableColumnMenu
                hideHeader
                headerHeight={0}
                sx={{
                    border: 'none',
                    '.MuiDataGrid-columnHeaders': {
                        display: 'none', // <-- hides the column header row
                    },
                }}
            />
        </div>
    );
}
