import React from 'react'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import "./chartBox.scss"

type Props = {
  color:string,
  title:string,
  icon:string,
  dataKey:string,
  chartData:object[],
  percentage:number,
  number:number | string,
}

const ChartBox = (props:Props) => {


  return (
    <div className='chartBox'>
        <div className="boxInfo">
            <div className="title">
                <img src={props.icon} alt="" />
                <span>{props.title}</span>
            </div>
            <h2>{props.number}</h2>
            <Link to='/' className='view' style={{color:props.color}}>
                View all
            </Link>
        </div>
        <div className="chartInfo">
            <div className="charts">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={props.chartData}>
                        <Tooltip
                          contentStyle={{background:"transparent",border:"none"}}
                          labelStyle={{display:"none"}}
                          position={{x:10,y:60}}
                          />
                        <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="texts">
                <span className="percentage" style={{color:props.percentage<0?"tomato":"limegreen"}}>{props.percentage}%</span>
                <span className="duration">this month</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox