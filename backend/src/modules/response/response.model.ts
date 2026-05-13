import mongoose, { Schema, Types, Document } from "mongoose";

export interface IAnswer {
    questionId: Types.ObjectId;

    selectedOptionId: Types.ObjectId;
}

export interface IResponse extends Document {
    pollId: Types.ObjectId;

    respondent?: Types.ObjectId | null;

    isAnonymous: boolean;

    answers: IAnswer[];

    submittedAt: Date;

    createdAt: Date;
    updatedAt: Date;
}

const AnswerSchema = new Schema<IAnswer>({
    questionId: {
        type: Schema.Types.ObjectId,
        required: true,
    },

    selectedOptionId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
});

const ResponseSchema = new Schema<IResponse>(
    {
        pollId: {
            type: Schema.Types.ObjectId,
            ref: "Poll",
            required: true,
        },

        respondent: {
            type: Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        isAnonymous: {
            type: Boolean,
            default: true,
        },

        answers: {
            type: [AnswerSchema],

            validate: {
                validator: (answers: IAnswer[]) => answers.length > 0,
                message: "At least one answer is required",
            },
        },

        submittedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

export const ResponseModel = mongoose.model<IResponse>("Response",ResponseSchema);