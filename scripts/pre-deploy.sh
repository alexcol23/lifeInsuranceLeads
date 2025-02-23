#!/bin/bash

echo "🔍 Iniciando validaciones pre-deploy..."

# Verificar dependencias
echo "📦 Verificando dependencias..."
npm audit
if [ $? -ne 0 ]; then
    echo "❌ Se encontraron vulnerabilidades en las dependencias"
    exit 1
fi

# Ejecutar tests
echo "🧪 Ejecutando tests..."
npm run test
if [ $? -ne 0 ]; then
    echo "❌ Los tests han fallado"
    exit 1
fi

# Construir la aplicación
echo "🏗️ Construyendo la aplicación..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ La construcción ha fallado"
    exit 1
fi

# Verificar variables de entorno
echo "🔐 Verificando variables de entorno..."
if [ ! -f .env.production ]; then
    echo "❌ No se encuentra el archivo .env.production"
    exit 1
fi

# Verificar archivos estáticos
echo "📄 Verificando archivos estáticos..."
required_files=("public/robots.txt" "public/sitemap.xml" "public/favicon.ico")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ No se encuentra el archivo $file"
        exit 1
    fi
done

echo "✅ Todas las validaciones han pasado correctamente"
exit 0
