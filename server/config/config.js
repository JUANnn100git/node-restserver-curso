// ===============================
//     Puerto
// ===============================
process.env.PORT = process.env.PORT || 3000;

// ===============================
//     Entorno
// ===============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===============================
//     Base de Datos
// ===============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafe_user:gM3IQRU1u98fHayn@cluster0-fmnnc.mongodb.net/cafe?retryWrites=true';
}

process.env.URLDB = urlDB;