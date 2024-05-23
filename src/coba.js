function hitungRuasKanan(angka) {
    // Mencari selisih dari angka pertama
    var selisih = angka - 1349;

    // Mencari nilai untuk ruas kanan
    var ruasKanan = Math.floor(selisih / 21) + 1;

    return ruasKanan;
}

// Contoh penggunaan fungsi
var angka = 3296;
var ruasKanan = hitungRuasKanan(angka);
console.log(angka + ' = ' + ruasKanan);
