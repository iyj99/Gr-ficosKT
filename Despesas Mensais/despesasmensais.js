function valor_meses(arquivo){
  var labels_meses = Object.keys(arquivo)
  return labels_meses
}

function valor(arquivo){
  var dados_valores = Object.values(arquivo)
  return dados_valores
}

let meses = valor_meses(variavel1)

let valores = valor(variavel1)

console.log(meses)

console.log(valores)

//Código do Gráfico

const ctx = document.getElementById("myChart")

const labels = meses

const data = {
    labels,
    datasets:[{
        backgroundColor: 'rgb(2, 46, 156)',
        borderColor: 'rgb(21, 60, 234)',
        data: valores,
        label: "Despesas por Mensais"
    }]
    
}

const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        }
      }
    },
  };

  const myChart = new Chart(ctx, config)