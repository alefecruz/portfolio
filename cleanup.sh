#!/bin/sh
# Verifica se a pasta public_html existe
if [ -d "public_html" ]; then
  # Encontra e remove todos os arquivos e diretórios em public_html, exceto o diretório out
  find public_html -mindepth 1 -maxdepth 1 ! -name out -exec rm -rf {} +
fi