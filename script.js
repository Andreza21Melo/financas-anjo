console.log("Finanças AnJo iniciado 🚀");

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

const hoje = new Date();

document.getElementById("mesAtual").textContent =
  `${meses[hoje.getMonth()]} ${hoje.getFullYear()}`;

// ======================
// BOTÃO DE LANÇAMENTO
// ======================

const botao = document.querySelector(".btn-enviar");
const entrada = document.getElementById("entrada");

botao.addEventListener("click", () => {

  const texto = entrada.value.trim();

  if (!texto) {
    alert("Digite algo.");
    return;
  }

  const partes = texto.split(" ");

  const valor = partes.pop();

  const categoria = partes.join(" ");

  alert(
    `Categoria: ${categoria}\nValor: ${valor}`
  );

});

// ======================
// SUPABASE
// ======================

const SUPABASE_URL = "https://jrbtowspnnrblvyaaivw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYnRvd3Nwbm5yYmx2eWFhaXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMDU4MDgsImV4cCI6MjA5NjU4MTgwOH0.W6JsYsbd9fP-RYmxP2tpcV0cfOzKIm8SLv1ljqAMHto";

const banco = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// ======================
// TESTE DE CONEXÃO
// ======================

async function testarConexao() {

  const { data, error } = await banco
    .from("categorias")
    .select("*");

  console.log("Dados:", data);
  console.log("Erro:", error);

}

testarConexao();
