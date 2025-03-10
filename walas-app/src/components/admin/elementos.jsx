"use client";

import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import dynamic from "next/dynamic";

// Importación dinámica para ApexCharts
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Configuración del gráfico de barras
const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Consultas",
      data: [34, 23, 42, 0, 0, 0, 0, 0, 0],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#10B981"],
    plotOptions: {
      bar: {
        columnWidth: "75%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    grid: {
      borderColor: "#dddddd",
      strokeDashArray: 5,
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        gradientToColors: ["#064E3B"],
        stops: [0, 100],
      },
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: (val) => `${val} consultas`,
      },
    },
  },
};

// Configuración del gráfico de anillo (donut)
const chartC = {
  type: "donut",
  height: 240,
  series: [50, 34, 16],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["Activas", "Pendientes", "Canceladas"],
    colors: ["#10B981", "#F59E0B", "#EF4444"],
    
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: "#4B5563",
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: (w) =>
                w.globals.seriesTotals.reduce((a, b) => a + b, 0),
            },
          },
        },
      },
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: (val) => `${val} consultas`,
      },
    },
  },
};

// Componente principal
function Elementos() {
  return (
<div className="grid gap-6 md:grid-cols-3">

  {/* Card de ganancias */}
  <section>
    <Card className="h-full w-full bg-white rounded-lg shadow-md flex flex-col">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="pb-0"
      >
        <h5 className="text-lg text-center font-medium text-black">
          Ganancias Totales
        </h5>
      </CardHeader>
      <CardBody className="flex-grow pt-0 p-6">
        <div className="mt-4">
          <p className="text-3xl font-bold text-gray-900">$25,340</p>
          <p className="text-sm font-medium text-gray-500">Este mes</p>
        </div>
        <div className="flex items-center mt-3 text-sm text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span className="ml-1">+15% desde el mes pasado</span>
        </div>
        <p className="mt-5 text-sm text-gray-500">
          Última actualización: 10 de marzo de 2025
        </p>
      </CardBody>
    </Card>
  </section>

  {/* Card del gráfico de anillo */}
  <section>
    <Card className="h-full w-full bg-white rounded-lg shadow-md flex flex-col">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex-grow flex flex-col gap-4"
      >
        <h5 className="text-lg text-center font-medium text-black">
          Estados de las Consultas
        </h5>
      </CardHeader>
      <CardBody className="flex-grow px-2 pb-0">
        <Chart {...chartC} />
      </CardBody>
    </Card>
  </section>

  {/* Card del gráfico de barras */}
  <section>
    <Card className="h-full w-full bg-white rounded-lg shadow-md flex flex-col">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex-grow flex flex-col content-center gap-4"
      >
         <h5 className="text-lg text-center font-medium text-black">
          Consultas
        </h5>
      </CardHeader>
      <CardBody className="flex-grow px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  </section>
</div>

  );
}

export default Elementos;
