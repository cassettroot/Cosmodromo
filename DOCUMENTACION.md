# Documentación del Proyecto: Cosmodromo

## 1. Información General
- **Nombre del Proyecto:** Cosmodromo
- **Tecnología Principal:** React Native con Expo
- **Enrutamiento:** Expo Router (Tabs Navigation)
- **Lenguaje:** JavaScript (React 19)
- **API Externa:** Jikan API v4 (MyAnimeList - `https://api.jikan.moe/v4/anime`)

---

## 2. Requisitos Previos e Instalación Inicial

### Requisitos:
- Node.js instalado (v18 o superior recomendado)
- Expo Go en dispositivo móvil o un emulador (Android Studio / Xcode)

### Pasos de creación desde cero:
1. **Creación del proyecto en Expo:**
   ```bash
   npx create-expo-app Cosmodromo
   cd Cosmodromo
   ```

2. **Instalación de dependencias principales:**
   ```bash
   npm install expo-router react-native-easy-grid @expo/vector-icons expo-status-bar react-native-safe-area-context react-native-screens
   ```

---

## 3. Estructura del Proyecto

```
Cosmodromo/
├── assets/                  # Recurso de imágenes y fuentes
├── src/
│   ├── app/                 # Rutas de la aplicación (Expo Router)
│   │   ├── _layout.jsx      # Configuración del navegador de pestañas inferiores (Tabs)
│   │   ├── index.jsx        # Pantalla principal (Lista de animes y consumo de API)
│   │   ├── Login.jsx        # Pantalla de inicio de sesión
│   │   └── InfoAnime.jsx    # Pantalla de detalle de cada anime con botón de traducción
│   ├── componentes/
│   │   └── Anime.jsx        # Componente de tarjeta reutilizable para cada anime
│   └── styles.js            # Hoja de estilos centralizada (EstilosGeneral)
├── app.json                 # Configuración del proyecto Expo
├── package.json             # Dependencias y scripts
└── index.js                 # Punto de entrada de la aplicación
```

---

## 4. Descripción de Componentes y Archivos

### 4.1. Configuración de Estilos (`src/styles.js`)
Centraliza los estilos visuales de la aplicación (`EstilosGeneral`) asegurando coherencia gráfica en todas las pantallas (colores, botones, inputs, contenedores).

### 4.2. Navegación Principal (`src/app/_layout.jsx`)
Define el navegador de pestañas inferiores (`Tabs`) de `expo-router` registrando la barra de accesos directos con sus iconos para las 3 pantallas de la app:
- `index`: Inicio (Icono de inicio)
- `Login`: Iniciar Sesión (Icono de usuario)
- `InfoAnime`: Información de Anime (Icono de información)

### 4.3. Pantalla Principal (`src/app/index.jsx`)
- Utiliza `useEffect` para consultar la API pública de Jikan (`https://api.jikan.moe/v4/anime`).
- Almacena el resultado en el estado `contenido`.
- Renderiza la lista mediante un scroll conteniendo las tarjetas de anime (`Anime.jsx`).
- Incluye un botón para navegar a la pantalla de **Login**.

### 4.4. Componente Tarjeta (`src/componentes/Anime.jsx`)
- Muestra la imagen, título, tipo y puntuación del anime.
- Al hacer clic en la tarjeta (`Pressable`), utiliza `router.push` para enviar los parámetros del anime a la ruta `/InfoAnime`.

### 4.5. Detalle de Anime (`src/app/InfoAnime.jsx`)
- Recibe los parámetros enviados mediante `useLocalSearchParams()`.
- Incluye un botón interactivo de **Traducción** a Español que traduce los campos fijos y la sinopsis mediante la API de traducción de Google con `fetch`.
- Muestra la imagen principal, título, transmisión, origen, capítulos, estatus, duración, puntuación, audiencia, sinopsis y enlace al tráiler (`Linking.openURL`).

### 4.6. Pantalla de Login (`src/app/Login.jsx`)
- Formulario sencillo con campos de texto (`TextInput`) para usuario y contraseña.
- Botones de **Ingresar** y **Regresar** (`router.back()`).

---

## 5. Comandos para Ejecutar el Proyecto

Para iniciar el servidor de desarrollo de Expo:

```bash
# Iniciar servidor Expo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en Navegador Web
npm run web
```

---
*Documentación generada para el seguimiento y mantenimiento del proyecto Cosmodromo.*
