/**
  Handles sharing UMKM details via Web Share API or Clipboard Copy
 */
export async function shareUmkm(umkm, platform = 'native') {
  const title = `${umkm.usaha} — Ibu/Bpk ${umkm.nama} (E-Katalog Desa Nangtang)`;
  const text = `Lihat produk dan profil usaha ${umkm.usaha} (${umkm.nama}) dari Desa Nangtang!`;
  const url = window.location.href;

  if (platform === 'whatsapp') {
    const waText = `${text}\n${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`, '_blank');
    return { success: true, method: 'whatsapp' };
  }

  if (platform === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    return { success: true, method: 'facebook' };
  }

  if (platform === 'twitter') {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    return { success: true, method: 'twitter' };
  }

  // Native Web Share API if supported
  if (platform === 'native' && navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return { success: true, method: 'native' };
    } catch (err) {
      if (err.name !== 'AbortError') console.error('Share error:', err);
    }
  }

  // Fallback to Clipboard Copy
  try {
    await navigator.clipboard.writeText(`${text}\n${url}`);
    return { success: true, method: 'copy' };
  } catch (err) {
    console.error('Clipboard copy error:', err);
    return { success: false, error: err };
  }
}
