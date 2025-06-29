# TemuDataku - Platform Pembelajaran Data Science

Platform pembelajaran data science terlengkap di Indonesia dengan fitur autentikasi dan katalog program yang lengkap.

## 🚀 Teknologi yang Digunakan

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React

## 📋 Prasyarat

Pastikan Anda telah menginstal:
- **Node.js** (versi 18 atau lebih baru)
- **npm** atau **yarn**
- **Git**

## 🛠️ Instalasi dan Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd temu-dataku-web-starter-main
```

### 2. Install Dependencies
```bash
npm install
```

**Catatan**: Jika mengalami error dengan rollup atau SWC, jalankan:
```bash
npm install @rollup/rollup-win32-x64-msvc @swc/core-win32-x64-msvc
```


### 3. Jalankan Development Server
```bash
npm run dev
```


## 🔐 Akun Demo

Untuk testing, gunakan akun demo berikut:
- **Email**: `demo@temudataku.com`
- **Password**: `password123`

## 📱 Fitur Utama

### 🏠 Halaman Utama
- Hero section dengan informasi platform
- Tombol "Mulai Belajar Sekarang" → Login
- Tombol "Lihat Program" → Katalog (dengan autentikasi)
- Section fitur dan keunggulan platform

### 🔒 Sistem Autentikasi
- **Protected Routes**: Halaman katalog hanya bisa diakses setelah login
- **Auto Redirect**: Setelah login, otomatis diarahkan ke halaman yang diminta
- **Loading States**: Spinner saat memeriksa status autentikasi
- **Responsive Navigation**: Menu berubah sesuai status login

### 📚 Halaman Katalog
- Menampilkan daftar program pembelajaran
- Filter berdasarkan kategori
- Informasi detail program (harga, durasi, fitur)
- Status ketersediaan program

## 🗂️ Struktur Project

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Navigation.tsx      # Navigation bar
│   └── ProtectedRoute.tsx  # Route protection
├── contexts/
│   └── AuthContext.tsx     # Authentication context
├── hooks/
│   ├── use-mobile.tsx      # Mobile detection
│   └── use-toast.ts        # Toast notifications
├── integrations/
│   └── supabase/           # Supabase configuration
├── pages/
│   ├── Index.tsx           # Homepage
│   ├── Login.tsx           # Login page
│   ├── Katalog.tsx         # Catalog page
│   └── NotFound.tsx        # 404 page
└── lib/
    └── utils.ts            # Utility functions
```

## 🎯 Cara Menggunakan

### Untuk Pengguna Baru:
1. Buka aplikasi di browser
2. Klik "Lihat Program" di homepage
3. Akan diarahkan ke halaman login
4. Login dengan akun demo atau daftar akun baru
5. Setelah login, otomatis masuk ke halaman katalog

### Untuk Pengguna yang Sudah Login:
1. Klik "Lihat Program" langsung masuk ke katalog
2. Browse program yang tersedia
3. Lihat detail dan fitur setiap program

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Jalankan development server

# Build
npm run build        # Build untuk production
npm run build:dev    # Build untuk development

# Preview
npm run preview      # Preview build hasil

# Linting
npm run lint         # Check code quality
```

## 🐛 Troubleshooting

### Error: Cannot find module @rollup/rollup-win32-x64-msvc
```bash
npm install @rollup/rollup-win32-x64-msvc
```

### Error: Failed to load native binding (SWC)
```bash
npm install @swc/core-win32-x64-msvc
```

### Dependency Issues
```bash
# Hapus node_modules dan package-lock.json
rmdir /s /q node_modules
del package-lock.json

# Install ulang
npm install
```


**Happy Coding! 🚀**