document.addEventListener('DOMContentLoaded', function() {
    let reports = localStorage.getItem('reports');
    reports = reports ? JSON.parse(reports) : [];

    const reportsList = document.getElementById('reportsList');
    if (reports.length === 0) {
        reportsList.textContent = 'No reports found.';
    } else {
        reports.forEach(report => {
            const reportDiv = document.createElement('div');
            reportDiv.classList.add('report');

            const reportContent = `
                <p><strong>Date:</strong> ${report.date}</p>
                <p><strong>Time:</strong> ${report.time}</p>
                <p><strong>Location:</strong> ${report.location}</p>
                <p><strong>Description:</strong> ${report.description}</p>
                <p><strong>Witnesses:</strong> ${report.witnesses}</p>
                <p><strong>Vehicle Description:</strong> ${report.vehicle}</p>
            `;
            reportDiv.innerHTML = reportContent;
            reportsList.appendChild(reportDiv);
        });
    }
});
