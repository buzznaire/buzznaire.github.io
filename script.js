function checkCompanyName() {
    const companyName = document.getElementById('companyName').value;
    if (!companyName) {
        document.getElementById('result').innerText = 'Please enter a company name.';
        return;
    }

    const url = `https://www.apimall.acra.gov.sg/entity-name-search?companyName=${encodeURIComponent(companyName)}`;
    const headers = {
        "Authorization": "Bearer YourAccessToken",
        "accept": "application/json"
    };

    fetch(url, { headers })
        .then(response => response.json())
        .then(data => {
            if (data.isAvailable) {
                document.getElementById('result').innerText = 'Company name is available.';
            } else {
                document.getElementById('result').innerText = 'Company name is not available.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerText = 'Failed to check the availability. Please try again.';
        });
}
