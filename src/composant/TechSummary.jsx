import React from "react";
import SliderContext from "./SliderContext";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const sliderNames = [
  "Composant",
  "JSX",
  "Props",
  "Cycle de vie",
  "Hooks",
  "Evènement",
  "Listes et clés",
];

const size = {
  height: 300,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: "white",
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: "3rem",
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function TechSummary() {
  const { values } = React.useContext(SliderContext);
  const average = Math.round(
    (20 * Object.values(values).reduce((a, b) => a + b, 0)) / sliderNames.length
  );
  const data = [
    { value: average, color: '#61DAFB' },
    { value: 100 - average, color: '#C9CBCC' }
  ];

  return (
    <div>
      <PieChart
        series={[{ data, innerRadius: 80 }]}
        {...size}
        slotProps={{ legend: { hidden: true } }}
      >
        <PieCenterLabel>{average}%</PieCenterLabel>
      </PieChart>
    </div>
  );
}

export default TechSummary;


