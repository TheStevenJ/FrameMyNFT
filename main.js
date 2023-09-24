document.getElementById("id-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get selected collection and NFT ID
    const nftId = document.getElementById("id-num").value;

    if (nftId) {
        // Prepare the data to send as JSON
        const dataToSend = {
            nftId: nftId
        };

        // Send a POST request to your API
        // Replace 'your-api-endpoint' with the actual API endpoint
        fetch('your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                if (data.result !== null) {
                    // Redirect to a new HTML page
                    window.location.href = "metadata.html";
                } else {
                    document.getElementById("result").innerText = "NFT not found.";
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
    } else {
        alert("Please select a collection and enter an NFT ID.");
    }
});
