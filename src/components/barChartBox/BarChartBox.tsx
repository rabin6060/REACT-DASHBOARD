import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import "./barChartBox.scss"
type Props = {
    title:string,
    chartData:object[],
    dataKey:string,
    color:string
}
const BarChartBox = (props:Props) => {
  return (
    <div className='barChartBox'>
        <h2>{props.title}</h2>
        <div className="barChart">
            <ResponsiveContainer width="100%" height={150}>
                <BarChart width={150} height={40} data={props.chartData}>
                <Tooltip
                          contentStyle={{background:"#2a3447",borderRadius:"5px"}}
                          labelStyle={{display:"none"}}
                          cursor={{fill:"none"}}
                          />
                 <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox