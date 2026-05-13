import mongoose, { Schema, Types, Document } from "mongoose";

export interface IOption {
    _id?: Types.ObjectId;
    text: string;
}

export interface IQuestion {
    _id?: Types.ObjectId;
    question: string;
    required: boolean;
    options: IOption[];
}

export interface IPoll extends Document {
    title: string;
    description?: string | undefined;
    creator: Types.ObjectId;
    slug: string;
    responseMode: "anonymous" | "authenticated";
    expiresAt: Date;
    isExpired: boolean;
    isPublished: boolean;
    totalResponses: number;
    questions: IQuestion[];
    createdAt: Date;
    updatedAt: Date;
}



const OptionSchema = new Schema<IOption>({
    text: {
        type: String,
        required: true,
        trim: true,
    },
});



const QuestionSchema = new Schema<IQuestion>({
    question: {
        type: String,
        required: true,
        trim: true,
    },

    required: {
        type: Boolean,
        default: true,
    },

    options: {
        type: [OptionSchema],
        validate: {
            validator: (options: IOption[]) => options.length >= 2,
            message: "Each question must have at least 2 options",
        },
    },
});



const PollSchema = new Schema<IPoll>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            trim: true,
        },

        creator: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
        },

        responseMode: {
            type: String,
            enum: ["anonymous", "authenticated"],
            default: "anonymous",
        },

        expiresAt: {
            type: Date,
            required: true,
        },

        isExpired: {
            type: Boolean,
            default: false,
        },

        isPublished: {
            type: Boolean,
            default: false,
        },

        totalResponses: {
            type: Number,
            default: 0,
        },

        questions: {
            type: [QuestionSchema],
            validate: {
                validator: (questions: IQuestion[]) => questions.length > 0,
                message: "Poll must contain at least 1 question",
            },
        },
    },
    {
        timestamps: true,
    }
);

export const PollModel = mongoose.model<IPoll>("Poll", PollSchema);