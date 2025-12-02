# Minimal single-stage Dockerfile to build and run the Vite preview
FROM node:20-alpine

WORKDIR /app

# Copy package files and install (includes dev deps so `vite preview` is available)
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source, build and run preview to serve the built files
COPY . .
RUN npm run build

# Ensure `xdg-open` is available so Vite's preview doesn't fail when trying
# to open a browser in environments without a desktop (fixes ENOENT).
RUN apk add --no-cache xdg-utils

EXPOSE 5173
# Use the `preview` script and pass through Vite args. Fixed prior typo.
CMD ["npm","run","preview","--","--port","5173","--host","0.0.0.0"]

