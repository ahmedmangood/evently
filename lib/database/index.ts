import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

let cached = (global as any).mongoose || { con: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  console.log("Iam Here");
  console.log(MONGODB_URL);
  if (!MONGODB_URL) throw new Error("MONGODB_URL is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "evently",
    });

  try {
    cached.conn = await cached.promise;
    console.log("New MongoDB connection established");
    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
