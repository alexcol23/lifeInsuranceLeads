#!/bin/bash

# Crear el directorio si no existe
mkdir -p public/images/companies

# URLs de los logos
declare -A logos=(
  ["sura"]="https://www.segurossura.com.co/Paginas/default.aspx"
  ["allianz"]="https://www.allianz.co/"
  ["mapfre"]="https://www.mapfre.com.co/"
  ["liberty"]="https://www.libertyseguros.co/"
  ["metlife"]="https://www.metlife.com/content/dam/metlifecom/us/icons/MetLife.png"
  ["prudential"]="https://www.prudential.com/wps/wcm/connect/prudential/2231c31f-134c-4e23-a5a4-b18a34bf942d/pru_hrz_rgb_pos.png"
  ["axa"]="https://www.axa.com/sites/default/files/axa-logo.png"
)

# Descargar cada logo
for company in "${!logos[@]}"; do
  curl -o "public/images/companies/${company}.png" "${logos[$company]}"
done
