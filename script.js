document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const witnesses = document.getElementById('witnesses').value;
    const vehicle = document.getElementById('vehicle').value;

    const report = {
        date: date,
        time: time,
        location: location,
        description: description,
        witnesses: witnesses,
        vehicle: vehicle
    };

    let reports = localStorage.getItem('reports');
    reports = reports ? JSON.parse(reports) : [];
    reports.push(report);
    localStorage.setItem('reports', JSON.stringify(reports));

    document.getElementById('message').textContent = 'Report Submitted Successfully!';
    document.getElementById('reportForm').reset();
});
