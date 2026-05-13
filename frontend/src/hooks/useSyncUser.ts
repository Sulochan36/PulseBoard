import { useEffect } from "react";
import { syncUserAPI } from "../services/auth.service";
import { getToken, useUser } from "@clerk/react";

const useSyncUser = () => {

    const { user, isSignedIn } = useUser();

    useEffect(() => {
        if (isSignedIn && user?.id) {
            syncUser();
        }
    }, [user?.id, isSignedIn]);



    const syncUser = async () => {

        try {
            console.log("IS SIGNED IN:", isSignedIn);
            console.log("USER:", user);

            const token = await getToken();

            console.log("TOKEN:", token?.slice(0, 20));

            await syncUserAPI(
                {
                    email: user?.primaryEmailAddress?.emailAddress,
                    username: user?.fullName,
                    imageUrl: user?.imageUrl,
                },
            );

            console.log("User synced");

    }

        catch (error) {

            console.log(error);

        }
    };
};

export default useSyncUser;