// memanggil elemen span sebagai wadah output
let output = document.getElementsByTagName('span')[0];

// memanggil semua button setiap nomor
let satu = document.getElementsByClassName('satu')[0];
let dua = document.getElementsByClassName('dua')[0];
let tiga = document.getElementsByClassName('tiga')[0];
let empat = document.getElementsByClassName('empat')[0];
let lima = document.getElementsByClassName('lima')[0];
let enam = document.getElementsByClassName('enam')[0];
let tujuh = document.getElementsByClassName('tujuh')[0];
let delapan = document.getElementsByClassName('delapan')[0];
let sembilan = document.getElementsByClassName('sembilan')[0];
let nol = document.getElementsByClassName('nol')[0];

// memanggil button C (clear)
let clear = document.getElementsByClassName('clear')[0];
clear.addEventListener('click', function() {
    // memanggil element span(wadah output) & mengganti hasil output menjadi 0 kembali
    let output = document.getElementsByTagName('span')[0];
    output.innerHTML = 0;
});

// menghilangkan angka 0 pada output
let removeNol = () => {
    // memanggil element span(wadah output)
    let output = document.getElementsByTagName("span")[0].innerHTML;
    if (output == 0) {
        output = '';
        document.getElementsByTagName("span")[0].innerHTML = output;
    }
};

// button angka 1
satu.addEventListener('click', function angka(satu) {
    removeNol();
    satu = 1;
    output.innerHTML += satu;
});

// button angka 2
dua.addEventListener('click', function angka(dua) {
    removeNol();
    dua = 2;
    output.innerHTML += dua;
});

// button angka 3
tiga.addEventListener('click', function angka(tiga) {
    removeNol();
    tiga = 3;
    output.innerHTML += tiga;
});

// button angka 4
empat.addEventListener('click', function angka(empat) {
    removeNol();
    empat = 4;
    output.innerHTML += empat; 
});

// button angka 5
lima.addEventListener('click', function angka(lima) {
    removeNol();
    lima = 5;
    output.innerHTML += lima;
});

// button angka 6
enam.addEventListener('click', function angka(enam) {
    removeNol();
    enam = 6;
    output.innerHTML += enam;
});

// button angka 7
tujuh.addEventListener('click', function angka(tujuh) {
    removeNol();
    tujuh = 7;
    output.innerHTML += tujuh; 
});

// button angka 8
delapan.addEventListener('click', function angka(delapan) {
    removeNol();
    delapan = 8;
    output.innerHTML += delapan;
});

// button angka 9
sembilan.addEventListener('click', function angka(sembilan) {
    removeNol();
    sembilan = 9;
    output.innerHTML += sembilan; 
});

// button angka 0
nol.addEventListener('click', function angka(nol) {
    removeNol();
    nol = 0;
    output.innerHTML += nol;
});

// button perkalian
let perkalian = document.getElementsByClassName('kali')[0];
perkalian.addEventListener('click', function perkalian(kali) {
    removeNol();
    let x = '*';
    kali = x;
    output.innerHTML += kali;
});

// button pertambahan
let pertambahan = document.getElementsByClassName('tambah')[0];
pertambahan.addEventListener('click', function pertambahan(tambah) {
    removeNol();
    tambah = '+';
    output.innerHTML += tambah;
});

// button pengurangan
let pengurangan = document.getElementsByClassName('kurang')[0];
pengurangan.addEventListener('click', function pengurangan(kurang) {
    removeNol();
    kurang = '-';
    output.innerHTML += kurang;
});

// button pembagian
let pembagian = document.getElementsByClassName('bagi')[0];
pembagian.addEventListener('click', function pembagian(bagi) {
    removeNol();
    bagi = '/';
    output.innerHTML += bagi;
});

// button koma
let koma = document.getElementsByClassName('koma')[0];
koma.addEventListener('click', function koma(koma) {
    removeNol();
    koma = '.';
    output.innerHTML += koma;
});

// button persen
let persen = document.getElementsByClassName('persen')[0];
persen.addEventListener('click', function persen() {
    let angka = document.getElementsByTagName('span')[0].innerHTML;
    angka = angka / 100;
    document.getElementsByTagName('span')[0].innerHTML = angka;
});

// memanggil button sama dengan (=) menunjukan hasil
let samaDengan = document.getElementsByClassName('sama-dengan')[0];
samaDengan.addEventListener('click', function samadengan() {
    removeNol();
    let output = document.getElementsByTagName('span')[0].innerHTML;
    // kalkulasi jumlah dari angka yang diinput
    let total = eval(output);
    document.getElementsByTagName('span')[0].innerHTML = total;
    console.log(total);
});

