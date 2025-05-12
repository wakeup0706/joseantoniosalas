import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import VariablePie from 'highcharts/modules/variable-pie';
if (typeof VariablePie === 'function') {
  VariablePie(Highcharts);
}

// Define gradient colors
const gradientColors = [
  {
    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
    stops: [
      [0, '#1CBDCA'], // Start color
      [1, '#361BD0'], // End color
    ],
  },
  {
    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
    stops: [
      [0, '#361BD0'], // Start color
      [1, '#2B60CD'], // End color
    ],
  },
  {
    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
    stops: [
      [0, '#2B60CD'], // Start color
      [1, '#1CBDCA'], // End color
    ],
  },
  {
    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
    stops: [
      [0, '#1CBDCA'], // Start color
      [1, '#2B60CD'], // End color
    ],
  },
  // Red-to-Green gradients
  {
    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
    stops: [
      [0, '#FF0000'], // Start color (Red)
      [1, '#00FF00'], // End color (Green)
    ],
  },
  {
    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
    stops: [
      [0, '#FF6347'], // Start color (Tomato Red)
      [1, '#32CD32'], // End color (Lime Green)
    ],
  },
];

const options = {
  chart: {
    type: 'variablepie',
  },
  title: {
    text: 'Highcharts Variable Pie Chart',
  },
  tooltip: {
    headerFormat: '',
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> <b>{point.name}</b><br/>' +
      'Area (y): <b>{point.y}</b><br/>' +
      'Radius (z): <b>{point.z}</b><br/>',
  },
  series: [
    {
      minPointSize: 30,
      innerSize: '25%',
      zMin: 0,
      name: 'countries',
      data: [
        { name: '30%', y: 30, z: 92.9, color: gradientColors[0] },
        { name: '15%', y: 15, z: 118.7, color: gradientColors[1] },
        { name: '45%', y: 45, z: 124.6, color: gradientColors[2] },
        { name: '50%', y: 50, z: 101.5, color: gradientColors[3] },
        { name: 'Red-Green 1', y: 20, z: 80, color: gradientColors[4] },
        { name: 'Red-Green 2', y: 25, z: 90, color: gradientColors[5] },
      ],
    },
  ],
};

const VariablePieChart = () => {
  return (
  <div className='bg-white p-4'>
    <HighchartsReact highcharts={Highcharts} options={options} />
    <p className='border-t-2 border-ct-grey text-center sm:mx-20 py-1 sm:py-3'>$7.500 x Gastos</p>
    <button className="mx-auto bg-primary text-white font-semibold px-12 py-2 mb-3 rounded-full hover:bg-hoverColor transition block">Ver todo el presupuesto</button>
  </div>
  );
};

export default VariablePieChart;