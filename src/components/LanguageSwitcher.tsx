import { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const scriptId = "google-translate-script";

    const initialize = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,de,fr,ru",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
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

    // Hide Google Translate banner immediately
    const hideBanner = () => {
      const banner = document.querySelector('.goog-te-banner-frame');
      if (banner) {
        (banner as HTMLElement).style.display = 'none';
      }
      const body = document.body;
      if (body) {
        body.style.top = '0px';
      }
    };

    // Check periodically for banner
    const interval = setInterval(hideBanner, 100);
    hideBanner();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed z-50 top-4 right-4">
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="sm"
          className="bg-background/90 backdrop-blur border-border shadow-lg hover:bg-background"
        >
          <Languages className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Language</span>
        </Button>
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-2 min-w-[200px]">
            <div
              id="google_translate_element"
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
