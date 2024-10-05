# Use a lightweight Node.js image as the base
FROM node:18-alpine

# Set environment variables
ENV NEXT_PUBLIC_BACKEND_SERVICE_BASE_URL=https://backend-dot-lexin-ta.et.r.appspot.com

# Create and set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy the package manager files and install dependencies
COPY pnpm-lock.yaml ./
RUN pnpm fetch

# Copy the application files
COPY . .

# Install dependencies
RUN pnpm install

# Build project
RUN pnpm build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "start"]