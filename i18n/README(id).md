<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_id.gif" alt="Sampul">
</p>

# 📦 PikPak Enhancement Master

[![Version](https://img.shields.io/badge/Version-2.2.2-0067C0?style=flat-square)](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js)
[![License](https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-red?style=flat-square)](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html)
[![Platform](https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square)](https://mypikpak.com/drive/all)

> Paket peningkatan tingkat desktop untuk PikPak Web.  
> Dari penjelajahan, pencarian, analisis, penataan, hingga pemutaran, unduhan, dan migrasi, membuat pengelolaan cloud drive benar-benar mendekati efisiensi dan kelancaran pengelola file lokal.

---

## 🌍 Bahasa yang Didukung (Languages)

[Indonesia](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(id).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md) | [Bahasa Melayu](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ms).md)

---

## ✨ Fitur Utama (Features)

### ✨ Pengalaman & Mesin Navigasi

* **Rekonstruksi Interaksi**: Di atas fitur resmi, antarmuka secara keseluruhan dibangun ulang dengan mengacu pada kebiasaan penggunaan **Windows File Explorer**, sehingga alur operasi menjadi lebih intuitif.
* **Mode Turbo**: Setelah diaktifkan, mode ini mengambil alih logika web secara mendalam dan secara signifikan mengurangi lag, crash, serta beban memori pada skenario dengan file dalam jumlah sangat besar.
* **Bilah Path Lanjutan**: Mendukung scroll roda mouse, pergantian folder setingkat melalui dropdown, tampilan ulang path, serta lompatan pelacakan sumber; pencarian global dan paket analisis juga telah terintegrasi ke sistem path yang seragam.
* **Peningkatan Pengalaman**: Mendukung pengurutan multi-dimensi seperti bintang dan tipe, tema gelap, **buramkan sampul** sekali klik, serta meningkatkan pengalaman pembaruan tampilan dengan **strategi refresh senyap SWR**.
* **Pengindeksan Latar Belakang & Perlindungan**: Titik biru bernapas di beranda menunjukkan status sinkronisasi pohon direktori di latar belakang; sistem juga memiliki perlindungan operasi konkurensi untuk sebisa mungkin menghindari data kotor dan penulisan yang saling bertabrakan.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_id.gif" width="1100" alt="Path">
</p>

> 📌 Folder default **My Pack** dilindungi oleh sistem resmi. Skrip tidak akan menjalankan operasi berisiko tinggi yang berpotensi menyebabkan salah hapus pada folder ini.

---

### 📂 Operasi Massal & Manajemen Ruang

* **Ganti Nama Massal**: Mendukung **penggantian / penghapusan regex**, **nomor episode berurutan**, **pemformatan** teks, **penamaan FC2 yang bersih**, **penghapusan iklan pada awalan**, serta **perbaikan ekstensi cerdas** berbasis MIME.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_id.gif" width="550" alt="Ganti Nama Massal">
</p>

* **Analisis File**: Menggabungkan kemampuan filter dan pencarian duplikat; pencarian duplikat mendukung tiga mode analisis: **hash / durasi / nama**.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_scan/file_scan_id.gif" alt="Analisis File">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_dup/file_dup_id.gif" alt="Cari Duplikat File">
</p>

* **Analisis Folder**: Menggabungkan kemampuan filter dan pencarian duplikat folder; pencarian duplikat mendukung tiga mode analisis: **nama / kemiripan / tingkat cakupan**.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_scan/folder_scan_id.gif" alt="Analisis Folder">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_dup/folder_dup_id.gif" alt="Cari Duplikat Folder">
</p>

* **Ekspor Direktori**: Mendukung ekspor **daftar pohon direktori** dari direktori saat ini.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_id.png" width="350" alt="Ekspor Direktori">
</p>

* **Penataan Cerdas**: Mendukung **hapus permanen** (melewati tempat sampah), pembersihan folder kosong sekali klik, ekstraksi massal, serta mengintegrasikan logika **ingat sandi otomatis** dan **isi otomatis cerdas**.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_id.png" width="250" alt="Brankas Kata Sandi">
</p>

* **Manajer File**: Mendukung **daftar hitam file** kustom untuk membersihkan resource sampah dengan sekali klik; juga dapat digunakan sebagai **daftar putih file** untuk melindungi item yang cocok saat penghapusan massal.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_id.gif" width="550" alt="Manajer File">
</p>

> ⚠️ Untuk menghindari konflik sinkronisasi data, tidak disarankan mengubah batch file yang sama di klien lain saat menjalankan operasi berat seperti analisis, penataan, atau penghapusan massal.

---

### 🌐 Pusat Transfer & Berbagi

* **Manajemen Berbagi**: Mendukung pengaturan batas jumlah pengambilan; setelah batas tercapai, berbagi akan otomatis dibatalkan sehingga tautan menjadi tidak valid.
* **Unggah Turbo**: Mendukung drag-and-drop file / folder lokal langsung ke halaman web untuk diunggah, sekaligus mengurangi tingkat gangguan transfer dan meningkatkan pengalaman transfer secara keseluruhan, terutama pada skenario banyak file kecil.
* **Peningkatan Unduhan Cloud**: Mendukung **penghapusan duplikat otomatis** untuk tautan offline massal; dilengkapi **mesin pembersih magnet cerdas** yang dapat mengekstrak hash Base32 / Hex secara otomatis dan menghapus teks pengganggu.
* **Torrent & Cadangan**: Mendukung parsing file torrent **.torrent**; untuk sebagian tautan yang dibatasi, tersedia **solusi penyimpanan snapshot halaman web** sebagai cadangan.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/torrent/torrent_id.png" height="350" alt="Magnet">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_id.gif" height="350" alt="Berbagi">
</p>

> ⚠️ Intersepsi otomatis batas jumlah pengambilan hanya berlaku saat halaman web tetap terbuka dan perangkat tidak dalam keadaan tidur.

---

### 🎬 Peningkatan Media Imersif

* **Mesin Pemutar**: Mendukung kecepatan **0.5x - 3.0x**, rotasi dan pembalikan, rasio paksa, lewati intro dan outro secara otomatis, mode **putar beruntun / putar ulang**, serta **pratinjau thumbnail** pada progress bar.
* **Fallback Kompatibilitas**: Dilengkapi watchdog dan logika kompatibilitas bawaan; saat terjadi layar hitam, kualitas tidak tersedia, atau anomali kompatibilitas codec, sistem dapat otomatis fallback ke kualitas yang dapat diputar.
* **Sistem Subtitle**: Mendukung **subtitle cloud dengan nama sama**, **impor file subtitle lokal**, dan **pencarian subtitle online**; juga mendukung offset subtitle hingga tingkat milidetik, pergantian posisi tampilan, penyesuaian ukuran, serta mount teks lokal dengan drag-and-drop.
* **Bantuan Visual**: Mendukung **pencarian gambar dengan gambar** untuk gambar atau frame video saat ini, memudahkan pencarian balik cover, aktor, anime, atau sumber materi.
* **Mode Media**: Dapat mengaktifkan mode media di pengaturan agar direktori serial / komik diprioritaskan untuk diurutkan berdasarkan nama **A-Z**, sehingga pengalaman menjelajah lebih berkesinambungan.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_id.gif" alt="Video">
</p>

---

### ⚡ Unduhan & Distribusi

* **Tautan Langsung Eksternal**: Mendukung pengambilan tautan langsung video sekali klik, atau memanggil **PotPlayer** untuk pemutaran eksternal.
* **Distribusi RPC**: Mendukung pengiriman file ke node unduhan seperti **Aria2 / Motrix** melalui protokol RPC dengan sekali klik.
* **Pemulihan Struktur Direktori**: Saat mengirim seluruh folder, sistem dapat otomatis memulihkan **struktur direktori pohon** yang ada di cloud drive agar folder tidak menjadi datar setelah diunduh.
* **Peningkatan Distribusi**: Mendukung pemantauan status koneksi panjang, ekspor otomatis daftar error jika gagal, serta **filter unduhan folder**.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/filter/filter_id.png" height="290" alt="Filter Unduhan">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_id.gif" height="290" alt="aria2">
</p>

---

### ⚙️ Konfigurasi & Manajemen Data

* **Cadangan Konfigurasi**: Mendukung ekspor preferensi, aturan manajemen, brankas kata sandi, dan lainnya ke file cadangan JSON dengan sidik jari digital.
* **Impor Cerdas**: Mendukung **penggabungan cerdas dan deduplikasi** saat impor, sehingga tidak menyebabkan hilangnya aturan historis akibat penimpaan sederhana.
* **Pembersihan Data**: Mendukung penghapusan sesuai kebutuhan terhadap **indeks penuh**, **preferensi**, **aturan manajemen**, **brankas kata sandi**, dan **cache**, untuk membebaskan ruang lokal sekaligus meningkatkan privasi dan keamanan.
* **Brankas Kata Sandi**: Dilengkapi manajemen terpusat untuk kata sandi ekstraksi yang umum digunakan, agar bisa dipanggil otomatis dan diisi cepat saat ekstraksi massal.
* **Migrasi Data**: Mendukung pengemasan item terpilih secara terenkripsi, lalu setelah login ke akun lain, sistem dapat otomatis mengenali dan mengambil alih, sehingga mewujudkan **transfer mulus antar akun**.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_id.png" width="350" alt="Cache">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/migrate/migrate_id.gif" alt="Migrasi Data">
</p>

> 📌 Indeks penuh akan dibersihkan setelah halaman web ditutup; sedangkan preferensi, aturan manajemen, brankas kata sandi, dan data sejenis akan disimpan secara persisten di lingkungan skrip lokal.

---

## 💻 Kompatibilitas (Compatibility)

* **Browser yang Direkomendasikan**: Chrome / Edge (versi terbaru)
* **Manajer Skrip yang Direkomendasikan**: Tampermonkey / Violentmonkey
* **Platform yang Didukung**: PikPak Web
* *Catatan: Safari / Firefox dan manajer skrip lainnya belum menjalani pengujian mendalam secara lengkap. Disarankan menggunakan lingkungan yang direkomendasikan di atas untuk pengalaman terbaik.*

---

## 📥 Panduan Instalasi (Installation)

1. **Pasang manajer skrip**: Pasang terlebih dahulu [Tampermonkey](https://www.tampermonkey.net/) atau manajer skrip kompatibel lainnya.
2. **Pasang skrip**: Klik **[Instal Sekarang](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)**.
3. **Buka PikPak Web**: Kunjungi [PikPak](https://mypikpak.com/drive) lalu login ke akun Anda.
4. **Jalankan Enhancement Master**:
   * Dalam mode normal: setelah login, klik **bola logo PikPak** biru yang melayang di sidebar untuk masuk.
   * Dalam Mode Turbo: setelah login, skrip dapat aktif otomatis dan mengambil alih halaman web.

---

## ❓ FAQ

**Q: Mengapa setelah memasang skrip, bola biru melayang tidak muncul?**  
**A:** Pastikan Anda sudah login ke PikPak Web terlebih dahulu. Jika sudah login namun tetap tidak muncul, coba refresh halaman (F5); sekaligus periksa apakah diblokir secara keliru oleh plugin pemblokir iklan seperti AdGuard atau uBlock Origin. Anda dapat menonaktifkan plugin pemblokir sementara, atau menambahkan halaman PikPak ke whitelist, lalu coba lagi.

**Q: Apa itu “Mode Turbo” dan mengapa disarankan untuk diaktifkan?**  
**A:** Setelah diaktifkan, skrip akan mengambil alih logika halaman web asli secara mendalam dan menutupi antarmuka utama dalam mode layar penuh. Mode ini secara aktif memblokir proses sinkronisasi bawaan web yang memakan memori tinggi, sehingga dapat secara signifikan memperbaiki masalah lag, crash, dan lambat memuat pada skenario dengan jumlah file besar.  
**Catatan:** Setelah Mode Turbo diaktifkan, tombol minimalkan dan tutup akan otomatis disembunyikan; jika ingin kembali ke halaman asli, buka pengaturan lalu hapus centangnya.  
**Saran:** Jika file di cloud drive Anda cukup banyak, sangat disarankan mengaktifkannya untuk pengalaman yang lebih lancar dan stabil.

**Q: Mengapa My Pack di beranda menampilkan label “Default”, dan tidak bisa diberi bintang, disalin, dipindahkan, diganti nama, atau dihapus?**  
**A:** Itu adalah mekanisme perlindungan keamanan resmi PikPak untuk direktori default. Skrip mengikuti dan mempertahankan lapisan perlindungan ini, tetapi di atas itu, membebaskan batas berbagi untuk folder default **My Pack**.

**Q: Apa perbedaan mendasar antara “Cari Duplikat File” dan “Cari Duplikat Folder”? Bagaimana memilihnya saat digunakan?**  
**A:**  
**Cari Duplikat File:** Ditujukan untuk level **file tunggal**, menggunakan algoritma tiga mode: **pencocokan hash presisi, kemiripan durasi video, dan kemiripan nama**. Cocok untuk membersihkan file duplikat yang tersebar di cloud drive, seperti episode video tunggal yang tersimpan ganda, satu gambar, atau arsip terpisah.  

**Cari Duplikat Folder:** Ditujukan untuk level **struktur folder secara keseluruhan**, menggunakan algoritma tiga mode: **pencocokan nama, tingkat tumpang tindih file internal (kemiripan), dan redundansi subset (tingkat cakupan)**. Ini lebih cocok untuk membersihkan drama lengkap, paket gambar utuh, atau direktori materi bertingkat yang tersimpan berulang. Bahkan jika nama dua folder berbeda, selama isi internalnya sangat mirip atau memiliki hubungan cakupan yang jelas, sistem tetap dapat mengenalinya.

> **Saran:**  
> “Pencarian duplikat presisi” pada cari duplikat file berbasis hash, sehingga hasilnya paling andal dan relatif aman untuk dicentang lalu dihapus sekaligus.  
> “Pencocokan durasi”, “pencocokan nama”, serta tiga mode pada cari duplikat folder pada dasarnya semuanya termasuk pencocokan kemiripan. Disarankan melakukan pemeriksaan manual sebelum centang massal agar terhindar dari salah hapus.

**Q: Mengapa hasil cari duplikat file semakin lama semakin banyak? Apakah indeks penuh kehilangan data?**  
**A:** Bukan karena indeks kehilangan paket, juga bukan karena data salah. Jumlah pada bagian “pencocokan presisi” dalam hasil duplikat biasanya stabil. Alasan mengapa setelah itu terdeteksi semakin banyak file duplikat terutama karena pencocokan kemiripan berbasis **durasi video** secara bertahap menjadi lebih lengkap.  

Karena sebagian antarmuka asli PikPak tidak langsung mengembalikan durasi video, banyak video duplikat pada analisis pertama akan dilewati sementara karena belum memiliki informasi durasi. Untuk mengatasi hal ini, skrip memiliki mekanisme sniffing asinkron di latar belakang yang otomatis membaca metadata video, melengkapi durasi yang presisi, dan menyimpannya secara persisten di browser lokal. Seiring waktu penggunaan bertambah, basis data durasi lokal akan semakin lengkap, sehingga mesin duplikat dapat mengenali lebih banyak resource duplikat tersembunyi yang “nama filenya berbeda, tetapi durasinya sama”, sehingga hasil terlihat semakin banyak sekaligus semakin akurat.

**Q: Mengapa “pencarian gambar dengan gambar” kadang tidak bisa langsung mengunggah gambar, melainkan meminta saya menempel?**  
**A:** Hal ini disebabkan oleh kebijakan keamanan browser, terutama terkait **pembatasan lintas domain CORS**. Saat skrip tidak bisa langsung mengirim gambar dari cloud drive ke layanan pencarian target, skrip akan otomatis menyalin screenshot gambar saat ini ke clipboard Anda. Pada saat itu, Anda hanya perlu menekan `Ctrl + V` di halaman pencarian yang terbuka untuk menyelesaikan pengiriman gambar.

**Q: Mengapa saat memutar video dengan skrip, hanya ada suara tetapi tidak ada gambar?**  
**A:** Biasanya ini karena video tersebut adalah **streaming multi-audio / multi-track m3u8**. Setelah transkode di cloud, track audio dan video mungkin terpisah, sementara pemutar web saat ini tidak mendukung parsing penuh untuk jenis stream video khusus seperti ini.  
Dalam situasi seperti ini, disarankan klik tombol **“Pemutaran Eksternal”** di kanan bawah untuk langsung memanggil pemutar profesional lokal seperti PotPlayer untuk melakukan streaming.

**Q: Apa perbedaan antara “Asli (Cepat)” dan “Asli” biasa di menu kualitas?**  
**A:** Keduanya biasanya hampir tidak berbeda dalam kualitas gambar. Perbedaannya terutama terletak pada jalur transmisi dan strategi decoding di lapisan bawah.  
Di antaranya, “**Asli (Cepat)**” menggunakan jalur yang telah dioptimalkan secara resmi untuk streaming, sehingga biasanya saat dipanggil oleh pemutar eksternal seperti PotPlayer, proses loading lebih cepat, seek lebih mulus, dan respons lebih stabil.  
**Saran:** Baik untuk pemutaran di web maupun streaming eksternal, biasanya lebih disarankan memilih “Asli (Cepat)”.

**Q: Mengapa operasi yang baru saya lakukan di aplikasi ponsel atau web resmi PikPak, seperti unggah, hapus, atau pindah, tidak langsung sinkron di daftar analisis atau duplikat skrip?**  
**A:** Ini adalah strategi desain skrip untuk menjamin kecepatan pencarian, analisis, dan filter. Agar tidak perlu menarik ulang puluhan ribu informasi file setiap kali ada operasi, skrip sangat bergantung pada snapshot memori lokal dan cache indeks.  
Jika Anda baru saja melakukan banyak perubahan di aplikasi ponsel atau halaman web resmi, disarankan untuk me-refresh halaman agar indeks penuh diambil ulang.  
**Saran:** Saat skrip sedang menjalankan analisis, pencarian duplikat, atau penataan, sebisa mungkin hindari mengubah batch data yang sama dari banyak perangkat secara bersamaan.

**Q: Saat ekstraksi massal, apakah bisa memberikan kata sandi yang berbeda untuk banyak file sekaligus?**  
**A:** Bisa. Ekstraksi massal pada skrip menggunakan mekanisme **pencocokan cerdas brankas kata sandi**: selama Anda sudah menyimpan kata sandi yang diketahui ke dalam brankas, saat memproses setiap arsip, skrip akan otomatis mencoba semua kata sandi di dalam brankas; setelah cocok, ekstraksi akan dimulai otomatis tanpa perlu memasukkan satu per satu secara manual.

**Q: Saat ekstraksi massal muncul “sistem sibuk / tunggu untuk coba lagi”, apakah itu bug skrip?**  
**A:** Bukan. Ini biasanya karena server cloud PikPak memicu batas frekuensi konkurensi, yaitu antarmuka resmi sedang sibuk, bukan karena skrip bermasalah.  
Jika suatu file masih gagal setelah dicoba berkali-kali, biasanya berarti resource tersebut mungkin sudah rusak di cloud, dibatasi, atau kondisi server saat ini kurang baik. Disarankan coba lagi nanti, atau unduh file ke lokal lalu proses secara lokal.

**Q: Informasi apa saja yang termasuk dalam file JSON konfigurasi yang diekspor?**  
**A:** File JSON yang diekspor hanya berisi data konfigurasi lokal Anda di Enhancement Master, misalnya preferensi pencarian duplikat, aturan daftar hitam/putih, brankas kata sandi, sebagian riwayat, dan pengaturan fungsi lainnya.  
**Tidak akan berisi** kata sandi akun PikPak Anda, sehingga aman digunakan untuk cadangan dan migrasi lintas perangkat.

**Q: Apakah impor cadangan akan menimpa konfigurasi atau daftar saya yang sekarang?**  
**A:** Umumnya tidak. Skrip telah ditingkatkan ke logika **penggabungan cerdas**: saat impor, data berbentuk daftar seperti manajer file dan riwayat akan dideduplikasi lalu digabungkan terlebih dahulu, bukan langsung menimpa isi lokal.  
Hanya sebagian kecil item pengaturan dasar, seperti mesin pencarian gambar atau alamat Aria2, yang akan mengikuti nilai dalam file impor. Karena itu, daftar dan catatan lokal yang Anda kumpulkan dalam jangka panjang biasanya tidak akan hilang.

**Q: Mengapa saat menghapus file secara massal, sebagian file ditandai dilindungi atau tidak bisa dihapus?**  
**A:** Periksa dulu apakah file-file tersebut sudah tercatat di **Manajer File**. Jika Anda mengaktifkan aturan “lewati resource yang tercatat di manajer saat menghapus”, skrip akan memperlakukan file yang cocok sebagai item terlindungi agar tidak terhapus secara keliru.  
**Cara mengatasinya:**  
1. Buka pengaturan lalu hilangkan centang aturan perlindungan tersebut, kemudian jalankan ulang penghapusan;  
2. Atau klik pintu masuk **“Manajer File”** pada toolbar / sidebar, lalu pilih **“Jalankan Pembersihan Sekarang”** untuk melakukan pembersihan fisik paksa pada item yang tercatat.

**Q: Mengapa setelah saya menjalankan operasi “Tempel”, file tidak muncul di daftar?**  
**A:** Periksa dulu apakah ruang tersisa di cloud drive Anda masih cukup. Saat ini PikPak resmi biasanya menggunakan strategi **intersepsi diam-diam** untuk kondisi “ruang tidak cukup”, yaitu ketika kapasitas melebihi batas, belum tentu muncul notifikasi yang jelas, melainkan operasi langsung dihentikan di latar belakang.  
Karena itu, jika setelah tempel file tidak muncul, penyebab paling umum adalah batas kapasitas telah terpicu. Disarankan kosongkan ruang terlebih dahulu lalu coba lagi.

**Q: Apa fungsi “perbaiki otomatis magnet yang diblok” di dialog unduhan cloud? Kapan sebaiknya diaktifkan?**  
**A:** Fitur ini akan otomatis membersihkan karakter Cina, emoji, simbol, dan konten pengganggu lain yang tercampur dalam magnet link, lalu secara cerdas mengekstrak kode ciri dan mengembalikan tautan ke format standar.  
**Saran:** Biarkan tetap aktif secara default. Fitur ini sangat cocok untuk menangani magnet dari platform sosial, forum, atau aplikasi chat yang disisipi teks asing, dipotong kepalanya, atau sengaja dicemari.  
Untuk magnet link yang sudah standar dan diawali `magnet:?`, skrip akan otomatis melewati perbaikan dan tidak memengaruhi unduhan normal.

**Q: Apa itu “filter unduhan folder”? Jenis unduhan apa saja yang terpengaruh?**  
**A:** Fitur ini digunakan untuk **secara otomatis mengecualikan file yang cocok berdasarkan ekstensi atau aturan nama** saat mengunduh seluruh folder. Misalnya, Anda dapat mengecualikan `.txt`, `.jpg`, atau file yang namanya mengandung kata kunci tertentu. Fitur ini tidak hanya berlaku untuk unduhan folder biasa, tetapi juga pada skenario **pengiriman folder ke Aria2 / Motrix**.

**Q: Saat menggunakan Aria2 / Motrix atau unduhan browser untuk folder cloud drive, apakah struktur level folder akan dipertahankan?**  
**A:**  
**Aria2 / Motrix: struktur level akan dipertahankan.**  
Skrip akan otomatis mengkloning dan memulihkan struktur pohon direktori cloud drive selama proses pengiriman. Setelah unduhan selesai, struktur folder di disk lokal akan sebisa mungkin tetap konsisten dengan cloud drive. Pada saat yang sama, skrip juga akan otomatis membersihkan karakter khusus yang tidak didukung Windows (seperti `:` `*` `?` dan lainnya), serta sebisa mungkin memendekkan path yang terlalu panjang untuk mengurangi error unduhan.  

**Unduhan browser bawaan: struktur level tidak akan dipertahankan.**  
Karena keterbatasan protokol unduhan browser itu sendiri, file di dalam folder biasanya akan “diratakan” ke dalam satu direktori yang sama.  

**Saran:** Jika Anda ingin mempertahankan struktur direktori yang kompleks secara utuh, prioritaskan **pengiriman unduhan melalui Aria2 / Motrix**.

**Q: Apa itu “migrasi data multi-akun”? Bagaimana langkah penggunaannya?**  
**A:** Fitur ini memungkinkan file atau folder dari akun saat ini dipindahkan dengan cepat dan mulus ke akun PikPak Anda yang lain.  
**Langkah-langkahnya:**  
1. Pilih file atau folder yang ingin dimigrasikan di akun saat ini;  
2. Klik tombol **“Migrasi Data”** di bagian bawah;  
3. Skrip akan otomatis mengenkripsi dan mengemas data, lalu otomatis keluar dari akun saat ini;  
4. Setelah itu, Anda hanya perlu login seperti biasa ke akun tujuan;  
5. Setelah login berhasil, skrip akan otomatis mendeteksi paket migrasi di cache lokal dan menampilkan prompt untuk menerima dengan sekali klik.

---

## 🛡️ Pernyataan Privasi & Keamanan (Privacy & Security)

* **Lokal sebagai Prioritas**: Semua kemampuan inti skrip ini berinteraksi langsung dengan API resmi PikPak melalui browser. Token akun, brankas kata sandi, dan sebagian besar data konfigurasi lokal Anda secara default disimpan di lingkungan browser lokal.
* **Tanpa Pengumpulan**: Skrip ini **tidak akan secara aktif mengumpulkan** data privasi pengguna, dan **tidak akan pernah** mengunggah informasi file atau kredensial akun Anda ke server pihak ketiga mana pun.
* **Antarmuka Pihak Ketiga**: Hanya saat menggunakan fungsi tambahan seperti “pencarian subtitle online” atau “pencarian gambar dengan gambar”, skrip akan mengirimkan kata kunci pencarian atau parameter ciri gambar yang diperlukan ke layanan publik terkait, tanpa melibatkan informasi identitas pribadi Anda.

---

## 🚀 Changelog

### V2.2.2
* Memperbaiki konflik hierarki tombol pintasan.

### V2.2.1
* Memperbaiki masalah unduhan Aria2 / Motrix.

### V2.2.0
* Menambahkan fitur **pemantauan magnet link dari clipboard** dan **pratinjau magnet link**.
* Meningkatkan stabilitas UI.

### V2.1.1
* Memperbaiki kegagalan koneksi Aria2 / Motrix pada lingkungan reverse proxy yang hanya mendukung RPC `ws://` / `wss://` atau menggunakan port nonstandar.

### V2.1.0
* Mendukung **deteksi tombol samping mouse** untuk navigasi tingkat direktori.
* Peningkatan stabilitas.

### V2.0.0
* Bahasa yang didukung diperluas menjadi **简体中文 / 繁體中文 / English / 한국어 / 日本語 / Indonesia / Bahasa Melayu**.
* UI dan arsitektur ditingkatkan, tombol pencarian gambar dipindahkan ke luar, serta ditambahkan **tampilan grid**.

### V1.3.2
* Logika unggahan lokal diperkuat, ditambahkan direct-connect untuk IP Tiongkok Daratan.
* Ambang kemiripan durasi pada pencarian duplikat file disesuaikan untuk mengoptimalkan akurasi deteksi.

### V1.3.1
* Lebih lanjut mengoptimalkan masalah kedipan saat login.

### V1.3.0
* Menambahkan fitur **migrasi data multi-akun**, mendukung pengemasan terenkripsi satu klik untuk file dalam jumlah besar dan transfer mulus ke akun lain.
* Menambahkan mekanisme **hapus permanen**, yang dapat melewati tempat sampah saat menghapus untuk langsung membebaskan ruang cloud drive.

### V1.2.0
* Mesin sniffing durasi video direstrukturisasi.

### V1.1.0
* Aria2 kini mendukung **mempertahankan struktur path folder**, serta menambahkan pengingat kehilangan paket saat pengiriman dan ekspor daftar error sekali klik.
* Unduhan cloud mendukung pengiriman massal dan deduplikasi cerdas, serta **pembersihan otomatis magnet link yang tercemar / diblok** (mendukung decoding otomatis Base32).
* Antarmuka pratinjau ganti nama massal kini menambahkan **ikon dan tampilan sampul**, serta mendukung pratinjau gambar besar saat hover pada folder.
* Fungsi impor ditingkatkan menjadi mode **“penggabungan cerdas”**, sehingga saat mengimpor cadangan tidak lagi menimpa daftar dan catatan lokal yang sudah ada.

---

## 🤝 Ucapan Terima Kasih (Acknowledgements)

Dalam bahasa desain UI dan sebagian logika pemanggilan API web, proyek ini banyak terinspirasi oleh [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager) (by 브랜뉴). Dengan hormat kami sampaikan penghargaan khusus.

---

## ⚖️ Pernyataan Lisensi

Proyek ini mengikuti lisensi **CC-BY-NC-SA-4.0**:

* 🚫 Dilarang digunakan untuk tujuan komersial apa pun
* 🧪 Hanya untuk pembelajaran pribadi, penelitian, dan pertukaran teknis
* 📢 Redistribusi harus tetap mencantumkan atribusi dan menggunakan lisensi yang sama
