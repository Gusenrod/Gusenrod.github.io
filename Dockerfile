# Usa una imagen base de Node.js para compilar la aplicación
FROM node:14 as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos compilados desde la etapa de construcción
COPY --from=build /app/build /usr/share/nginx/html

# Expón el puerto que Nginx usará
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
