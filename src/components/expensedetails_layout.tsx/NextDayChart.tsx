import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  value: Math.sin((i / 30) * Math.PI * 2) * 10 + 20, // mock wave
}));
const month = "Junio";

export default function NextDayChart() {
  return (
    <div className="w-full h-52 p-4 rounded-2xl bg-gradient-to-b from-blue-400 to-primary relative overflow-hidden text-white mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            tick={{ fontSize: 10, fill: "white" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "rgba(0,0,0,0.6)", border: "none" }}
            labelStyle={{ color: "white" }}
            itemStyle={{ color: "white" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="white"
            strokeWidth={6}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="absolute bottom-2 right-4 text-sm font-semibold">{month}</div>
    </div>
  );
}