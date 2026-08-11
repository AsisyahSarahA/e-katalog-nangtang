/**
  Generates Google Maps Search URL for UMKM location based on RT/RW
 */
export function getGoogleMapsUrl(umkm) {
  if (!umkm) return '#';
  const query = `Desa Nangtang RT ${umkm.rt || '001'} RW ${umkm.rw || '001'} Cigalontang Tasikmalaya`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
