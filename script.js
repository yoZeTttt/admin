// Data Penjualan
const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Penjualan (Rp)',
        data: [3000000, 4000000, 5000000, 7000000, 8000000, 6500000, 9000000, 8500000, 10000000, 11000000, 12000000, 15000000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
        fill: true
    }]
};

// Data Keuntungan
const profitData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Keuntungan (Rp)',
        data: [1500000, 2500000, 2000000, 3500000, 4000000, 3000000, 4500000, 4200000, 5000000, 6000000, 7000000, 8000000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.3,
        fill: true
    }]
};

// Render Grafik
const salesChart = new Chart(
    document.getElementById('salesChart'),
    { type: 'line', data: salesData }
);

const profitChart = new Chart(
    document.getElementById('profitChart'),
    { type: 'line', data: profitData }
);
