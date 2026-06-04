import ComidaClient from "./ComidaClient"

// Categorías conocidas: se pre-generan como HTML estático (necesario para `output: export`).
export function generateStaticParams() {
  return [
    { comidaId: "milanesas" },
    { comidaId: "pastas" },
    { comidaId: "postres" },
    { comidaId: "entradas" },
  ]
}

export default function ComidaHome({
  params,
}: {
  params: { comidaId: string }
}) {
  return <ComidaClient comidaId={params.comidaId} />
}
