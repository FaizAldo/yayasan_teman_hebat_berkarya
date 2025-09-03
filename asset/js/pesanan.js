// asset/js/app.js
const waButton = document.getElementById('wa-button');

waButton.addEventListener('click', () => {
    const nama = document.getElementById('nama').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const katalog = document.getElementById('katalog');

    // Ambil produk yang dipilih
    const selectedOptions = Array.from(katalog.selectedOptions);
    if (!nama || !alamat || selectedOptions.length === 0) {
        alert('Silakan lengkapi semua kolom dan pilih produk!');
        return;
    }

    let totalHarga = 0;
    let produkList = '';

    selectedOptions.forEach(option => {
        const produkText = option.text; // contoh: "Braided Keychain - 15.000/pcs"
        produkList += `- ${produkText}\n`;

        // Ambil angka harga dari teks
        const hargaMatch = produkText.match(/(\d+\.?\d*)/);
        if (hargaMatch) {
            totalHarga += parseInt(hargaMatch[1].replace('.', ''));
        }
    });

    const waMessage = `Halo, saya ${nama} ingin melakukan pemesanan:\n\n` +
                      `Alamat: ${alamat}\n` +
                      `Produk yang dipilih:\n${produkList}` +
                      `Total Harga: Rp${totalHarga.toLocaleString()}`;

    const encodedMessage = encodeURIComponent(waMessage);
    const waNumber = '62811381144285'; // ganti dengan nomor WhatsApp tujuan

    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');

    // Reset form setelah diklik
    document.getElementById('form-pesanan').reset();
});
