# Ufix Backend

## Description
Welcome to the **Ufix Backend** repository. This is a Node.js-based backend application configured with [Prisma](https://www.prisma.io/) as the Object-Relational Mapper (ORM) for database interactions.

## Project Structure
```text
ufix-backend/
├── prisma/
│   └── schema.prisma    # Prisma schema defining database models
├── src/
│   └── index.js         # Main application entry point
├── .gitignore           # Ignored files for Git
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Exact dependency versions
└── prisma.config.ts     # Prisma configuration file
```

## Prerequisites
Make sure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (v16 or higher recommended)
*   npm (comes with Node.js)
*   A running relational database (e.g., PostgreSQL, MySQL, or SQLite) compatible with Prisma.

## Installation
1. Clone the repository and navigate to the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```

## Environment Setup
Create a `.env` file in the root directory and add your environment variables. You will need a database connection string for Prisma:
```env
DATABASE_URL="your_database_connection_string_here"
PORT=3000
```

## Database Initialization
Initialize the database and generate the Prisma Client by running:
```bash
npx prisma generate
npx prisma db push
```
*(Note: Use `npx prisma migrate dev` instead of `db push` if you are using migrations in a development environment).*

## Running the Application
To start the backend server, run:
```bash
node src/index.js
```
*(Or use `npm start` / `npm run dev` if they are defined in your `package.json`)*

---

# Ufix Backend (Español)

## Descripción
Bienvenido al repositorio de **Ufix Backend**. Esta es una aplicación backend basada en Node.js configurada con [Prisma](https://www.prisma.io/) como el Mapeador Objeto-Relacional (ORM) para la interacción con la base de datos.

## Estructura del Proyecto
```text
ufix-backend/
├── prisma/
│   └── schema.prisma    # Esquema de Prisma que define los modelos de la base de datos
├── src/
│   └── index.js         # Punto de entrada principal de la aplicación
├── .gitignore           # Archivos ignorados por Git
├── package.json         # Dependencias y scripts del proyecto
├── package-lock.json    # Versiones exactas de las dependencias
└── prisma.config.ts     # Archivo de configuración de Prisma
```

## Requisitos Previos
Asegúrate de tener lo siguiente instalado en tu equipo:
*   [Node.js](https://nodejs.org/) (se recomienda v16 o superior)
*   npm (viene instalado con Node.js)
*   Una base de datos relacional en ejecución (ej. PostgreSQL, MySQL o SQLite) compatible con Prisma.

## Instalación
1. Clona el repositorio y navega al directorio del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración del Entorno
Crea un archivo `.env` en el directorio raíz y agrega tus variables de entorno. Necesitarás una cadena de conexión a la base de datos para Prisma:
```env
DATABASE_URL="tu_cadena_de_conexion_a_la_base_de_datos_aqui"
PORT=3000
```

## Inicialización de la Base de Datos
Inicializa la base de datos y genera el cliente de Prisma ejecutando:
```bash
npx prisma generate
npx prisma db push
```
*(Nota: Usa `npx prisma migrate dev` en lugar de `db push` si estás utilizando un sistema de migraciones en un entorno de desarrollo).*

## Ejecución de la Aplicación
Para iniciar el servidor backend, ejecuta:
```bash
node src/index.js
```
*(O utiliza `npm start` / `npm run dev` si se encuentran definidos en tu `package.json`)*