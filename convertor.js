function convertToCSV() {
    const jsonInput = document.getElementById('jsonInput').value;
    let jsonArray;

    try {
        jsonArray = JSON.parse(jsonInput);
    } catch (e) {
        alert('Invalid JSON format');
        return;
    }

    if (!Array.isArray(jsonArray)) {
        alert('JSON should be an array of objects');
        return;
    }

    const csvRows = [];
    const headers = Object.keys(jsonArray[0]);

    // Add the headers to the CSV
    csvRows.push(headers.join(','));

    // Add the data rows
    for (const row of jsonArray) {
        const values = headers.map(header => {
            const value = row[header];
            return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
        });
        csvRows.push(values.join(','));
    }

    // Create the CSV output
    const csvOutput = csvRows.join('\n');
    document.getElementById('csvOutput').value = csvOutput;
}
