// Function to handle the login process
function checkAuth() {
    const input = document.getElementById('pass').value;
    
    // You can change "1234" to any secret code you prefer
    const secretKey = "1234"; 
    
    if (input === secretKey) {
        // Successful Login
        const targetUrl = "https://script.google.com/macros/s/AKfycbzoPeJWO_RNO-vtYWwTbV_guEOCk47rzYKfhsHOspyOyxpgmf3mOFDIii_m_sm05LAanQ/exec";
        
        // Redirect to your project
        window.location.href = targetUrl;
    } else {
        // Failed Login
        alert("Incorrect PIN. Please try again.");
        document.getElementById('pass').value = ""; // Clear the input
    }
}

// Optional: Allow pressing "Enter" key to submit
document.getElementById('pass').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkAuth();
    }
});
