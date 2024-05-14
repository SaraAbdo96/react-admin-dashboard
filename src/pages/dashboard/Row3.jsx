import { Stack, Paper, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/pieChart/Pie";
import React from "react";
import Bar from "../../pages/barChart/Bar";
import Geo from "../../pages/geography/geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={2}>
      <Paper sx={{ width: "28%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie isDashoard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" align="center" px={0.7} pb={3}>
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "400px", flexGrow: 1 }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Geography Based Traffic
        </Typography>
        <Geo isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
