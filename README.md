# Smart Movie App

## Project Description
Smart Movie App adalah aplikasi pencarian film modern yang dibuat menggunakan React.js, Tailwind CSS, dan React Query.
Aplikasi ini memungkinkan pengguna untuk mencari film secara real-time, melihat daftar trending movies, serta menyimpan film favorit menggunakan LocalStorage agar data tetap tersimpan meskipun halaman di-refresh.
Project ini dibuat dengan fokus pada clean code, reusable component, responsive UI, serta maintainability agar struktur project lebih mudah dikembangkan ke depannya.

# How to Run
## 1. Clone Repository

```bash
git clone https://github.com/username/Smart_Movie.git

2. Masuk ke Folder Project
cd Smart_Movie

3. Install Dependency
npm install
Library yang terpakai dan terinstall antara lain:
   a. "@tailwindcss/vite": "^4.3.0",
   b. "@tanstack/react-query": "^5.100.9",
   c. "axios": "^1.16.0",
   d. "lucide-react": "^1.14.0",
   e. "react": "^19.2.5",
   f. "react-dom": "^19.2.5",
   g. "react-router-dom": "^7.15.0",
   h. "sweetalert2": "^11.26.24",
   i. "tailwindcss": "^4.3.0",
   j. "use-debounce": "^10.1.1"

4. Jalankan Project
npm run dev

5. Buka Browser
http://localhost:5173

**# Tech Stack**
Frontend: React.js, Vite, Tailwind CSS.
Library: TanStack React Query, Axios, use-debounce, Lucide React
API: TMDB (The Movie Database) API
Storage: Browser LocalStorage

**## Architectural Decisions**
Saya menggunakan React.js karena sebelumnya saya cukup penasaran dengan React dan ingin mencoba langsung bagaimana proses development menggunakan framework tersebut. React menurut saya lebih mudah dipahami untuk membangun tampilan aplikasi secara bertahap karena menggunakan component yang terpisah-pisah.
Selain itu, dokumentasi dan komunitas React sangat besar, jadi lebih mudah mencari referensi, belajar, dan menemukan solusi ketika mengalami kendala saat development.

## Future Improvements
Jika ada pengembangan lebih lanjut, beberapa fitur yang ingin ditambahkan antara lain:
1. Filter berdasarkan genre
2. Dark mode / light mode
3. Watch Trailers
