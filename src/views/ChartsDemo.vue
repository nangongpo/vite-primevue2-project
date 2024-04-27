<template>
  <div class="grid p-fluid">
    <div class="col-12 md:col-6">
      <div class="card">
        <h5 class="centerText">线性图</h5>
        <Chart
          type="line"
          :data="lineData"
        />
      </div>

      <div class="card">
        <h5 class="centerText">
          饼形图
        </h5>
        <Chart
          type="pie"
          :data="pieData"
        />
      </div>

      <div class="card">
        <h5 class="centerText">
          极地面积图
        </h5>
        <Chart
          type="polarArea"
          :data="polarData"
        />
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card">
        <h5 class="centerText">
          条形图
        </h5>
        <Chart
          type="bar"
          :data="barData"
        />
      </div>

      <div class="card">
        <h5 class="centerText">
          环形图
        </h5>
        <Chart
          type="doughnut"
          :data="doughnutData"
        />
      </div>

      <div class="card">
        <h5 class="centerText">
          雷达图
        </h5>
        <Chart
          type="radar"
          :data="radarData"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#42A5F5',
            tension: 0.4
          },
          {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#FFA726',
            tension: 0.4
          }
        ]
      },
      pieData: {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['#FFC107', '#03A9F4', '#4CAF50'],
            hoverBackgroundColor: ['#FFE082', '#81D4FA', '#A5D6A7']
          }
        ]
      },
      polarData: {
        datasets: [
          {
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
              '#FFC107',
              '#03A9F4',
              '#4CAF50',
              '#E91E63',
              '#9C27B0'
            ],
            label: 'My dataset'
          }
        ],
        labels: ['Yellow', 'Blue', 'Green', 'Pink', 'Purple']
      },
      barData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#03A9F4',
            borderColor: '#03A9F4',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: '#FFC107',
            borderColor: '#FFC107',
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      doughnutData: {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['#FFC107', '#03A9F4', '#4CAF50'],
            hoverBackgroundColor: ['#FFE082', '#81D4FA', '#A5D6A7']
          }
        ]
      },
      radarData: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      }
    }
  }
}
</script>

<style scoped></style>
