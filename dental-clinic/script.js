// WhatsApp Appointment
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let problem = document.getElementById("problem").value;

    let message = `Appointment Request:
Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Problem: ${problem}`;

   let url = `https://api.whatsapp.com/send?phone=919876332627&text=${encodeURIComponent(message)}`;;
    window.open(url, "_blank");
});

// Mobile Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav").classList.toggle("active");
});