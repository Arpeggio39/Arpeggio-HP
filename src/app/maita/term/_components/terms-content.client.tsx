"use client";

import { useSyncExternalStore } from "react";

import { termsByLanguage, type TermsLanguage } from "@/data/terms";

function getPreferredLanguage(): TermsLanguage {
  const requestedLanguage = new URLSearchParams(window.location.search).get(
    "lang",
  );

  if (requestedLanguage === "ja" || requestedLanguage === "en") {
    return requestedLanguage;
  }

  return window.navigator.language.startsWith("ja") ? "ja" : "en";
}

function subscribeToNavigation(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

function getServerLanguage(): TermsLanguage {
  return "ja";
}

export function TermsContent() {
  const language = useSyncExternalStore(
    subscribeToNavigation,
    getPreferredLanguage,
    getServerLanguage,
  );
  const content = termsByLanguage[language];

  return (
    <main
      id="main-content"
      lang={language}
      className="bg-white text-miku-black"
    >
      <header className="flex flex-col items-center pt-20 tracking-display">
        <h1 className="pt-10 text-5xl font-bold">{content.title}</h1>
      </header>

      <div className="flex flex-col items-center justify-center pt-10 tracking-wide">
        <div className="w-3/5 items-center justify-center">
          <p className="pb-10 text-xl">{content.subtitle}</p>

          {content.sections.map((section) => (
            <section key={section.title} className="py-4">
              <h2 className="text-xl font-bold">{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
