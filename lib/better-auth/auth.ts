import { betterAuth } from "better-auth";
import { connectToDB } from "../mongo/mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";

// Type declaration
type AuthInstance = Awaited<ReturnType<typeof createAuth>>;

// Better-Auth singleton
let authInstance: AuthInstance | undefined = undefined;

// Private function that creates Better-Auth instance
const createAuth = async () => {
  // Awaiting database connection and get native MongoDB database
  const mongoose = await connectToDB();
  const db = mongoose.connection.db;
  if (!db) throw new Error("MongoDB connection not found");

  // Create and return the instance
  return betterAuth({
    database: mongodbAdapter(db as any),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 8,
      maxPasswordLength: 128,
    },
    plugins: [nextCookies()],
  });
};

// Public function: If instance exists, reuse it; if not, create it just once
export const getAuth = async (): Promise<AuthInstance> => {
  if (authInstance) return authInstance;
  authInstance = await createAuth();

  return authInstance;
};

export const auth = await getAuth();
