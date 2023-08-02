import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import "./pieChartBox.scss"
const data = [
    { name: 'Mobile', value: 400  , color: '#0088FE'},
    { name: 'Laptop', value: 300  , color: '#00C49F'},
    { name: 'Desktop', value: 300  , color: '#FFBB28' },
    { name: 'Tablet', value: 200  , color: '#FF8042'},
  ];

const PieChartBox = () => {
  return (
    <div className='pieChartBox'>
        <h2>Lead By Source</h2>
        <div className='pieChart'>
            <ResponsiveContainer width="99%" height={300}>
                <PieChart width={800} height={400} >
                    <Tooltip    
                        contentStyle={{}}
                        />
                    <Pie
                    data={data}
                    innerRadius="60%"
                    outerRadius="80%"
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {data.map(item => (
                        <Cell key={item.name} fill={item.color} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="options">
            {
                data.map(item=>(
                    <div className='option' key={item.name}>
                        <div className="title">
                            <div className="dot" style={{background:item.color}}/>
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PieChartBox