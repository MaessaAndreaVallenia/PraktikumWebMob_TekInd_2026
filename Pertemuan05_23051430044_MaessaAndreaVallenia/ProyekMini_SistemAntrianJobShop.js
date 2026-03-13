document.addEventListener("DOMContentLoaded", function() {

    // Array awal 3 job
    let antrianMesin = [
        {idJob: "J01", namaProses: "Drilling", durasi: 30},
        {idJob: "J02", namaProses: "Milling", durasi: 45},
        {idJob: "J03", namaProses: "Grinding", durasi: 25}
    ];

    const btnProses = document.getElementById("btnProses");
    const hasilOutput = document.getElementById("hasilOutput");
    const rekapTable = document.getElementById("rekapTable");

    // Function untuk proses antrian
    function prosesAntrian(antrian){
        let outputHtml = "";
        antrian.forEach(job => {
            let pesan = `Memproses Job ${job.idJob} - ${job.namaProses} selama ${job.durasi} menit`;
            outputHtml += pesan + "<br>";
            console.log(pesan);
        });
        hasilOutput.innerHTML = outputHtml;

        // update tabel rekap
        let tableHtml = "";
        antrian.forEach(job => {
            tableHtml += `<tr><td>${job.idJob}</td><td>${job.namaProses}</td><td>${job.durasi}</td></tr>`;
        });
        rekapTable.innerHTML = tableHtml;
    }

    // Event tombol
    btnProses.addEventListener("click", function(){
        // Proses antrian awal
        prosesAntrian(antrianMesin);

        // Tambahkan 1 job baru
        const jobBaru = {idJob: "J04", namaProses: "Polishing", durasi: 20};
        antrianMesin.push(jobBaru);

        console.log("Job baru ditambahkan:", jobBaru.idJob, "-", jobBaru.namaProses);
        alert("Job baru ditambahkan: " + jobBaru.idJob + " - " + jobBaru.namaProses);

        // Proses ulang semua job (termasuk job baru)
        prosesAntrian(antrianMesin);
    });

});