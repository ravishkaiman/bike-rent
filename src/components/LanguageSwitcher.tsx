import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const LanguageSwitcher = () => {
  useEffect(() => {
    const scriptId = "google-translate-script";

    const initialize = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,de,fr,ru",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false
          },
          "google_translate_element"
        );
      }
    };

    window.googleTranslateElementInit = initialize;

    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      initialize();
    }
  }, []);

  return (
    <div className="fixed z-50 right-4 bottom-4 md:top-4 md:bottom-auto">
      <div
        id="google_translate_element"
        className="rounded-full bg-background/90 border border-border shadow-lg backdrop-blur px-4 py-2 text-sm"
      />
    </div>
  );
};

export default LanguageSwitcher;
