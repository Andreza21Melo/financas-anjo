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
