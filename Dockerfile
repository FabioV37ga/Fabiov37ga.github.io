# Minimal single-stage Dockerfile to build and run the Vite preview
FROM node:20-alpine

WORKDIR /app

# Copy package files and install (includes dev deps so `vite preview` is available)
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source, build and run preview to serve the built files
COPY . .
RUN npm run build

EXPOSE 5173
CMD ["npm","run","preview","--","--port","5173","--host","0.0.0.0"]

