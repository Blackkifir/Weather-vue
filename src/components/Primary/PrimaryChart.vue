<template>
  <div class="chart_container">
    <div class="chart_flex">
      <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 0.5,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#FFFFFF',
              usePointStyle: true,
              pointStyle: 'circle',
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.5)'
            },
            ticks: {
              color: '#FFFFFF'
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.5)'
            },
            ticks: {
              color: '#FFFFFF'
            }
          }
        },
      }
    }
  },
  computed: {
    ...mapState({
      items: state => state.weather.items,
    }),
  },
  mounted() {
    this.updateChartData();
  },
  methods: {
    updateChartData() {
      if (this.items && this.items.list) {
        const labels = this.items.list
          .map(item => new Date(item.dt * 1000)
          .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

        const temperatures = this.items.list
          .map(item => item.main.temp - 273.15);

        this.chartData = {
          labels,
          datasets: [{
            label: 'Temperature (°C)',
            data: temperatures,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            borderRadius: 5,
          }]
        };
      }
    },
    clickChecked() {
      console.log(this.items);
    }
  }
}
</script>

<style scoped>
.chart_container {
  overflow-x: auto;
}

.chart_flex {
  min-width: 800px;
}
</style>