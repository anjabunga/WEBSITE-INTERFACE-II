function kontrak() {
  var nim = document.getElementById("nim").value;
  var nama = document.getElementById("nama").value;
  var semester = document.getElementById("semester").value;
  var prodi = document.getElementById("lab").value;
  var mk = [];
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    mk.push(checkboxes[i].value);
  }

  var validasiAngka = /^[0-9]+$/;
  var validasiHuruf = /^[a-zA-Z ]+$/;

  if (
    nim !== "" &&
    nama !== "" &&
    semester !== "" &&
    prodi !== "" &&
    mk.length > 0
  ) {
    if (nim.match(validasiAngka)) {
      if (nama.match(validasiHuruf)) {
        // Validasi semester
        if (semester > 2) {
          alert("Pengisian Berhasil!");
          let url =
            "validasiData.html?nim=" +
            encodeURIComponent(nim) +
            "&nama=" +
            encodeURIComponent(nama) +
            "&semester=" +
            encodeURIComponent(semester) +
            "&lab=" +
            encodeURIComponent(prodi) +
            "&mk=" +
            encodeURIComponent(mk.join(","));
          window.open(url, "_self"); // Mengarahkan ke halaman validasiData.html di jendela yang sama
        } else {
          alert(
            "Mahasiswa Belum Bisa Mengajukan Peminatan! Harus Semester 2 Keatas"
          );
        }
      } else {
        alert("Masukkan Nama Anda Salah!\nFormat wajib huruf!");
        document.getElementById("nama").value = "";
        document.getElementById("nama").focus();
      }
    } else {
      alert("Masukkan nim Anda Salah!\nFormat wajib angka!");
      document.getElementById("nim").value = "";
      document.getElementById("nim").focus();
    }
  } else {
    alert("Masukkan Kosong! Mohon Isi Terlebih dahulu inputan");
    document.getElementById("nim").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("semester").value = "";
    document.getElementById("lab").value = "";
    document.getElementById("nim").focus();
  }
}

function updatePeminjaman() {
  var lab = document.getElementById("lab").value;
  var peminatan = document.getElementById("peminatan");

  peminatan.innerHTML = ""; // Kosongkan pilihan peminatan

  if (lab === "Lantai 2") {
    // Jika memilih S-1 Informatika
    var options = [
      "FIK-LAB 201",
      "FIK-LAB 202",
      "FIK-LAB 203",
    ];
  } else if (lab === "Lantai 3") {
    var options = [
      "FIK-LAB 301",
      "FIK-LAB 302",
      "FIK-LAB 303",
    ];
  } else if (lab === "Lantai 4") {
    var options = [
      "FIK-LAB 401",
      "FIK-LAB 402",
      "FIK-LAB 403",
    ];
  }

  options.forEach(function (option) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = option;
    checkbox.name = "mk";

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(option));

    var br = document.createElement("br");

    peminatan.appendChild(checkbox);
    peminatan.appendChild(label);
    peminatan.appendChild(br);
  });
}