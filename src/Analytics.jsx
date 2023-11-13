import React, { useEffect, useState } from 'react';
import StatCard from './common/components/cards/StatCard';
import { BiShoppingBag, BiDollar, BiUserCheck, BiBookAlt } from "react-icons/bi";
import Chart from './common/components/charts/Chart';

const Analytics = () => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        series: [65, 35],
    });

    const data = [
        { color: '#10B981', label: 'Copies Sold', percentage: state.series[0] + '%' },
        { color: '#6577F3', label: 'Subscription', percentage: state.series[1] + '%' },
    ];

    useEffect(() => {
    }, []);
    
    const stats = [
        {
            title: "Total Books Created",
            value: 200,
            icon: <BiBookAlt className="text-2xl text-white" />
        },
        {
            title: "Total Revenue",
            value: "Rp.200.000",
            icon: <BiDollar className="text-2xl text-white" />
        },
        {
            title: "Total Subscribers",
            value: 200,
            icon: <BiUserCheck className="text-2xl text-white" />
        },
        {
            title: "Copies Sold",
            value: 200,
            icon: <BiShoppingBag className="text-2xl text-white" />
        }
    ];

    if (loading) {
        return (
            <div className='h-full w-full flex-1 p-8 min-h-screen'></div>
        )
    }


    return (
        <div className="h-full w-full flex-1 p-8 min-h-screen">
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
                {
                    stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                        />
                    ))
                }
            </div>
            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <Chart title="Revenue Streams" state={state} data={data}/>
            </div>
        </div>
    );
}

export default Analytics;