import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <main className="flex items-center justify-center my-16 mx-auto">
      <SignIn />
    </main>
  );
}
