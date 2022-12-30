// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
//     type: "bar",
//     data: {
//         labels: ['col1', 'col2','col3'],
//         datasets: [{
//             label: 'Num datos',
//             data: [10, 9,15]
//         }]
//     }
// });

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1', '2', '3', '4', '5', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      datasets: [{
        label: '# of Votes',
        data: [14.4, 14, 13.4, 13.4, 9, 14.7, 18, 13.2, 11.4, 12.4, 15.4, 11.4, 13.4, 14.4, 10.4, 15.4, 11.4, 10.4, 17.4, 14.4, 15.4, 13.4, 16, 11.9, 17, 10.55, 16.7, 15.7, 11.4, 11.8, 12 ],
        borderWidth: 2, 

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