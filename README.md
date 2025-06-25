# ParkeoYA - Backend 🚗🅿️

Este es el backend oficial de ParkeoYA, una

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- JWT (JSON Web Tokens)
- Mongoose

## 🔐 Endpoints principales

### Autenticación
- `POST /api/users/register` → Registro de nuevo usuario
- `POST /api/users/login` → Inicio de sesión

### Perfil
- `GET /api/users/me` → Obtener perfil (requiere token)

## ⚙️ Requisitos

- Node.js 18+
- MongoDB Atlas URI en archivo `.env`

## 📂 Estructura del proyecto