export default function Empresa() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">

      <section className="max-w-4xl mx-auto">

        <div className="text-center">

          <h1
            className="
            text-5xl
            font-bold
            bg-gradient-to-r
            from-white
            via-gray-400
            to-gray-700
            bg-clip-text
            text-transparent
            "
          >
            CR PEOPLE SOLUTIONS
          </h1>


          <h2 className="
          mt-5
          text-3xl
          text-gray-200
          font-semibold
          ">
            Soluções Estratégicas em Recursos Humanos
          </h2>


          <p className="
          mt-6
          text-gray-400
          text-lg
          ">
            Encontre os profissionais certos para sua empresa.
          </p>

        </div>



        <div
          className="
          mt-12
          border
          border-gray-800
          rounded-2xl
          p-8
          bg-gray-950
          "
        >

          <form className="grid gap-5">


            <input
              className="campo"
              placeholder="Nome da empresa"
            />


            <input
              className="campo"
              placeholder="CNPJ"
            />


            <input
              className="campo"
              placeholder="Nome do responsável"
            />


            <input
              className="campo"
              placeholder="Cargo"
            />


            <input
              className="campo"
              placeholder="E-mail corporativo"
              type="email"
            />


            <input
              className="campo"
              placeholder="WhatsApp"
            />


            <input
              className="campo"
              placeholder="Segmento da empresa"
            />


            <input
              className="campo"
              placeholder="Número de funcionários"
            />



            <select className="campo">
              <option>Necessidade de contratação</option>
              <option>Recrutamento & Seleção</option>
              <option>Estruturação de cargos e salários</option>
              <option>Diagnóstico Organizacional</option>
            </select>






            <textarea
              className="campo"
              rows={5}
              placeholder="Descrição da necessidade"
            />


            <button
              className="
              bg-gradient-to-r
              from-gray-100
              via-gray-400
              to-gray-700
              text-black
              py-4
              rounded-full
              font-bold
              "
            >
              Solicitar atendimento
            </button>


          </form>

        </div>


      </section>

    </main>
  );
}