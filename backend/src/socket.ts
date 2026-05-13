import { Server } from "socket.io";
import type { Server as HttpServer } from "http";

let io: Server;

export const initSocket = (server: HttpServer) => {
    io = new Server(server, {
        cors: {
            origin: process.env.FRONTEND_URL,
            credentials: true,
        },
    });


    io.on("connection", (socket) => {
        console.log("Socket connected:", socket.id);

        socket.on("joinPollRoom", (pollId: string) => {
            console.log("JOIN ROOM:", pollId);
            socket.join(pollId);
            console.log(`Joined room: ${pollId}`);
        });

        socket.on("leavePollRoom", (pollId: string) => {
            socket.leave(pollId);
            console.log(`Left room: ${pollId}`);
        });
    


        socket.on("poll:userResponding",({pollId,username,isAnonymous,}) => {

                io.to(pollId).emit("poll:activity",
                    {
                    type: "responding",
                    message: isAnonymous ? "Someone is currently responding..." : `${username} is currently responding...`,
                    }
                );
            }
        );

        

        socket.on("poll:responseSubmitted",({pollId,username,isAnonymous,}) => {

                io.to(pollId).emit("poll:activity",
                    {
                        type: "submitted",
                        message: isAnonymous ? "Anonymous user submitted response" : `${username} submitted response`,
                    }
                );
            }
        );



        socket.on("disconnect", () => {
            console.log("Socket disconnected:", socket.id);
        });
    });

    return io;
};



export const getIO = () => {
    if (!io) throw new Error("Socket not initialized");
    return io;
};