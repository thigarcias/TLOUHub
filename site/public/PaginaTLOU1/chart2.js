// GRAFICO TODOS
const labels_todos = [
    'ELLIE',
    'JOEL',
    'TESS',
    'RILEY',
];

const todos1 = document.getElementById('todosGrafico');
const todosVetor = []

const data_todos1 = {
    labels: labels_todos,
    datasets: [{
        label: 'USUÁRIOS',
        data: todosVetor,
        backgroundColor: '#537363',
        borderColor: '#4D9672',
        borderWidth: 2
    }
    ]
};

const todos_config = {
    type: 'bar',
    data: data_todos1,
    options: {
        maintainAspectRatio: false,
        
        scales: {
            y: {
                ticks: {
                    beginAtZero: true,
                    color: 'white',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                },
            },
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'PERSONAGENS FAVORITOS DA GALERA:',
                color: 'white',
                font: {
                    size: 18,
                   
                    family: 'Montserrat Ace',
                    weight: 800
                }
              },  legend: {
                labels: {
                    color:'white',
                    font: {
                        size: 18,
                        family: 'Montserrat Ace',
                        weight: 500
                    }
                }
            }
        }
    }
};

const grafico_tudo1 = new Chart(todos1, todos_config);