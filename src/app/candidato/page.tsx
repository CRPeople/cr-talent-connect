"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Candidato() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [cargo, setCargo] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [curriculo, setCurriculo] = useState<File | null>(null);

  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);


  async function enviarCadastro(e: React.FormEvent) {

    e.preventDefault();

    setCarregando(true);
    setMensagem("");


    try {

      let curriculo_url = "";


      // Upload do currículo
      if (curriculo) {

        const nomeArquivo = `${Date.now()}-${curriculo.name}`;


        const { error: uploadError } = await supabase
          .storage
          .from("curriculos")
          .upload(nomeArquivo, curriculo);


        if (uploadError) {
          throw uploadError;
        }


        const { data } = supabase
          .storage
          .from("curriculos")
          .getPublicUrl(nomeArquivo);


        curriculo_url = data.publicUrl;

      }



      // Salvar candidato no banco

      const { error } = await supabase
        .from("candidatos")
        .insert({

          nome,
          email,
          telefone,
          cidade,
          cargo_desejado: cargo,
          experiencia,
          linkedin,
          curriculo_url

        });


      if (error) {
        throw error;
      }


      setMensagem(
        "Cadastro realizado com sucesso! A CR People Solutions entrará em contato."
      );


      setNome("");
      setEmail("");
      setTelefone("");
      setCidade("");
      setCargo("");
      setExperiencia("");
      setLinkedin("");
      setCurriculo(null);


    } catch (error) {

      console.error(error);

      setMensagem(
        "Ocorreu um erro ao enviar o cadastro. Tente novamente."
      );

    }


    setCarregando(false);

  }



  return (

    <main className="min-h-screen bg-black text-white px-6 py-16">


      <section className="max-w-4xl mx-auto">


        <div className="text-center">

          <h1 className="
          text-5xl
          font-bold
          bg-gradient-to-r
          from-white
          via-gray-400
          to-gray-700
          bg-clip-text
          text-transparent
          ">
            CR TALENT CONNECT
          </h1>


          <h2 className="
          mt-4
          text-3xl
          text-gray-200
          font-semibold
          ">
            Cadastro de Talentos
          </h2>


          <p className="
          mt-6
          text-gray-400
          text-lg
          ">
            Faça parte do nosso banco de talentos e conecte-se
            às melhores oportunidades profissionais.
          </p>

        </div>



        <div className="
        mt-12
        bg-gradient-to-br
        from-gray-900
        to-black
        border
        border-gray-800
        rounded-2xl
        p-8
        ">


          <form 
          onSubmit={enviarCadastro}
          className="grid gap-5"
          >


            <input
            className="campo"
            placeholder="Nome completo"
            value={nome}
            onChange={(e)=>setNome(e.target.value)}
            />


            <input
            className="campo"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />


            <input
            className="campo"
            placeholder="WhatsApp"
            value={telefone}
            onChange={(e)=>setTelefone(e.target.value)}
            />


            <input
            className="campo"
            placeholder="Cidade / Estado"
            value={cidade}
            onChange={(e)=>setCidade(e.target.value)}
            />


            <input
            className="campo"
            placeholder="Cargo desejado"
            value={cargo}
            onChange={(e)=>setCargo(e.target.value)}
            />


            <textarea
            className="campo"
            placeholder="Conte um pouco sobre sua experiência profissional"
            rows={5}
            value={experiencia}
            onChange={(e)=>setExperiencia(e.target.value)}
            />


            <input
            className="campo"
            placeholder="LinkedIn"
            value={linkedin}
            onChange={(e)=>setLinkedin(e.target.value)}
            />


            <input
            className="
            text-gray-300
            "
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e)=> 
              setCurriculo(
                e.target.files?.[0] || null
              )
            }
            />


            <button
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
            transition
            "
            disabled={carregando}
            >

            {carregando 
              ? "Enviando..."
              : "Enviar currículo"
            }

            </button>


          </form>


          {
            mensagem &&
            <p className="
            mt-6
            text-center
            text-gray-300
            ">
              {mensagem}
            </p>
          }


        </div>


      </section>


    </main>

  );

}