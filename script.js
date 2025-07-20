// Ambil elemen-elemen DOM
const form = document.getElementById('donationForm');
const submitBtn = document.getElementById('submitBtn');
const thankYouMessage = document.getElementById('thankYouMessage');

// Tambahkan event listener untuk tombol "Klik Sawer"
submitBtn.addEventListener('click', () => {
    // Validasi formulir
    const name = document.getElementById('name').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (!name || !amount) {
        alert('Silakan isi nama dan nominal donasi.');
        return;
    }

    // Tampilkan pesan terima kasih
    thankYouMessage.classList.remove('hidden');

    // Tutup halaman setelah 5 detik
    setTimeout(() => {
        window.close();
    }, 5000);
});