export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">


      {/* Menu */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

        <div>

          <h1 className="
          text-3xl
          font-bold
          bg-gradient-to-r
          from-gray-100
          via-gray-400
          to-gray-700
          bg-clip-text
          text-transparent
          ">
            CR PEOPLE
          </h1>

          <p className="text-gray-500 text-sm">
            Solutions
          </p>

        </div>



        <nav className="flex gap-8 text-gray-300">

          <span className="hover:text-gray-100 cursor-pointer">
            Início
          </span>

          <span className="hover:text-gray-100 cursor-pointer">
            Empresas
          </span>

          <span className="hover:text-gray-100 cursor-pointer">
            Candidatos
          </span>

          <span className="hover:text-gray-100 cursor-pointer">
            Vagas
          </span>

          <span className="hover:text-gray-100 cursor-pointer">
            Contato
          </span>

        </nav>


      </header>





      {/* Banner Principal */}
      <section className="
      flex
      flex-col
      items-center
      justify-center
      text-center
      py-32
      px-6
      ">



        <h2 className="
        text-6xl
        font-bold
        bg-gradient-to-r
        from-white
        via-gray-400
        to-gray-700
        bg-clip-text
        text-transparent
        ">

          CR PEOPLE SOLUTIONS

        </h2>





        <p className="
        mt-6
        text-3xl
        font-semibold
        text-gray-200
        max-w-3xl
        ">

          Transformando Talentos em Resultados.

        </p>





        <p className="
        mt-6
        text-gray-400
        text-lg
        max-w-2xl
        ">

          Soluções estratégicas em Recursos Humanos,
          conectando empresas e profissionais.

        </p>





        <div className="flex gap-6 mt-12">



          <button
          className="
          bg-gradient-to-r
          from-gray-100
          via-gray-400
          to-gray-700
          text-black
          px-10
          py-4
          rounded-full
          font-bold
          hover:opacity-80
          transition
          "
          >

            Sou Empresa

          </button>





          <button
          className="
          border
          border-gray-500
          text-gray-200
          px-10
          py-4
          rounded-full
          font-bold
          hover:bg-gray-200
          hover:text-black
          transition
          "
          >

            Sou Candidato

          </button>



        </div>



      </section>






      {/* Serviços */}
      <section className="
      px-10
      pb-24
      grid
      md:grid-cols-3
      gap-8
      ">



        <div className="
        bg-gradient-to-br
        from-gray-900
        to-black
        border
        border-gray-800
        p-8
        rounded-xl
        ">

          <h3 className="
          text-xl
          font-bold
          text-gray-200
          ">
            Recrutamento & Seleção
          </h3>

          <p className="
          mt-4
          text-gray-500
          ">
            Encontramos profissionais alinhados ao perfil e objetivos da sua empresa.
          </p>

        </div>





        <div className="
        bg-gradient-to-br
        from-gray-900
        to-black
        border
        border-gray-800
        p-8
        rounded-xl
        ">

          <h3 className="
          text-xl
          font-bold
          text-gray-200
          ">
            Gestão de Talentos
          </h3>

          <p className="
          mt-4
          text-gray-500
          ">
            Estratégias para desenvolvimento e crescimento profissional.
          </p>

        </div>





        <div className="
        bg-gradient-to-br
        from-gray-900
        to-black
        border
        border-gray-800
        p-8
        rounded-xl
        ">

          <h3 className="
          text-xl
          font-bold
          text-gray-200
          ">
            Consultoria em RH
          </h3>

          <p className="
          mt-4
          text-gray-500
          ">
            Soluções personalizadas para empresas que buscam resultados.
          </p>

        </div>



      </section>






      {/* Rodapé */}
      <footer className="
      border-t
      border-gray-800
      py-8
      text-center
      text-gray-600
      ">


        <p>
          CR People Solutions © 2026
        </p>


        <p className="mt-2 text-sm">
          Estratégia | Pessoas | Resultados
        </p>


      </footer>



    </main>
  );
}