"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("71e99e7f-eaa3-4940-b3c3-67a191c7fbdd");
  }, []);

  return null;
};
