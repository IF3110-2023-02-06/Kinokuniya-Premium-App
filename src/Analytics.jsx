import React, { useEffect, useState } from 'react';
import StatCard from './common/components/cards/StatCard';
import { BiShoppingBag, BiDollar, BiUserCheck, BiBookAlt } from "react-icons/bi";
import Chart from './common/components/charts/Chart';
import { REST_BASE_URL } from './common/constants';
import { useNavigate } from 'react-router';
import { formatPrice } from './common/formatter';

const Analytics = () => {
    const [loading, setLoading] = useState(false);
    const [booksCreated, setBooksCreated] = useState(420);
    const [totalSubs, setTotalSubs] = useState(69);
    const [copiesSold, setCopiesSold] = useState(420);
    const [bookRevenue, setBookRevenue] = useState(420000);
    const [subRevenue, setSubRevenue] = useState(69000);

    const totalRevenue = bookRevenue + subRevenue;

    const [state, setState] = useState({
        chart: [
            { color: '#10B981', label: 'Book Revenue', value: bookRevenue },
            { color: '#6577F3', label: 'Subscription', value: subRevenue },
        ]
    });

    const navigate = useNavigate();

    const checkAuth = async () => {
		const response = await fetch(`${REST_BASE_URL}/user/check`,
		{
		  headers: {
			"Authorization": localStorage.getItem("token") ?? ""
		  }
		});

		
		if (!response.ok) {
			navigate('/login');
		}

        setLoading(false);
	};

    useEffect(() => {
		checkAuth();
	}, []);

    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/books');
        }
    });

    useEffect(() => {
        // Initialize the amount of books sold and the amount of subscribers
        const fetchStats = async () => {
            setLoading(true);
            const response = await fetch(REST_BASE_URL + "/analytics", {
                headers: {
                    "Authorization": localStorage.getItem("token") ?? ""
                }
            });

            if (!response.ok) {
                return;
            }


            const data = await response.json();

            setBooksCreated(data.data.booksCreated);
            setTotalSubs(data.data.totalSubs);
            setCopiesSold(data.data.copiesSold);
            setBookRevenue(data.data.bookRevenue);
            setSubRevenue(data.data.subRevenue);

            setState({
                chart: [
                    { color: '#10B981', label: 'Book Revenue', value: data.data.bookRevenue },
                    { color: '#6577F3', label: 'Subscription', value: data.data.subRevenue },
                ]
            });

            setLoading(false);
        }

        fetchStats();
    }, []);
    
    const stats = [
        {
            title: "Total Books Created",
            value: booksCreated,
            icon: <BiBookAlt className="text-2xl text-white" />
        },
        {
            title: "Total Revenue",
            value: formatPrice(totalRevenue),
            icon: <BiDollar className="text-2xl text-white" />
        },
        {
            title: "Total Subscribers",
            value: totalSubs,
            icon: <BiUserCheck className="text-2xl text-white" />
        },
        {
            title: "Copies Sold",
            value: copiesSold,
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
                <Chart title="Revenue Streams" state={state}/>
            </div>
        </div>
    );
}

export default Analytics;