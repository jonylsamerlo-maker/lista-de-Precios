# Lista de Precios - Frutas y Verduras

CRUD de productos hecho con React + Vite.

## Funcionalidades

- Listado de productos con categorías
- Formulario para agregar mercadería nueva
- Edición de precios y nombres
- Filtro por stock

## Tecnologías usadas

- React 19
- React Router DOM 6
- Vite 5
- CSS3

## Requisitos

> **IMPORTANTE:** Este proyecto usa **Vite 5** y **React Router DOM 6**, que son compatibles con **Node.js 18**.
> Si instalás versiones más nuevas (Vite 8, React Router 7) vas a necesitar **Node.js 20 o superior**.

Verificá tu versión de Node antes de arrancar:

```bash
node -v
```

- Node 18.x → funciona con las dependencias actuales del proyecto
- Node 20+ o 22+ → podés usar versiones más nuevas de Vite y React Router

## Cómo instalar y correr

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
   cd <nombre-de-la-carpeta>
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Correr en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador: `http://localhost:5173`

## Problemas conocidos

| Error | Causa | Solución |
|-------|-------|----------|
| `CustomEvent is not defined` | Vite 8+ requiere Node 20+ | Bajá Vite a v5: `npm install vite@5 @vitejs/plugin-react@4 --save-dev` |
| `react-router-dom` requiere Node 20+ | React Router 7+ requiere Node 20+ | Bajá a v6: `npm install react-router-dom@6` |
| App en blanco sin errores | `vite.config.js` vacío o sin el plugin de React | Asegurate de tener el plugin configurado (ver `vite.config.js`) |
