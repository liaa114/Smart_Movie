# Smart Movie App

## Project Description

Smart Movie App adalah aplikasi pencarian film modern yang dibuat menggunakan React.js, Tailwind CSS, dan React Query.

Aplikasi ini memungkinkan pengguna untuk mencari film secara real-time, melihat daftar trending movies, serta menyimpan film favorit menggunakan LocalStorage agar data tetap tersimpan meskipun halaman di-refresh.

Project ini dibuat dengan fokus pada clean code, reusable component, responsive UI, serta maintainability agar struktur project lebih mudah dikembangkan ke depannya.

---

# How to Run

## 1. Clone Repository

```bash
git clone https://github.com/liaa114/Smart_Movie.git
```

## 2. Masuk ke Folder Project

```bash
cd Smart_Movie
```

## 3. Install Dependency

```bash
npm install
```

Library yang digunakan:

* @tailwindcss/vite
* @tanstack/react-query
* axios
* lucide-react
* react
* react-dom
* react-router-dom
* sweetalert2
* tailwindcss
* use-debounce

## 4. Jalankan Project

```bash
npm run dev
```

## 5. Buka Browser

```bash
http://localhost:5173
```

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS

## Libraries

* TanStack React Query
* Axios
* use-debounce
* Lucide React
* SweetAlert2

## API

* TMDB (The Movie Database) API

## Storage

* Browser LocalStorage

---

# Features

* Search Movie with Debouncing
* Trending Movies
* Movie Detail Page
* Pagination
* Add & Remove Favorites
* Favorites Persistence using LocalStorage
* Empty State & Error State
* Responsive UI Design

---

# Architectural Decisions

* Saya menggunakan React.js karena sebelumnya saya cukup penasaran dengan React dan ingin mencoba langsung bagaimana proses development menggunakan framework tersebut. Selain itu, React menurut saya lebih mudah dipahami untuk membangun tampilan aplikasi secara bertahap karena menggunakan component yang terpisah-pisah.

* Saya menggunakan React Query untuk mengelola data fetching, caching, loading state, dan error handling agar request ke API lebih efisien dan performa aplikasi lebih optimal. Selain itu, dokumentasi dan komunitas React sangat besar, jadi lebih mudah mencari referensi, belajar, dan menemukan solusi ketika mengalami kendala saat development.

---

# Future Improvements

Jika ada pengembangan lebih lanjut, beberapa fitur yang ingin ditambahkan antara lain:

1. Filter berdasarkan genre
2. Dark mode / light mode
3. Watch trailers
4. Authentication & User Profile
5. Better loading skeleton animation
6. Responsive optimization untuk berbagai ukuran device

---

# Author

Emilia Fresia Nandela
