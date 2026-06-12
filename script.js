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

entrada.addEventListener("keypress", (event) => {
  if(event.key === "Enter") {
    botao.click();
}
});

// ======================
// CATEGORIAS INTELIGENTES
// ======================

const categoriasMap = {
  "salario":{
  categoria: "Salário",
    tipo: "Receita"
  },
  
  "salário":{
  categoria: "Salário",
    tipo: "Receita"
  },

   "renda":{
  categoria: "Salário",
    tipo: "Receita"
  },

     "SALARIO":{
  categoria: "Salário",
    tipo: "Receita"
  },

   "entrada":{
  categoria: "Salário",
    tipo: "Receita"
  },

   "mercado":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

  "Mercado":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

  "MERCADO":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

  "Atacadão":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

    "atacadão":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

    "atacadao":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

    "Ayumi":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

    "ayumi":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

   "Tenda":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

  "tenda":{
  categoria: "Mercado",
    tipo: "Despesa"
  },

   "aluguel":{
  categoria: "Aluguel",
    tipo: "Despesa"
  },

  "agua":{
  categoria: "Água",
    tipo: "Despesa"
  },

  "água":{
  categoria: "Água",
    tipo: "Despesa"
  },

  "Energia":{
  categoria: "Luz",
    tipo: "Despesa"
  },

  "energia":{
  categoria: "Luz",
    tipo: "Despesa"
  },

  "Enel":{
  categoria: "Luz",
    tipo: "Despesa"
  },

   "enel":{
  categoria: "Luz",
    tipo: "Despesa"
  },

  "internet":{
  categoria: "Internet",
    tipo: "Despesa"
  },

  "wifi":{
  categoria: "Internet",
    tipo: "Despesa"
  },

   "wi-fi":{
  categoria: "Internet",
    tipo: "Despesa"
  },

  "Wi-fi":{
  categoria: "Internet",
    tipo: "Despesa"
  },

  "Wifi":{
  categoria: "Internet",
    tipo: "Despesa"
  },

    "claro":{
  categoria: "Internet",
    tipo: "Despesa"
  },

    "Claro":{
  categoria: "Internet",
    tipo: "Despesa"
  },

  "Plano":{
  categoria: "Internet",
  tipo: "Despesa"
  },

  "Uber":{
  categoria: "Transporte",
  tipo: "Despesa"
  },

  "Remédio":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

  "Remédios":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

  "remedios":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

   "remédios":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

  "farmacia":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

   "farmácia":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

  "Farmácia":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

  "Anticoncepcional":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

    "dentista":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

  "Dentista":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

  "Plano odontológico":{
  categoria: "Saúde",
  tipo: "Despesa"
  },

  "Curso":{
  categoria: "Estudos",
  tipo: "Despesa"
  },

  "estudos":{
  categoria: "Estudos",
  tipo: "Despesa"
  },

  "curso":{
  categoria: "Estudos",
  tipo: "Despesa"
  },

  "Alura":{
  categoria: "Estudos",
  tipo: "Despesa"
  },

  "Curso Alura":{
  categoria: "Estudos",
  tipo: "Despesa"
  },

  "Roupas":{
  categoria: "Roupa/Calçado",
  tipo: "Despesa"
  },

  "Shopping":{
  categoria: "Roupa/Calçado",
  tipo: "Despesa"
  },

  "Calça":{
  categoria: "Roupa/Calçado",
  tipo: "Despesa"
  },

   "cosmeticos":{
  categoria: "Cosméticos",
  tipo: "Despesa"
  },

  "Dívida":{
  categoria: "Cartão de crédito",
  tipo: "Despesa"
  },

  "Empréstimo":{
  categoria: "Cartão de crédito",
  tipo: "Despesa"
  },

  "Fatura":{
  categoria: "Cartão de crédito",
  tipo: "Despesa"
  },

   "Cinema":{
  categoria: "Lazer",
  tipo: "Despesa"
  },

  "cinema":{
  categoria: "Lazer",
  tipo: "Despesa"
  },

  "restaurante":{
  categoria: "Lazer",
  tipo: "Despesa"
  },

  "Restaurante":{
  categoria: "Lazer",
  tipo: "Despesa"
  },

  "BK":{
  categoria: "Lazer",
  tipo: "Despesa"
  },
  
  "bk":{
  categoria: "Lazer",
  tipo: "Despesa"
  },

    "Almoço":{
  categoria: "Lazer",
  tipo: "Despesa"
  },

  "Lanche":{
  categoria: "Lazer",
  tipo: "Despesa"
  },

  "Pizza":{
  categoria: "Lazer",
  tipo: "Despesa"
  },

    "pizza":{
  categoria: "Lazer",
  tipo: "Despesa"
  },

};

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
carregarSaldo();

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

  const textoNormalizado =
    categoria.toLowerCase();

  const categoriaEncontrada =
    categoriasMap[textoNormalizado];

  let categoriaFinal = categoria
  let tipoFinal = "Despesa";

  if (categoriaEncontrada) {

    categoriaFinal =
      categoriaEncontrada.categoria;

    tipoFinal =
      categoriaEncontrada.tipo;
  }

  const { error } = await banco
    .from("movimentacoes")
    .insert([
      {
        data: new Date().toISOString().split("T")[0],
        descricao: categoriaFinal,
        categoria: categoriaFinal,
        valor: valor,
        tipo: tipoFinal
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
await carregarSaldo();
  
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

li.classList.add("item-historico");

 let icone = "📌";

    switch (item.categoria) {

  case "Mercado":
    icone = "🛒";
    break;

  case "Salário":
    icone = "💰";
    break;

  case "Internet":
    icone = "🌐";
    break;

  case "Saúde":
    icone = "💊";
    break;

  case "Transporte":
    icone = "🚗";
    break;

  case "Lazer":
    icone = "🎉";
    break;

  case "Estudos":
    icone = "📚";
    break;

  case "Cosméticos":
    icone = "💄";
    break;

  case "Roupa/Calçado":
    icone = "👕";
    break;

  case "Cartão de Crédito":
    icone = "💳";
    break;

  case "Reserva de Emergência":
    icone = "🛟";
    break;

  case "Investimentos":
    icone = "📈";
    break;

 case "Renda Extra":
    icone = "💵";
    break;

    case "Outros":
    icone = "📦";
    break;

    case "Água":
    icone = "🚿";
    break;

     case "Luz":
    icone = "💡";
    break;     

    }
    

li.innerHTML = `
  <span class="historico-descricao">
    ${icone} ${item.descricao}
  </span>

  <span class="historico-valor">
    ${Number(item.valor).toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    )}
  </span>
`;

lista.appendChild(li);
    
  });

}

async function carregarSaldo() {

  const { data, error } = await banco
    .from("movimentacoes")
    .select("*");

  if (error) {
    console.error(error);
    return;
  }

  let receitas = 0;
  let despesas = 0;
  let transferencias = 0;

  data.forEach(item => {

    if (item.tipo === "Receita") {
      receitas += Number(item.valor);
    }

    if (item.tipo === "Despesa") {
      despesas += Number(item.valor);
    }

    if(item.tipo === "Transferência"){
      transferencias += Number(item.valor);
    }

  });

  const saldo = receitas - despesas;

    document.getElementById("total-receitas")
    .textContent =
    receitas.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    );

    document.getElementById("total-despesas")
    .textContent =
    despesas.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    );

    document.getElementById("total-transferencias")
    .textContent =
    transferencias.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    );

  const saldoElemento =
  document.getElementById("saldo");
  
  saldoElemento.textContent =
    saldo.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL"
      }
    );
  if (saldo <0) {
    saldoElemento.style.color=
      "red";
  } else {
    saldoElemento.style.color=
      "";
  }

}
