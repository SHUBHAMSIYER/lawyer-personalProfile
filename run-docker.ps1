# Requires Docker Desktop. Installs deps inside the container and starts Vite.
Set-Location $PSScriptRoot

if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
  Write-Error "Docker is not installed or not on PATH. Install Docker Desktop: https://www.docker.com/products/docker-desktop/"
  exit 1
}

docker compose up --build
