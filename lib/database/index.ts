import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

let cached = (global as any).mongoose || { con: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!MONGODB_URL) throw Error("MONGODB_URL is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "evently",
      bufferCommands: false,
    });
  cached.conn = await cached.promis;
  return cached.conn;
};
