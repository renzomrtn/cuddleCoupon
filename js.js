document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const data = {
      firstName: document.getElementById("fname").value,
      lastName: document.getElementById("lname").value,
      phone: document.getElementById("phone").value,
      platform: document.getElementById("platform").value,
      handle: document.getElementById("handle").value
    };

    // Send data to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbzg2qtyJ7P2uw-wTk5eHX0Ghyld_VD2mqookbF7OXH6C813LoFWyUCCnTsqYgO76nYA/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
      alert("Thank you!.");
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });