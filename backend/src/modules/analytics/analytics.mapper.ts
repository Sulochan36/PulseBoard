export const buildAnalyticsResponse = ({
    poll,
    totalResponses,
    optionStats,
    trends,
}: any) => {

    console.log("🧠 Mapper input received");

    const map = new Map<string, Map<string, number>>();

    for (const item of optionStats) {
        const qid = item._id.questionId.toString();
        const oid = item._id.optionId.toString();

        if (!map.has(qid)) {
            map.set(qid, new Map());
        }

        map.get(qid)!.set(oid, item.count);
    }

    const questions = poll.questions.map((q: any) => {
        const qid = q._id.toString();
        const optionCounts = map.get(qid) || new Map();

        const totalForQuestion = q.options.reduce(
            (sum: number, opt: any) =>
                sum + (optionCounts.get(opt._id.toString()) || 0),
            0
        );

        const options = q.options.map((opt: any) => {
            const count = optionCounts.get(opt._id.toString()) || 0;

            return {
                optionId: opt._id,
                text: opt.text,
                count,
                percentage:
                    totalForQuestion === 0
                        ? 0
                        : Math.round((count / totalForQuestion) * 100),
            };
        });

        return {
            questionId: q._id,
            question: q.question,
            totalAnswers: totalForQuestion,
            options,
        };
    });

    return {
        poll: {
            _id: poll._id,
            title: poll.title,
            description: poll.description,
        },

        summary: {
            totalResponses,
            completionRate: 100, 
        },

        questions,

        trends,
    };
};