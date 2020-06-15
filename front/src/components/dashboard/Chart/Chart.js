import React, { Fragment } from 'react';
import Title from './../../common/title/Title';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { useTheme } from '@material-ui/core/styles';


const createData = (day, amount) => {
  return { day, amount }
}

const data = [
  createData('06-10', 5),
  createData('06-11', 4),
  createData('06-12', 3),
  createData('06-13', 5),
  createData('06-14', 7),
  createData('06-15', 1),
  createData('06-16', 10),
]

const Chart = () => {

  const theme = useTheme();

  console.log(`Chart Render....`);
  return (
    <Fragment>
      <Title>일별 공부 카드</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="day" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary} />
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Fragment>
  )
}

export default Chart;