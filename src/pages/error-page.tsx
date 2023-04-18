import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white rounded-lg shadow">
        <h1 className="text-4xl font-bold text-red-500">{error.statusText}</h1>
        <p className="mt-2 text-lg text-gray-600">{error.message}</p>
      </div>
    </div>
  );
}
