// components/wallet-options.js
import React from 'react';
import { useConnect } from 'wagmi';

export function WalletOptions() {
  const { connectors, connect, error} = useConnect();

  return (
    <div className="flex flex-col items-center space-y-4">
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
          className="w-64 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 disabled:opacity-50"
        >
          {connector.name}
        </button>
      ))}
      {error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
}