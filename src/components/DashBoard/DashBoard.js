import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Funnel, FunnelChart, LabelList, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import './DashBoard.css'; 


const DashBoard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div className='rechart'>
            <LineChart className='lineChart' width={400} height={500} data={data}>
                <Line dataKey={'investment'}></Line>
                <XAxis dataKey={'revenue'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>

            <BarChart className='lineChart' width={400} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'revenue'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                <Bar dataKey={'investment'}></Bar>
            </BarChart>

            <ComposedChart width={730} height={250} data={data}>
                <XAxis dataKey="investment" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="month" barSize={20} fill="#413ea0" />
                <Line type="sell" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default DashBoard;