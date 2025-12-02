# Multi-stage Dockerfile for building a Vite app and serving with nginx
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM node:20-alpine AS runtime
WORKDIR /app

# Install runtime dependencies (including dev deps so `vite preview` is available)
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy built static files from build stage
COPY --from=build /app/dist ./dist

EXPOSE 5173
CMD ["npm", "run", "start"]
