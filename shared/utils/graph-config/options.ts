import { Chart, ChartOptions } from 'chart.js';

/**
 * 자산 증가 막대 그래프 옵션
 */
export const increaseMyAssetOptions: ChartOptions<'bar'> = {
  responsive: true,
  scales: {
    y: {
      display: false
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        padding: 5
      }
    }
  },
  plugins: {
    legend: { display: false },
    title: { display: false }
  }
};

/**
 * 나의 신용점수 도넛 그래프 옵션 (반원)
 */
export const myCreditScoreGraphOptions: ChartOptions<'doughnut'> = {
  rotation: -90,
  circumference: 180,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      filter: (tooltip) => tooltip.dataIndex === 0,
      callbacks: {
        label: (item) => {
          const count = item.dataset.data[0];
          return `${count}점`;
        }
      }
    },

    filler: {
      drawTime: 'beforeDraw'
    }
  }
};

/**
 * 자산 도넛 그래프 옵션
 */
export const myAssetsOptions: ChartOptions<'doughnut'> = {
  animation: { animateScale: true },
  maintainAspectRatio: false,
  layout: {
    autoPadding: true,
    padding: { left: 25 }
  },
  plugins: {
    legend: {
      fullSize: true,
      position: 'left',
      align: 'center',
      labels: {
        padding: 10,
        usePointStyle: true,
        boxPadding: 20,
        boxWidth: 20,
        boxHeight: 8,
        pointStyle: 'circle',
        font: {
          size: 12
        }
      }
    }
  }
};

/**
 *
 * 신용점수 그래프 그라디언트 옵션 함수
 */
export const getGradient = (chart: Chart, hover: boolean) => {
  const {
    ctx,
    chartArea: { left, right }
  } = chart;
  const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
  if (hover) {
    gradientSegment.addColorStop(0, '#ffbd94');
    gradientSegment.addColorStop(1, '#ff4d00');
    return gradientSegment;
  }
  gradientSegment.addColorStop(0, '#ffcdae');
  gradientSegment.addColorStop(1, '#ff6809');
  return gradientSegment;
};
