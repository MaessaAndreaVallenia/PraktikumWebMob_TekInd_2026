let input = Number(prompt("Masukkan kode shift (1=Pagi, 2=Siang, 3=Malam)"));

if (input === 1) {
    console.log("Shift Anda adalah Pagi");
} else if (input === 2) {
    console.log("Shift Anda adalah Siang");
} else if (input === 3) {
    console.log("Shift Anda adalah Malam");
} else {
    console.log("Shift Tidak Valid");
}