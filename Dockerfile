# Define la imagen base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /the_cocktail_db

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto en el que se ejecutará tu microservicio
EXPOSE 3000

# Comando para iniciar tu microservicio
CMD [ "npm", "start" ]