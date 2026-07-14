import dotenv from "dotenv";
import dns from "node:dns";

dns.setServers(["80.58.61.250", "80.58.61.254"]);

import { connectToDB } from "@/lib/mongodb";
import mongoose from "mongoose";

dotenv.config({
  path: ".env.local",
});

const main = async () => {
  console.log("Testing connection to MongoDB Atlas...");
  console.log(process.env.MONGODB_URI);

  const { connectToDB } = await import("@/lib/mongodb");

  await connectToDB();

  console.log(mongoose.connection.readyState);

  try {
    // Check MONGODB_URI
    console.log(process.env.MONGODB_URI);
    // 1. Try to connect
    await connectToDB();

    // 2. Verify connection physical state
    if (mongoose.connection.readyState === 1) {
      console.log(`Connected to database: ${mongoose.connection.name}`);
    } else {
      console.log(
        `Unexpected connection state: ${mongoose.connection.readyState}`,
      );
    }
  } catch (error) {
    console.error("Error connecting:");
    if (error instanceof Error) {
      console.error(` Detail: ${error.message}`);
    } else {
      console.error(error);
    }
  } finally {
    // 3. Always close the process to avoid leavin the terminal hanging
    await mongoose.disconnect();
    console.log("Connection closed successfully!");
  }
};

main();
