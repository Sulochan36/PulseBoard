import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

interface Props {
    options: {
        optionId: string;
        text: string;
        count: number;
        percentage: number;
    }[];
}

const QuestionBarChart = ({ options }: Props) => {
    return (
        <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={options}>

                    <XAxis dataKey="text" />
                    <YAxis />

                    <Tooltip />

                    <Bar dataKey="count" fill="#22c55e" />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default QuestionBarChart;