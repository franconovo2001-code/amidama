# Amidama — guía de puesta en marcha (100% gratis)

## 1. Subir el código a GitHub
1. Creá una cuenta en github.com si no tenés.
2. Creá un repositorio nuevo llamado `amidama` (público).
3. Subí esta carpeta entera al repo (arrastrando los archivos desde la web de GitHub,
   o con git si preferís consola: `git init`, `git add .`, `git commit -m "primer commit"`,
   `git remote add origin TU_URL`, `git push -u origin main`).

## 2. Conectar con Netlify (hosting gratis)
1. Creá cuenta en netlify.com (podés entrar directo con tu cuenta de GitHub).
2. "Add new site" → "Import an existing project" → elegís tu repo `amidama`.
3. Netlify va a detectar solo el `netlify.toml` (build command `npm run build`, carpeta `_site`). Dale "Deploy".
4. En un par de minutos tenés tu sitio en algo como `amidama-xyz.netlify.app`.
   Desde "Site settings → Change site name" podés cambiarlo a `amidama.netlify.app`.

## 3. Activar el panel de publicación (Decap CMS)
1. En el panel de Netlify de tu sitio: **Identity → Enable Identity**.
2. Adentro de Identity: **Registration → Invite only** (para que no se registre cualquiera).
3. **Identity → Services → Git Gateway → Enable Git Gateway**.
4. **Identity → Invite users** → invitate a tu propio email. Te va a llegar un mail para poner contraseña.
5. Listo: entrá a `tusitio.netlify.app/admin` y ahí vas a poder loguearte y escribir notas
   con un editor visual (como WordPress), sin tocar código.

## 4. Indexar en Google (esto es lo que faltó la vez pasada)
1. Andá a search.google.com/search-console.
2. Agregá tu dominio (`amidama.netlify.app` o el que tengas).
3. Verificá la propiedad (Netlify te deja agregar el meta tag de verificación fácil,
   o usás el método de archivo HTML).
4. Cada vez que publiques una nota nueva, pegá la URL en el buscador de arriba de Search
   Console y apretá "Solicitar indexación". Así no dependés de que Google la encuentre sola.

## 5. Publicar notas de acá en adelante
Todo pasa por `/admin`. Completás título, categoría, bajada, imagen de portada y el cuerpo
de la nota, le das "Publish", y automáticamente:
- se crea un archivo `.md` nuevo en el repo de GitHub,
- Netlify vuelve a construir el sitio solo,
- la nota aparece en la home y en su propia página.

No hace falta que toques código nunca más para escribir. El código solo lo tocás si en algún
momento querés cambiar el diseño (colores, tipografías, etc.) — para eso volvés a hablar conmigo.

## 6. Más adelante, cuando tengas presupuesto
Comprás un dominio (`amidama.com` o `.com.ar`, ronda USD 10-15/año) en Namecheap o similar,
y en Netlify → "Domain settings" lo conectás en 5 minutos. No hay que migrar nada.
