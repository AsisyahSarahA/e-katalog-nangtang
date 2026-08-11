/**
  Generates prefilled WhatsApp URL for a specific UMKM item
 */
export function getWhatsAppUrl(umkm) {
  if (!umkm || !umkm.whatsapp) return null;
  
  // Format phone number to international format without + or spaces
  const cleanNumber = umkm.whatsapp.replace(/[^0-9]/g, '');
  
  const message = `Halo ${umkm.nama}, saya melihat usaha *${umkm.usaha}* Anda di E-Katalog Desa Nangtang. Saya berminat dan ingin bertanya lebih lanjut mengenai produk Anda. Terima kasih!`;
  
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
  Generates general WhatsApp link for Desa / KKN Contact
 */
export function getGeneralWhatsAppUrl() {
  // Official KKN / Perangkat Desa contact
  const number = "6282311995020";
  const message = "Halo Tim E-Katalog Desa Nangtang, saya ingin bertanya tentang UMKM dan produk Desa Nangtang.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
