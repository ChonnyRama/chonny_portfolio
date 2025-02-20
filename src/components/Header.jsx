import React from "react";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-40 flex h-20 w-full items-center bg-gradient-to-b from-zinc-900/0">
      <div className="mx-auto w-full max-w-screen-2xl px-4">
        <h1>
          <a href="/" className="logo font-code animate-shadow-dance text-3xl">
            Chonny Martin
          </a>
        </h1>
      </div>
    </header>
  );
}
