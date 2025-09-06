// app.js atau bagian script khusus donasi

// Pastikan script dijalankan setelah DOM siap
document.addEventListener('DOMContentLoaded', function() {
  const waButton = document.getElementById('wa-button');
  
  waButton.addEventListener('click', function() {
    // Ambil nilai dari form
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const telepon = document.getElementById('telepon').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    const alamat = document.getElementById('alamat').value.trim();

    // Validasi sederhana
    if (!nama || !email || !telepon || !pesan || !alamat) {
      alert('Harap lengkapi semua kolom!');
      return;
    }

    // Nomor WhatsApp tujuan (gunakan kode negara tanpa tanda +)
    const waNumber = '6281295365840'; // ganti dengan nomor WhatsApp tujuan

    // Buat pesan
    const waMessage = `Halo, saya ingin berdonasi pakaian:\n\n` +
                      `Nama: ${nama}\n` +
                      `Email: ${email}\n` +
                      `Telepon: ${telepon}\n` +
                      `Alamat: ${alamat}\n` +
                      `Pesan: ${pesan}`;

    // Encode URL
    const waURL = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    // Buka WhatsApp
    window.open(waURL, '_blank');
  });
});
