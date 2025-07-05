function takePicture() {
    alert("This feature will open the camera to take a picture.");
    // Integrate camera functionality here if needed.
}

function generatePDF() {
    const form = document.getElementById('checklistForm');
    const formData = new FormData(form);
    let pdfContent = '';

    for (let entry of formData.entries()) {
        pdfContent += `${entry[0]}: ${entry[1]}\n`;
    }

    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Vehicle_Inspection_Checklist.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}