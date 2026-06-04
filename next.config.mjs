/** @type {import('next').NextConfig} */

// Build normal (Vercel): comportamiento por defecto, con Image Optimization.
// Build estático (Cloudflare Pages / nginx / server propio):
//   STATIC_EXPORT=true pnpm build   ->  genera la carpeta `out/` con HTML estático.
//   (En export, Next no puede optimizar imágenes on-the-fly, por eso unoptimized.)
const isExport = process.env.STATIC_EXPORT === "true"

const nextConfig = isExport
  ? {
      output: "export",
      images: { unoptimized: true },
    }
  : {}

export default nextConfig
