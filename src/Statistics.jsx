import { PieChart } from "recharts";
import { Pie } from "recharts";
const Statistics = () => {
    const data01 = [
        {
            "name": "Babar Azam",
            "totalRun": 12000
        },
        {
            "name": "Md.Rizwan",
            "totalRun": 11000
        },
        {
            "name": "Virat Kholi",
            "totalRun": 19000
        },
        {
            "name": "Hasim Amla",
            "totalRun": 22000
        },
        {
            "name": "Tamim Iqbal",
            "totalRun": 15000
        },
        {
            "name": "Fakar Zaman",
            "totalRun": 7800
        }
    ];
    const data02 = [
        {
            "name": "Mohammod Amir",
            "wicket": 300
        },
        {
            "name": "Shain Sha Afridi",
            "wicket": 250
        },
        {
            "name": "Nasim Sha",
            "wicket": 120
        },
        {
            "name": "Haris Rauf",
            "wicket": 110
        },
        {
            "name": "Stark",
            "wicket": 250
        },
        {
            "name": "Boult",
            "wicket": 280
        }
    ];
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
            <PieChart width={730} height={250}>
                <Pie data={data01} dataKey="totalRun" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data02} dataKey="wicket" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
            </div>
        </div>
    );
};

export default Statistics;