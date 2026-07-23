import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="text-center">

        <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-400 to-gray-700 bg-clip-text text-transparent">
          CR PEOPLE SOLUTIONS
        </h1>

        <h2 className="text-3xl mt-4 text-gray-200">
          Transformando Talentos em Resultados
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          Plataforma inteligente de Recrutamento & Seleção
        </p>


        <div className="mt-10 flex gap-5 justify-center">


          <button
            className="
            bg-gradient-to-r
            from-gray-100
            via-gray-400
            to-gray-700
            text-black
            px-8
            py-4
            rounded-full
            font-bold
            "
          >
            Sou Empresa
          </button>



          <Link
            href="/candidato"
            className="
            border
            border-gray-500
            text-gray-200
            px-8
            py-4
            rounded-full
            font-bold
            hover:bg-gray-200
            hover:text-black
            transition
            "
          >
            Sou Candidato
          </Link>


        </div>

      </div>

    </main>
  );
}