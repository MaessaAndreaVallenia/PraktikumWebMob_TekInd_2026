if (input === 1) {
    outputDiv.textContent = "Shift Anda adalah Pagi";
    outputDiv.style.color = "green";
    console.log("Shift Anda adalah Pagi"); // ini supaya muncul di console juga
} else if (input === 2) {
    outputDiv.textContent = "Shift Anda adalah Siang";
    outputDiv.style.color = "green";
    console.log("Shift Anda adalah Siang");
} else if (input === 3) {
    outputDiv.textContent = "Shift Anda adalah Malam";
    outputDiv.style.color = "green";
    console.log("Shift Anda adalah Malam");
} else {
    outputDiv.textContent = "Shift Tidak Valid";
    outputDiv.style.color = "red";
    console.log("Shift Tidak Valid");
}