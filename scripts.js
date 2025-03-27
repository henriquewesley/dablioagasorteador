document.addEventListener('DOMContentLoaded', function () {
  const numeroInput = document.getElementById('numero');
  const numero2Input = document.getElementById('numero2');
  const textoResultado = document.getElementById('texto-resultado');
  const numeroSorteado = document.getElementById('numero-sorteado');
  const botaoSortear = document.querySelector('.sorteio');

  botaoSortear.addEventListener('click', function () {
    const numero1 = parseInt(numeroInput.value);
    const numero2 = parseInt(numero2Input.value);

    if (isNaN(numero1) || isNaN(numero2)) {
      textoResultado.textContent = 'Por favor, digite números válidos.';
      numeroSorteado.textContent = ''; // Limpa o número sorteado anterior
      return;
    }

    if (numero2 <= numero1) {
      textoResultado.textContent = 'O segundo número deve ser maior que o primeiro.';
      numeroSorteado.textContent = ''; // Limpa o número sorteado anterior
      return;
    }

    const resultado = Math.floor(Math.random() * (numero2 - numero1 + 1)) + numero1;
    textoResultado.innerHTML = 'Número sorteado: <br><br>' + resultado;
    textoResultado.style.color = "#f28322";
  });
});