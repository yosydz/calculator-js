function hitung() {
    let pembagi = document.getElementById("opt").value
    let bilSatu = parseFloat(document.getElementById("bil1").value)
    let bilDua = parseFloat(document.getElementById("bil2").value)
    let hasil = document.getElementById("hasil")

    switch (pembagi) {
        case "+":
            hasil.value = bilSatu + bilDua
            break
        case "-":
            hasil.value = bilSatu - bilDua
            break
        case "/":
            hasil.value = bilSatu / bilDua
            break
        case "*":
            hasil.value = bilSatu * bilDua
            break
    }
}

let waktu = document.getElementById('dateTime')

function time() {
    let d = new Date()
    const days = [
        "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"
    ]

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]

    let dayName = days[d.getDay()]
    let year = d.getFullYear()
    let month = months[d.getMonth()]
    let day = d.getDate()
    let s = d.getSeconds()
    let m = d.getMinutes()
    let h = d.getHours()
    waktu.textContent =
        dayName + ", " + day + " - " + month + " - " + year + " | " + ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2)
}
setInterval(time, 1000)