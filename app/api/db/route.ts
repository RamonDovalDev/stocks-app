import { connectToDB } from "@/lib/mongo/mongodb";
import { success } from "better-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Attempt to connect to MongoDB
    const mongoose = await connectToDB();

    return NextResponse.json(
      {
        success: true,
        message: "Successfully connected to MongoDB!",
        database: mongoose.connection.name,
        readyState: mongoose.connection.readyState,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to connect MongoDB",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
};
