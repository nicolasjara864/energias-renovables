// Datos actualizados a 2023 (Fuentes: IRENA, IEA, BP Statistical Review)
document.addEventListener('DOMContentLoaded', function() {
    // Gráfica 1: Crecimiento global de energías renovables
    const ctx1 = document.getElementById('globalGrowthChart').getContext('2d');
   new Chart(ctx1, {
        type: 'line',
        data: {
            labels: Array.from({length: 19}, (_, i) => 2004 + i),
            datasets: [
                {
                    label: 'Capacidad Instalada Total (GW)',
                    data: [800, 850, 900, 1000, 1100, 1230, 1380, 1560, 1770, 1980, 2210, 2450, 2720, 3060, 3370, 3730, 4110, 4530, 5000],
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Crecimiento Global de Energías Renovables (2004-2023)',
                    font: {
                        size: 18
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Capacidad Instalada (GW)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Año'
                    }
                }
            }
        }
    });

    // Gráfica 2: Distribución por tipo de energía renovable (2023)
    const ctx2 = document.getElementById('renewableShareChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Hidroeléctrica', 'Eólica', 'Solar', 'Biomasa', 'Geotérmica', 'Otras'],
            datasets: [{
                data: [40, 28, 25, 4, 2, 1],
                backgroundColor: [
                    '#3498db',
                    '#2ecc71',
                    '#f1c40f',
                    '#e67e22',
                    '#e74c3c',
                    '#9b59b6'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución de Energías Renovables Global (2023)',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'right'
                }
            }
        }
    });

    // Gráfica 3: Comparación por países líderes
    const ctx3 = document.getElementById('countryComparisonChart').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['China', 'EE.UU.', 'Alemania', 'India', 'Japón', 'Brasil', 'Reino Unido', 'España'],
            datasets: [{
                label: 'Capacidad Instalada (GW)',
                data: [1200, 350, 150, 140, 100, 95, 75, 70],
                backgroundColor: [
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(155, 89, 182, 0.7)',
                    'rgba(230, 126, 34, 0.7)',
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(26, 188, 156, 0.7)',
                    'rgba(241, 196, 15, 0.7)',
                    'rgba(52, 73, 94, 0.7)'
                ],
                borderColor: [
                    'rgba(46, 204, 113, 1)',
                    'rgba(52, 152, 219, 1)',
                    'rgba(155, 89, 182, 1)',
                    'rgba(230, 126, 34, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(26, 188, 156, 1)',
                    'rgba(241, 196, 15, 1)',
                    'rgba(52, 73, 94, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Países Líderes en Energías Renovables (2023)',
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Capacidad Instalada (GW)'
                    }
                }
            }
        }
    });

    // Gráfica 4: Reducción de costos
    const ctx4 = document.getElementById('costTrendChart').getContext('2d');
    new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
            datasets: [
                {
                    label: 'Solar Fotovoltaica (USD/kWh)',
                    data: [0.36, 0.25, 0.18, 0.12, 0.08, 0.05, 0.04],
                    borderColor: '#f1c40f',
                    backgroundColor: 'rgba(241, 196, 15, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'Eólica Terrestre (USD/kWh)',
                    data: [0.08, 0.07, 0.06, 0.05, 0.04, 0.04, 0.03],
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Reducción de Costos de Generación Renovable (2010-2022)',
                    font: {
                        size: 18
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Costo Nivelado de Energía (USD/kWh)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Año'
                    }
                }
            }
        }
    });
});