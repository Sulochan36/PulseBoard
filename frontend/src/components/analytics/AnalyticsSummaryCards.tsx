interface Props {
    totalResponses: number;
    completionRate: number;
}

const AnalyticsSummaryCards = ({
    totalResponses,
    completionRate,
}: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-sm text-zinc-400">
                    Total Responses
                </h3>

                <p className="text-4xl font-bold mt-2">
                    {totalResponses}
                </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-sm text-zinc-400">
                    Completion Rate
                </h3>

                <p className="text-4xl font-bold mt-2">
                    {completionRate}%
                </p>
            </div>

        </div>
    );
};

export default AnalyticsSummaryCards;