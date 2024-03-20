"use client";
import React from "react";
import { useState, useEffect } from "react";

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <> {isClient ? <div>{children}</div> : null}</>;
}

export default ClientOnly;
