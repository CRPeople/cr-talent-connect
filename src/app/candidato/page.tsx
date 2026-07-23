"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Candidato() {

  const [arquivo, setArquivo] = useState<File | null>(null);
  const [mensagem, setMensagem] = useState("");
  const [enviando, setEnviando] = useState(false);


  async function enviarCurriculo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEnviando(true);
    setMensagem("Enviando currículo...");


    const form = e.currentTarget;


    const nome = (form.nome as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const telefone = (form.telefone as HTMLInputElement).value;
    const cidade = (form.cidade as HTMLInputElement).value;
    const cargo = (form.cargo as HTMLInputElement).value;
    const experiencia = (form.experiencia as HTMLTextAreaElement).value;
    const linkedin = (form.linkedin as HTMLInputElement).value;


    let curriculo_url = "";


    // Upload do currículo
    if (arquivo) {

      const nomeArquivo =
        `${Date.now()}-${arquivo.name}`;


      const { error: uploadError } =
        await supabase.storage
          .from("curriculos")
          .upload(nomeArquivo, arquivo);



      if (uploadError) {

        console.log("ERRO UPLOAD:", uploadError);

        setMensagem(
          "Erro no upload: " + uploadError.message
        );

        setEnviando(false);

        return;
      }



      const { data } =
        supabase.storage
          .from("curriculos")
          .getPublicUrl(nomeArquivo);



      curriculo_url = data.publicUrl;

    }



    // Salvar candidato no banco
    const { error } =
      await supabase
        .from("candidatos")
        .insert([
          {
            nome,
            email,
            telefone,
            cidade,
            cargo_desejado: cargo,
            experiencia,
            linkedin,
            curriculo_url
          }
        ]);



    if (error) {

      console.log("ERRO BANCO:", error);

      setMensagem(
        "Erro ao cadastrar: " + error.message
      );


    } else {


      setMensagem(
        "Currículo enviado com sucesso! Obrigado por participar."
      );


      form.reset();

      setArquivo(null);

    }


    setEnviando(false);

  }



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
            CR TALENT CONNECT
          </h1>


          <h2
            className="
            mt-4
            text-3xl
            text-gray-200
            font-semibold
            "
          >
            Cadastro de Talentos
          </h2>


          <p
            className="
            mt-6
            text-gray-400
            text-lg
            "
          >
            Faça parte do nosso banco de talentos e conecte-se às melhores oportunidades profissionais.
          </p>


        </div>



        <div
          className="
          mt-12
          bg-gradient-to-br
          from-gray-900
          to-black
          border
          border-gray-800
          rounded-2xl
          p-8
          "
        >


          <form
            onSubmit={enviarCurriculo}
            className="grid gap-5"
          >


            <input
              name="nome"
              required
              placeholder="Nome completo"
              className="bg-black border border-gray-700 rounded-lg px-5 py-4 text-white"
            />


            <input
              name="email"
              required
              type="email"
              placeholder="E-mail"
              className="bg-black border border-gray-700 rounded-lg px-5 py-4 text-white"
            />


            <input
              name="telefone"
              placeholder="WhatsApp"
              className="bg-black border border-gray-700 rounded-lg px-5 py-4 text-white"
            />


            <input
              name="cidade"
              placeholder="Cidade / Estado"
              className="bg-black border border-gray-700 rounded-lg px-5 py-4 text-white"
            />


            <input
              name="cargo"
              placeholder="Cargo desejado"
              className="bg-black border border-gray-700 rounded-lg px-5 py-4 text-white"
            />


            <input
              name="linkedin"
              placeholder="LinkedIn"
              className="bg-black border border-gray-700 rounded-lg px-5 py-4 text-white"
            />


            <textarea
              name="experiencia"
              rows={5}
              placeholder="Conte um pouco sobre sua experiência profissional"
              className="bg-black border border-gray-700 rounded-lg px-5 py-4 text-white"
            />


            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                setArquivo(
                  e.target.files?.[0] || null
                )
              }
              className="text-gray-300"
            />


            <button
              disabled={enviando}
              className="
              mt-4
              bg-gradient-to-r
              from-gray-100
              via-gray-400
              to-gray-700
              text-black
              font-bold
              py-4
              rounded-full
              hover:opacity-80
              "
            >

              {enviando
                ? "Enviando..."
                : "Enviar currículo"
              }

            </button>


          </form>


          {mensagem && (

            <p
              className="
              mt-6
              text-center
              text-gray-300
              "
            >
              {mensagem}
            </p>

          )}


        </div>


      </section>


    </main>

  );

}