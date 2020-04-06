import React from "react";
import { useLocation } from "react-router-dom";

export const InvalidRoute = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-center items-center mt-16 text-6xl">
      Unfortunately, there isn't any page under path {pathname}
    </div>
  );
};
