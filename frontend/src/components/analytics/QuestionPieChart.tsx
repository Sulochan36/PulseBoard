import {
    PieChart,
    Pie,
    Cell,
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

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#a855f7"];

const QuestionPieChart = ({ options }: Props) => {
    return (
        <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                    <Pie
                        data={options}
                        dataKey="count"
                        nameKey="text"
                        outerRadius={100}
                        label
                    >
                        {options.map((_, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>
        </div>
    );
};

export default QuestionPieChart;