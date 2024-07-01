import mongoose from "mongoose";

const MONGODB_URL =
  process.env.MONGODB_URL ||
  "mongodb+srv://mangood:mangood1907@cluster1.yfodu0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

let cached = (global as any).mongoose || { con: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!MONGODB_URL) throw Error("MONGODB_URL is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "evently",
      bufferCommands: false,
    });

  try {
    cached.conn = await cached.promise;
    console.log("New MongoDB connection established");
    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }

  // cached.promise =
  //   cached.promise ||
  //   mongoose.connect(MONGODB_URL, {
  //     dbName: "evently",
  //     bufferCommands: false,
  //   });
  // cached.conn = await cached.promis;
  // return cached.conn;
};
