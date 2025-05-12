import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

interface PieDataItem {
  name: string;
  value: number;
}

const PieChart: React.FC = () => {
  const inputData: PieDataItem[] = [
    { name: "Salud", value: 35 },
    { name: "Servicios y Suscripciones", value: 20 },
    { name: "Auto", value: 15 },
    { name: "Comida", value: 10 },
    { name: "salud", value: 20 },
  ];

  const startColor = "#2680CD";
  const endColor = "#361BD0";

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const rgbToHex = (r: number, g: number, b: number) =>
    `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  const interpolateColor = (start: string, end: string, factor: number) => {
    const sc = hexToRgb(start);
    const ec = hexToRgb(end);
    const r = Math.round(sc.r + factor * (ec.r - sc.r));
    const g = Math.round(sc.g + factor * (ec.g - sc.g));
    const b = Math.round(sc.b + factor * (ec.b - sc.b));
    return rgbToHex(r, g, b);
  };

  const gradientData: Highcharts.PointOptionsObject[] = inputData.map(
    (item, index, arr) => {
      const factor = index / Math.max(1, arr.length - 1);
      const baseColor = interpolateColor(startColor, endColor, factor);
      return {
        name: item.name,
        y: item.value,
        color: {
          linearGradient: { x1: 0, y1: 1, x2: 0, y2: 1 },
          stops: [
            [0, baseColor],
            [1, interpolateColor(baseColor, "#000000", 0.1)],
          ],
        },
        borderColor: "#ffffff",
        borderWidth: 2,
      };
    }
  );

  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    },
    title: {
      text: "",
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: "default",
        showInLegend: false,
        borderColor: "#ffffff",
        borderWidth: 10,
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            color: "#ffffff",
            fontSize: "12px",
            fontWeight: "bold",
          },
          distance: -40,
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "",
        innerSize: "30%",
        data: gradientData,
      },
    ],
  };

  return (
    <div className="relative w-[350px] h-[350px] mx-auto">
      <div className="absolute inset-0 flex left-[130px] top-[150px]">
        <div className="w-24 h-24 rounded-full bg-white relative">
          <div className=" w-[50px] h-[50px] rounded-full border-[5px] border-primary bg-white left-[25px] top-[24px] absolute" >
            <svg width="40" height="40" viewBox="0 0 100 100">
                <path
                d="M50,50 L50,10 A40,40 0 0,1 90,50 Z"
                fill="#3B0FFF"
                />
            </svg>
          </div>
        </div>
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{
          style: { height: "100%", zIndex: 0 },
        }}
      />
    </div>
  );
};

export default PieChart;