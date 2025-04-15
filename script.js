// Função para simular a busca de um produto pelo ID
function fetchProductData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id < 1) {
          reject(new Error("ID do produto inválido"));
        } else {
          resolve({ id, nome: "Notebook", preco: 3500 });
        }
      }, 1500);
    });
  }
  
  // Lida com a busca do produto e exibe o resultado
  async function handleProductFetch() {
    const id = Number(document.getElementById("productId").value);
    const resultDiv = document.getElementById("productResult");
    resultDiv.innerHTML = "Buscando...";
  
    try {
      const product = await fetchProductData(id);
      resultDiv.innerHTML = `Produto: ${product.nome} - R$ ${product.preco}`;
    } catch (error) {
      resultDiv.innerHTML = `<span style="color: red;">Erro: ${error.message}</span>`;
    }
  }
  
  // Agrupa palavras de acordo com o tamanho de cada uma
  function groupWordsByLength(words) {
    const grupos = {};
    for (let palavra of words) {
      const tamanho = palavra.length;
      if (!grupos[tamanho]) {
        grupos[tamanho] = [];
      }
      grupos[tamanho].push(palavra);
    }
    return grupos;
  }
  
  // Pega as palavras digitadas, agrupa e mostra na tela
  function handleGroupWords() {
    const input = document.getElementById("wordInput").value;
    const palavras = input.split(",").map(w => w.trim()).filter(w => w !== "");
    const resultado = groupWordsByLength(palavras);
    document.getElementById("wordGroupsOutput").textContent = JSON.stringify(resultado, null, 2);
  }
  
  // Função clássica do FizzBuzz, substitui múltiplos de 3 e 5 por palavras
  function fizzBuzz(n) {
    const resultado = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        resultado.push("FizzBuzz");
      } else if (i % 3 === 0) {
        resultado.push("Fizz");
      } else if (i % 5 === 0) {
        resultado.push("Buzz");
      } else {
        resultado.push(i);
      }
    }
    return resultado;
  }
  
  // Pega o número digitado e exibe a sequência FizzBuzz
  function handleFizzBuzz() {
    const n = Number(document.getElementById("fizzBuzzInput").value);
    const output = document.getElementById("fizzBuzzOutput");
    output.innerHTML = "";
  
    if (isNaN(n) || n <= 0) {
      output.innerHTML = `<span style="color: red;">Digite um número válido.</span>`;
      return;
    }
  
    const resultado = fizzBuzz(n);
    resultado.forEach((item) => {
      const div = document.createElement("div");
      div.textContent = item;
      output.appendChild(div);
    });
  }
  
  // Calcula a soma dos quadrados de uma lista de números
  function sumOfSquares(numbers) {
    return numbers.map(n => n * n).reduce((acc, val) => acc + val, 0);
  }
  
  // Pega os números digitados, calcula e exibe o resultado
  function handleSumSquares() {
    const input = document.getElementById("numberInput").value;
    const numeros = input.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n));
    const output = document.getElementById("sumOutput");
  
    if (numeros.length === 0) {
      output.innerHTML = `<span style="color: red;">Digite números válidos separados por vírgula.</span>`;
      return;
    }
  
    const soma = sumOfSquares(numeros);
    output.textContent = `Resultado: ${soma}`;
  }
  