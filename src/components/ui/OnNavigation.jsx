"use client";

import { useRouter } from "next/navigation";
import React from "react";

function OnNavigation({ children, url }) {
  const router = useRouter();
  return (
    <div
      className=" cursor-pointer"
      onClick={() => router.push(url)}
    >
      {children}
    </div>
  );
}

export default OnNavigation;
