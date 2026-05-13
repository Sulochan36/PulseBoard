import { useEffect } from "react";
import { syncUserAPI } from "../services/auth.service";
import { useUser } from "@clerk/react";

const useSyncUser = () => {

    const { user, isSignedIn } = useUser();

    useEffect(() => {
        if (isSignedIn && user?.id) {
            syncUser();
        }
    }, [user?.id, isSignedIn]);



    const syncUser = async () => {

        try {
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