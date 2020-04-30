import React from "react";
import { AreaChart } from "reaviz";

const MyChart = () => (
  <AreaChart
    height={350}
    width={500}
    data={[
      { key: new Date("11/29/2019"), data: 5 },
      { key: new Date("11/30/2019"), data: 20 },
      { key: new Date("12/1/2019"), data: 1 },
      { key: new Date("12/2/2019"), data: 28 },
      { key: new Date("12/3/2019"), data: 14 },
      { key: new Date("12/4/2019"), data: 19 },
    ]}
  />
);

export default MyChart;
