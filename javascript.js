// Script untuk mengelola form kontak
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi sederhana
    if (name && email && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
        // Reset form setelah pengiriman
        document.getElementById('contact-form').reset();
    } else {
        alert('Silakan lengkapi semua field sebelum mengirim.');
    }
});
