import User from "../modules/user/user.model.js";

export const getMongoUser = async (clerkId: string | null) => {
    const user = await User.findOne({ clerkId });

    if (!user) {
        throw new Error("User not found");
    }

    return user;
};