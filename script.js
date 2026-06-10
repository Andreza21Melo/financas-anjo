console.log("Finanças AnJo iniciado 🚀");

// ======================
// MÊS ATUAL
// ======================

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
// SUPABASE
// ======================

const SUPABASE_URL = "https://jrbtowspnnrblvyaaivw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyYnRvd3Nwbm5yYmx2eWFhaXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMDU4MDgsImV4cCI6MjA5NjU4MTgwOH0.W6JsYsbd9fP-RYmxP2tpcV0cfOzKIm8SLv1ljqAMHto";

const banco = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// ======================
// ELEMENTOS DA TELA
// ======================

const botao = document.querySelector(".btn-enviar");
const entrada = document.getElementById("entrada");

console.log("Botão encontrado:", botao);
console.log("Entrada encontrada:", entrada);

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
carregarHistorico();

// ======================
// NOVO LANÇAMENTO
// ======================

botao.addEventListener("click", async () => {

  const texto = entrada.value.trim();

  if (!texto) {
    alert("Digite algo.");
    return;
  }

  const partes = texto.split(" ");

  const valor = Number(
    partes.pop().replace(",", ".")
  );

  const categoria = partes.join(" ");

  const { error } = await banco
    .from("movimentacoes")
    .insert([
      {
        data: new Date().toISOString().split("T")[0],
        descricao: categoria,
        categoria: categoria,
        valor: valor,
        tipo: "Despesa"
      }
    ]);

  console.log("URL:", SUPABASE_URL);
console.log("Tamanho da chave:", SUPABASE_KEY.length);
console.log("Início da chave:", SUPABASE_KEY.substring(0, 20));

  if (error) {
    console.error(error);
    alert(`Erro ao salvar: ${error.message}`);
    return;
  }

  entrada.value = "";
  entrada.focus();
  
await carregarHistorico();
  alert("✅ Lançamento salvo!");
});

// ======================
// HISTÓRICO
// ======================

async function carregarHistorico() {

  const lista = document.getElementById(
    "lista-lancamentos"
  );

  const { data, error } = await banco
    .from("movimentacoes")
    .select("*")
    .order("data", { ascending: false })
    .limit(10);

  if (error) {
    console.error(error);
    return;
  }

  lista.innerHTML = "";

  if (data.length === 0) {

    lista.innerHTML =
      "<li>Nenhum lançamento registrado.</li>";

    return;
  }

  data.forEach(item => {

    const li = document.createElement("li");

    li.textContent =
      `${item.descricao} - R$ ${Number(item.valor).toFixed(2)}`;

    lista.appendChild(li);

  });

}
