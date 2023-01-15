import http from "http";
import app from "./app.mjs";
import { PORT } from "./utils/constants.mjs";
import mongoose from "mongoose";

const dbConnection = mongoose.connection;
mongoose.set("strictQuery", false);

/**
 * Connects to MongoDB
 */
const dbConnect = async () => {
	try {
		mongoose.connect(process.env.DB_CONNECTION_STRING, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected");
	} catch (error) {
		console.error(error);
	}
};

/**
 * Starts the server
 */
(async ({ server, dbConnect }) => {
	if (dbConnection.readyState === 0) await dbConnect();
	server.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}`);
	});
})({ server: http.createServer(app), dbConnect });
