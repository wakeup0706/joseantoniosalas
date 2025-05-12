import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

const data = [
  { name: '2024/12', Ingresos: 123, Servicios: 1232, Gastos: 232 },
  { name: '2024/11', Ingresos: 200, Servicios: 1100, Gastos: 300 },
  { name: '2024/10', Ingresos: 150, Servicios: 900, Gastos: 250 },
  { name: '2024/09', Ingresos: 180, Servicios: 950, Gastos: 280 },
];

const GroupedBarChart = () => {
  return (
    <div className='sm:px-0 px-4'>
      <div className="rounded-xl overflow-hidden p-4 mt-12 bg-[#2c2c2c]">
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <defs>
                <linearGradient id="IngresosGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#361BD0" />
                  <stop offset="100%" stopColor="#2680CD" />
                </linearGradient>
                <linearGradient id="ServiciosGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2680CD" />
                  <stop offset="100%" stopColor="#4A90E2" />
                </linearGradient>
                <linearGradient id="GastosGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4A90E2" />
                  <stop offset="100%" stopColor="#6BB5FF" />
                </linearGradient>
              </defs>
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
              <Bar dataKey="Ingresos" fill="url(#IngresosGradient)">
                <LabelList dataKey="Ingresos" position="top" fill="#fff" />
              </Bar>
              <Bar dataKey="Servicios" fill="url(#ServiciosGradient)">
                <LabelList dataKey="Servicios" position="top" fill="#fff" />
              </Bar>
              <Bar dataKey="Gastos" fill="url(#GastosGradient)">
                <LabelList dataKey="Gastos" position="top" fill="#fff" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GroupedBarChart;