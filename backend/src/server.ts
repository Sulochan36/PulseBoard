import http from "http";
import { createApp } from "./app.js";
import { connectDB } from "./common/config/db.js";
import { initSocket } from "./socket.js";

async function start(){
    try {
        const port = process.env.PORT || 5000;
        const uri = process.env.MONGODB_URI;

        await connectDB(uri);
        const app = createApp();
        const server = http.createServer(app);

        initSocket(server);

        server.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

start();