#!/bin/bash

# Verificar que se proporcionó una versión para rollback
if [ -z "$1" ]; then
    echo "❌ Debe proporcionar una versión para el rollback"
    echo "Uso: ./rollback.sh <version>"
    exit 1
fi

VERSION=$1
echo "🔄 Iniciando rollback a la versión $VERSION..."

# Guardar la versión actual
CURRENT_VERSION=$(git describe --tags --abbrev=0)
echo "📝 Versión actual: $CURRENT_VERSION"

# Verificar si hay cambios sin commitear
if [[ $(git status -s) ]]; then
    echo "⚠️ Hay cambios sin commitear. Guardando en stash..."
    git stash
fi

# Realizar el rollback
echo "⏮️ Realizando rollback a $VERSION..."
git checkout $VERSION

# Instalar dependencias de la versión anterior
echo "📦 Instalando dependencias..."
npm install

# Construir la aplicación
echo "🏗️ Construyendo la aplicación..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error durante la construcción"
    echo "⏮️ Volviendo a la versión anterior..."
    git checkout $CURRENT_VERSION
    npm install
    npm run build
    exit 1
fi

echo "✅ Rollback completado exitosamente a la versión $VERSION"
echo "Para revertir el rollback, ejecute: ./rollback.sh $CURRENT_VERSION"
