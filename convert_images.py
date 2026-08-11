import os
import glob
from PIL import Image
import pillow_heif

# Register HEIC opener with PIL
pillow_heif.register_heif_opener()

BASE_DIR = r"d:\KKN\E-KATALOG\E-Katalog\public"
DEST_DIR = os.path.join(BASE_DIR, "images", "products")

os.makedirs(DEST_DIR, exist_ok=True)

folders = {
    "kripik-dani": os.path.join(BASE_DIR, "Kripik Dani", "Kripik Dani"),
    "anyaman-bambu": os.path.join(BASE_DIR, "Pengepul Anyaman", "Pengepul Anyaman"),
    "rempah": os.path.join(BASE_DIR, "Rempah Rempah", "Rempah Rempah"),
    "konveksi": os.path.join(BASE_DIR, "Konveksi Celana", "Konveksi Celana"),
}

results = {}

for key, src_path in folders.items():
    dest_folder = os.path.join(DEST_DIR, key)
    os.makedirs(dest_folder, exist_ok=True)
    results[key] = []
    
    files = glob.glob(os.path.join(src_path, "*.*"))
    print(f"Processing {key}: found {len(files)} files")
    
    for idx, fpath in enumerate(files):
        fname = os.path.basename(fpath)
        ext = os.path.splitext(fname)[1].lower()
        out_name = f"{key}-{idx+1}.jpg"
        out_path = os.path.join(dest_folder, out_name)
        web_url = f"/images/products/{key}/{out_name}"
        
        try:
            with Image.open(fpath) as img:
                # Convert RGBA/P to RGB if needed
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                # Resize if image is huge (> 1600px width/height) to make website lightning fast
                img.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
                img.save(out_path, "JPEG", quality=85, optimize=True)
                results[key].append(web_url)
                print(f"  Converted {fname} -> {out_name}")
        except Exception as e:
            print(f"  Error converting {fname}: {e}")

print("\n--- Summary of Generated Web URLs ---")
for k, urls in results.items():
    print(f"\n{k}:")
    for u in urls:
        print(f"  '{u}',")
