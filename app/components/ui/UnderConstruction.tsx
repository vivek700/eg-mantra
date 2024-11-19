import { Settings } from "lucide-react";
import React from "react";

const UnderConstruction = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="rounded-lg p-8 text-center">
        <Settings className="mx-auto mb-6 h-16 w-16 animate-spin text-blue-800" />

        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Under Construction
        </h1>

        <p className="mx-auto max-w-md text-gray-600">
          We&apos;re working hard to bring you something amazing. This page will
          be available soon!
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
