document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').innerText = 'Your IP Address is: ' + data.ip;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
        });
});