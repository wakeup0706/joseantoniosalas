import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '', value: 55 },
  { name: 'JAN', value: 45 },
  { name: 'FEB', value: 65 },
  { name: 'MAR', value: 5 },
  { name: 'APR', value: 63 },
  { name: 'MAY', value: 50 },
  { name: 'JUN', value: 60 },
  { name: 'JUL', value: 70 },
  { name: 'AUG', value: 85 },
  { name: 'SEP', value: 30 },
  { name: 'OCT', value: 65 },
  { name: 'NOV', value: 38 },
  { name: 'DEC', value: 54 },
  { name: '', value: 38 },
];

const CustomLineChart = () => {
  return (
    <div className="rounded-xl overflow-hidden p-4" style={{ backgroundColor: '#2c2c2c' }}>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid vertical={false} strokeOpacity={0.1} />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#333',
                border: 'none',
                color: 'white',
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00FFFF"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomLineChart;
