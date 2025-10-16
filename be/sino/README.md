# Scenoria Sino Backend API

Bu proje, Scenoria Sino şirketinin backend API'sidir. Node.js, Express.js ve MongoDB kullanılarak geliştirilmiştir.

## Özellikler

- **Kullanıcı Yönetimi**: Kayıt, giriş, profil yönetimi
- **Hizmet Yönetimi**: Hizmetlerin CRUD işlemleri
- **Blog Sistemi**: Blog yazılarının yönetimi
- **İletişim Formu**: Müşteri mesajlarının yönetimi
- **Dosya Yükleme**: Resim ve belge yükleme
- **Güvenlik**: JWT token tabanlı kimlik doğrulama
- **Validation**: Express-validator ile veri doğrulama

## Teknolojiler

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload
- **Helmet** - Security
- **CORS** - Cross-origin resource sharing

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Environment dosyasını oluşturun:
```bash
cp .env.example .env
```

3. `.env` dosyasını düzenleyin:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/scenoria_sino
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

4. MongoDB'yi başlatın

5. Sunucuyu çalıştırın:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Kullanıcı kaydı
- `POST /api/auth/login` - Kullanıcı girişi
- `GET /api/auth/me` - Kullanıcı bilgileri

### Services
- `GET /api/services` - Tüm hizmetler
- `GET /api/services/:id` - Tek hizmet
- `POST /api/services` - Yeni hizmet (Admin)
- `PUT /api/services/:id` - Hizmet güncelle (Admin)
- `DELETE /api/services/:id` - Hizmet sil (Admin)

### Blog
- `GET /api/blog` - Tüm blog yazıları
- `GET /api/blog/:id` - Tek blog yazısı
- `POST /api/blog` - Yeni blog yazısı
- `PUT /api/blog/:id` - Blog yazısı güncelle
- `DELETE /api/blog/:id` - Blog yazısı sil

### Contact
- `POST /api/contact` - İletişim mesajı gönder
- `GET /api/contact` - Tüm mesajlar (Admin)
- `GET /api/contact/:id` - Tek mesaj (Admin)
- `PUT /api/contact/:id` - Mesaj güncelle (Admin)
- `POST /api/contact/:id/notes` - Mesaja not ekle (Admin)
- `DELETE /api/contact/:id` - Mesaj sil (Admin)

## Proje Yapısı

```
be/sino/
├── config/
│   └── database.js          # Veritabanı bağlantısı
├── controllers/
│   ├── authController.js    # Kimlik doğrulama controller'ı
│   ├── serviceController.js # Hizmet controller'ı
│   ├── blogController.js    # Blog controller'ı
│   └── contactController.js # İletişim controller'ı
├── middleware/
│   ├── auth.js             # Kimlik doğrulama middleware
│   ├── errorHandler.js     # Hata yönetimi middleware
│   └── upload.js           # Dosya yükleme middleware
├── models/
│   ├── User.js             # Kullanıcı modeli
│   ├── Service.js          # Hizmet modeli
│   ├── Blog.js             # Blog modeli
│   └── Contact.js          # İletişim modeli
├── routes/
│   ├── auth.js             # Kimlik doğrulama rotaları
│   ├── services.js         # Hizmet rotaları
│   ├── blog.js             # Blog rotaları
│   └── contact.js          # İletişim rotaları
├── uploads/                # Yüklenen dosyalar
├── server.js               # Ana sunucu dosyası
├── package.json            # Proje bağımlılıkları
└── README.md               # Bu dosya
```

## Güvenlik

- JWT token tabanlı kimlik doğrulama
- Şifre hashleme (bcryptjs)
- CORS yapılandırması
- Helmet ile güvenlik başlıkları
- Input validation
- Rate limiting (gelecekte eklenecek)

## Geliştirme

### Yeni Model Ekleme
1. `models/` klasörüne yeni model dosyası ekleyin
2. `controllers/` klasörüne controller ekleyin
3. `routes/` klasörüne route dosyası ekleyin
4. `server.js`'e route'u import edin

### Yeni Middleware Ekleme
1. `middleware/` klasörüne middleware dosyası ekleyin
2. `server.js`'e middleware'i import edin ve kullanın

## Lisans

MIT
