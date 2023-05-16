const labels_linha = [
    'DETERMINADA',
    'CORAJOSA',
    'LEAL',
    'CARINHOSA',
];

// GRÁFICO ELLIE 
const ellie1 = document.getElementById('ellieGrafico');
const ellieVetor = [];
// A CONSTANTE ABAIXO RECEBERÁ FUTURAMENTE OS VALORES DO ARDUÍNO, ATUALMENTE SÃO VALORES MANUAIS PARA DEMOSNTRAÇÃO.
const data_ellie1 = {
    labels: labels_linha,
    datasets: [{
        label: 'USUÁRIOS',
        data: ellieVetor,
        backgroundColor: '#537363',
        borderColor: '#4D9672',
        borderWidth: 2
    }
    ]
};

const ellie_config = {
    type: 'bar',
    data: data_ellie1,
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
                text: 'ESCOLHERAM A ELLIE, POIS ELA É:',
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

const grafico_ellie1 = new Chart(ellie1, ellie_config);



// GRAFICO JOEL
const labels_joel = [
    'PROTETOR',
    'CARISMÁTICO',
    'DETERMINADO',
    'COMPASSIVO',
];

const joel1 = document.getElementById('joelGrafico');
const joelVetor = [];

const data_joel1 = {
    labels: labels_joel,
    datasets: [{
        label: 'USUÁRIOS',
        data: joelVetor,
        backgroundColor: '#537363',
        borderColor: '#4D9672',
        borderWidth: 2
    }
    ]
};

const joel_config = {
    type: 'bar',
    data: data_joel1,
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
                text: 'ESCOLHERAM O JOEL, POIS ELE É:',
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

const grafico_joel1 = new Chart(joel1, joel_config);


// GRAFICO TESS
const labels_tess = [
    'INTELIGENTE',
    'LEAL',
    'IMPLACAVEL',
    'DETERMINADA',
];

const tess1 = document.getElementById('tessGrafico');
const tessVetor = []


const data_tess1 = {
    labels: labels_tess,
    datasets: [{
        label: 'USUÁRIOS',
        data: tessVetor,
        backgroundColor: '#537363',
        borderColor: '#4D9672',
        borderWidth: 2
    }
    ]
};

const tess_config = {
    type: 'bar',
    data: data_tess1,
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
                text: 'ESCOLHERAM A TESS, POIS ELA É:',
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

const grafico_tess1 = new Chart(tess1, tess_config);


// GRAFICO RILEY
const labels_riley = [
    'AVENTUREIRA',
    'CARISMÁTICA',
    'PROTETORA',
    'CARINHOSA',
];

const riley1 = document.getElementById('rileyGrafico');
const rileyVetor = []

const data_riley1 = {
    labels: labels_riley,
    datasets: [{
        label: 'USUÁRIOS',
        data: rileyVetor,
        backgroundColor: '#537363',
        borderColor: '#4D9672',
        borderWidth: 2
    }
    ]
};

const riley_config = {
    type: 'bar',
    data: data_riley1,
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
                text: 'ESCOLHERAM A RILEY, POIS ELA É:',
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

const grafico_riley1 = new Chart(riley1, riley_config);


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