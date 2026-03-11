"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type InitialLoadContextValue = {
  /** 本当の初回ロード中は true。1度 false になったらセッション中は二度と true にならない */
  isInitialLoad: boolean;
};

const InitialLoadContext = createContext<InitialLoadContextValue | null>(null);

export function useInitialLoad() {
  const ctx = useContext(InitialLoadContext);
  if (ctx == null) throw new Error("useInitialLoad must be used within InitialLoadProvider");
  return ctx;
}

export function InitialLoadProvider({ children }: { children: ReactNode }) {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;

    // 初回のみ：最短表示時間経過後に「初回ロード完了」とする（クライアント遷移では再表示しない）
    const minDisplayMs = 400;
    const t = setTimeout(() => setIsInitialLoad(false), minDisplayMs);
    return () => clearTimeout(t);
  }, []);

  return (
    <InitialLoadContext.Provider value={{ isInitialLoad }}>
      {children}
    </InitialLoadContext.Provider>
  );
}
