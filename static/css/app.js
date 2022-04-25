const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['EfficientNetB0', 'EfficientNetB5', 'Resnet 50', 'Resnet 152', 'MobileNetV2'],
        datasets: [{
            label: 'Validation Accuracy',
            data: [98.2, 92.0, 88.09, 96.48, 93],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const al = document.getElementById('dchart');
const dcharts = new Chart(al, {
    type: 'bar',
    data: {
        labels: ['EfficientNetB0', 'EfficientNetB5', 'Resnet 50', 'Resnet 152', 'MobileNetV2'],
        datasets: [{
            label: 'Average Runtime',
            data: [180, 777, 344, 707, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const p = document.getElementById('pChart');
const pCharts = new Chart(p, {
    type: 'bar',
    data: {
        labels: ['EfficientNetB0', 'EfficientNetB5', 'Resnet 50', 'Resnet 152', 'MobileNetV2'],
        datasets: [{
            label: 'Recall',
            data: [0.80, 0.90, 0.92, 0.89,0.92 ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
             yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
        }
    }
});



const r = document.getElementById('rChart');
const rCharts = new Chart(r, {
    type: 'bar',
    data: {
        labels: ['EfficientNetB0', 'EfficientNetB5', 'Resnet 50', 'Resnet 152', 'MobileNetV2'],
        datasets: [{
            label: 'Precision',
            data: [0.86, 0.91, 0.91, 0.87,0.91 ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
              yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
        }
    }
});

// toggle view bar

// document.getElementById('content-1').className='vis';

document.getElementById('target').addEventListener('change', function () {
                    'use strict';
                    var vis = document.querySelector('.vis'),   
                    target = document.getElementById(this.value);
                    // console.log(vis.id);
                    // console.log(target.id);
                    if (vis !== null) {
                        vis.className = 'inv';
                    }
                    if (target !== null ) {
                        target.className = 'vis';
                    }
            });