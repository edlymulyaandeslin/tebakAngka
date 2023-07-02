var mainLagi = true;
while (mainLagi) {
  alert('Game tebak angka dari 1 - 10 \nKamu punya 3 kesempatan');

  // angka random
  var angka = Math.floor(Math.random() * 10) + 1;
  // chance
  var chance = 3;
  while (user != angka && chance >= 1) {
    // input user
    var user = prompt('Masukkan angka tebakan : ');
    // rules
    if (user == angka) {
      alert('Congratulations 🥳 \nAngka yang dicari adalah ' + angka);
    } else if (user > angka) {
      alert(
        'Angka terlalu Tinggi 😁 \nAnda memiliki ' +
          (chance - 1) +
          ' kesempatan'
      );
    } else if (user < angka) {
      alert(
        'Angka terlalu Rendah 😅 \nAnda memiliki ' +
          (chance - 1) +
          ' kesempatan'
      );
    } else {
      alert('Input invalid \nanda memiliki ' + (chance - 1) + ' kesempatan');
    }
    chance--;
  }

  if (user == angka) {
    alert('Anda sangat hebat! \nKERENNN!!');
  } else if (chance == 0) {
    alert('Kesempatan anda habis');
    alert(
      'Anda gagal! \nAngka yang dicari adalah ' +
        angka +
        '\nPERBANYAK LATIHAN YA DECK!'
    );
  }
  mainLagi = confirm('Mau main lagi?');
}

alert('Terima kasih sudah bermain');
