import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/react";
import { syncUserAPI } from "../services/auth.service";

const useSyncUser = () => {

    const { user, isSignedIn } = useUser();

    const {getToken} = useAuth();

    useEffect(() => {
        if (isSignedIn && user?.id) {
            syncUser();
        }
    }, [user?.id, isSignedIn]);



    const syncUser = async () => {

        try {
            const token = await getToken()
            await syncUserAPI(
                {
                    email: user?.primaryEmailAddress?.emailAddress,
                    username: user?.fullName,
                    imageUrl: user?.imageUrl,
                },
                token || ""
            );

            console.log("User synced");

    }

        catch (error) {

            console.log(error);

        }
    };
};

export default useSyncUser;