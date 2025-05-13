import { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

interface PhantomWindow extends Window {
  solana?: {
    connect(): Promise<{ publicKey: PublicKey }>;
    disconnect(): Promise<void>;
    isPhantom?: boolean;
    publicKey: PublicKey | null;
    isConnected: boolean;
    on(event: string, callback: (args: any) => void): void;
    off(event: string, callback: (args: any) => void): void;
  };
}

declare const window: PhantomWindow;

export const useWallet = () => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      if (window.solana?.isConnected && window.solana.publicKey) {
        setConnected(true);
        setPublicKey(window.solana.publicKey.toString());
      }
    };

    checkConnection();

    const handleConnect = (publicKey: PublicKey) => {
      setConnected(true);
      setPublicKey(publicKey.toString());
    };

    const handleDisconnect = () => {
      setConnected(false);
      setPublicKey('');
    };

    window.solana?.on("connect", handleConnect);
    window.solana?.on("disconnect", handleDisconnect);

    return () => {
      window.solana?.off("connect", handleConnect);
      window.solana?.off("disconnect", handleDisconnect);
    };
  }, []);

  const connect = async () => {
    try {
      if (!window.solana?.isPhantom) {
        window.open("https://phantom.app/", "_blank");
        return;
      }

      const response = await window.solana.connect();
      setConnected(true);
      setPublicKey(response.publicKey.toString());
      return true;
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      return false;
    }
  };

  const disconnect = async () => {
    try {
      if (window.solana) {
        await window.solana.disconnect();
        setConnected(false);
        setPublicKey('');
      }
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  return {
    connected,
    publicKey,
    connect,
    disconnect
  };
};