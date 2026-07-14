import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please, define the MONGODB_URI variable.");
}

// Cache the MongoDB connection across Hot Reloads in development.
type CachedConnection = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: CachedConnection | undefined;
}

const cached =
  globalThis.mongooseCache ??
  (globalThis.mongooseCache = { conn: null, promise: null });

export const connectToDB = async (): Promise<typeof mongoose> => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }

  try {
    const connection = await cached.promise;
    cached.conn = connection;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  console.log(
    `Successfully connected to database in ${process.env.NODE_ENV} mode`,
  );

  return cached.conn;
};
