import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(127, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 43,
      },
      {
        x: "helicopter",
        y: 108,
      },
      {
        x: "boat",
        y: 121,
      },
      {
        x: "train",
        y: 102,
      },
      {
        x: "subway",
        y: 247,
      },
      {
        x: "bus",
        y: 15,
      },
      {
        x: "car",
        y: 98,
      },
      {
        x: "moto",
        y: 23,
      },
      {
        x: "bicycle",
        y: 83,
      },
      {
        x: "horse",
        y: 260,
      },
      {
        x: "skateboard",
        y: 70,
      },
      {
        x: "others",
        y: 212,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(138, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 118,
      },
      {
        x: "helicopter",
        y: 244,
      },
      {
        x: "boat",
        y: 275,
      },
      {
        x: "train",
        y: 31,
      },
      {
        x: "subway",
        y: 60,
      },
      {
        x: "bus",
        y: 56,
      },
      {
        x: "car",
        y: 154,
      },
      {
        x: "moto",
        y: 240,
      },
      {
        x: "bicycle",
        y: 72,
      },
      {
        x: "horse",
        y: 89,
      },
      {
        x: "skateboard",
        y: 1,
      },
      {
        x: "others",
        y: 247,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(175, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 171,
      },
      {
        x: "helicopter",
        y: 134,
      },
      {
        x: "boat",
        y: 186,
      },
      {
        x: "train",
        y: 64,
      },
      {
        x: "subway",
        y: 167,
      },
      {
        x: "bus",
        y: 161,
      },
      {
        x: "car",
        y: 242,
      },
      {
        x: "moto",
        y: 81,
      },
      {
        x: "bicycle",
        y: 1,
      },
      {
        x: "horse",
        y: 277,
      },
      {
        x: "skateboard",
        y: 158,
      },
      {
        x: "others",
        y: 287,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(328, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 27,
      },
      {
        x: "helicopter",
        y: 247,
      },
      {
        x: "boat",
        y: 201,
      },
      {
        x: "train",
        y: 147,
      },
      {
        x: "subway",
        y: 40,
      },
      {
        x: "bus",
        y: 149,
      },
      {
        x: "car",
        y: 277,
      },
      {
        x: "moto",
        y: 37,
      },
      {
        x: "bicycle",
        y: 230,
      },
      {
        x: "horse",
        y: 291,
      },
      {
        x: "skateboard",
        y: 267,
      },
      {
        x: "others",
        y: 42,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(319, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 15,
      },
      {
        x: "boat",
        y: 125,
      },
      {
        x: "train",
        y: 238,
      },
      {
        x: "subway",
        y: 52,
      },
      {
        x: "bus",
        y: 244,
      },
      {
        x: "car",
        y: 104,
      },
      {
        x: "moto",
        y: 233,
      },
      {
        x: "bicycle",
        y: 115,
      },
      {
        x: "horse",
        y: 269,
      },
      {
        x: "skateboard",
        y: 46,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
];

const Line = ({ isDashboard = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null : "Count",
          legendOffset: -45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
