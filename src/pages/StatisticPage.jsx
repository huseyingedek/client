import React from 'react'
import StatisticCard from '../components/statistics/StatisticCard'
import { Area } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';

const StatisticPage = () => {
    const config = {
        data: {
            type: 'fetch',
            value: 'https://assets.antv.antgroup.com/g2/aapl.json',
        },
        xField: (d) => new Date(d.date),
        yField: 'close',
    };

    const Pieconfig = {
        data: [
            { type: '分类一', value: 27 },
            { type: '分类二', value: 25 },
            { type: '分类三', value: 18 },
            { type: '分类四', value: 15 },
            { type: '分类五', value: 10 },
            { type: '其他', value: 5 },
        ],
        angleField: 'value',
        colorField: 'type',
        innerRadius: 0.6,
        label: {
            text: 'value',
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            },
        },
        annotations: [
            {
                type: 'text',
                style: {
                    text: 'AntV\nCharts',
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 40,
                    fontStyle: 'bold',
                },
            },
        ],
    };

    return (
        <>
            <div className='px-6 md:pb-0 pb-20'>
                <h1 className='text-4xl font-bold text-center mb-4'>İstatistiklerim</h1>
                <div className='statistic-section'>
                    <h2 className='text-lg'>Hoş Geldin{" "} <span className='text-green-700 text-bold text-xl'>Admin</span></h2>
                    <div className='statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4'>
                        <StatisticCard title={"Toplam Müşteri"} amout={"10"} img={"images/user.png"} />
                        <StatisticCard title={"Toplam Kazanç"} amout={"660.96 ₺"} img={"images/money.png"} />
                        <StatisticCard title={"Toplam Satış"} amout={"6"} img={"images/sale.png"} />
                        <StatisticCard title={"Toplam Ürün"} amout={"28"} img={"images/product.png"} />
                    </div>
                    <div className='flex justify-between gap-10 lg:flex-row flex-col items-center'>
                        <div className='lg:w-1/2 lg:h-full h-72 w-[100%]'>
                            <Area {...config} />
                        </div>
                        <div className='lg:w-1/2 lg:h-full h-full w-[100%]'>
                            <Pie {...Pieconfig} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatisticPage