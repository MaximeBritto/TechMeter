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
  width: 420,
  height: 320,
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
  const context = React.useContext(SliderContext);
  const values = context ? context.values : {};
  const average = Math.round(
    (20 * Object.values(values).reduce((a, b) => a + b, 0)) / sliderNames.length
  );
  const data = [
    { value: average, color: "#61DAFB" },
    { value: 100 - average, color: "#C9CBCC" },
  ];

  // Filter sliderNames to get names with values under or equal to 2
  const pointsFaibles = sliderNames.filter((name) => values[name] < 2);
  const pointsForts = sliderNames.filter((name) => values[name] > 3);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "4rem",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      <div>
        <SliderContext.Provider
          value={{ average }}
        >
          <PieChart
            series={[{ data, innerRadius: 80 }]}
            {...size}
            slotProps={{ legend: { hidden: true } }}
          >
            <PieCenterLabel>{average}%</PieCenterLabel>
          </PieChart>
        </SliderContext.Provider>
      </div>
      <div
        style={{
          border: "2px solid white",
          borderRadius: "1.5rem",
          padding: "2rem",
          width: "20rem",
        }}
      >
        <h2 style={{ color: "#61DAFB", marginBottom: "1.5rem" }}>
          Points faibles
        </h2>
        <ul>
          {pointsFaibles.map((name) => (
            <li
              key={name}
              style={{
                marginBottom: "0.5rem",
                marginLeft: "0.5rem",
                fontSize: "1.2rem",
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          border: "2px solid white",
          borderRadius: "1.5rem",
          padding: "2rem",
          width: "20rem",
          minHeight: "20rem",
        }}
      >
        <h2 style={{ color: "#61DAFB", marginBottom: "1.5rem" }}>
          Points forts
        </h2>
        <ul>
          {pointsForts.map((name) => (
            <li
              key={name}
              style={{
                marginBottom: "0.5rem",
                marginLeft: "0.5rem",
                fontSize: "1.2rem",
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TechSummary;
