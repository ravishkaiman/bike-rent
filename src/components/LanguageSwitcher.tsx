import { useEffect, useState, useRef } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

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

    // Hide Google Translate banner immediately and continuously
    const hideBanner = () => {
      // Hide all possible banner elements
      const banners = document.querySelectorAll('.goog-te-banner-frame, iframe.goog-te-banner-frame, .goog-te-banner, #google_translate_element iframe');
      banners.forEach((banner) => {
        (banner as HTMLElement).style.display = 'none';
        (banner as HTMLElement).style.visibility = 'hidden';
        (banner as HTMLElement).style.opacity = '0';
        (banner as HTMLElement).style.height = '0';
        (banner as HTMLElement).style.width = '0';
      });
      
      // Prevent body shift
      const body = document.body;
      if (body) {
        body.style.top = '0px';
        body.style.position = 'relative';
      }
      
      const html = document.documentElement;
      if (html) {
        html.style.marginTop = '0px';
      }
    };

    // Use MutationObserver to catch dynamically added banners
    const observer = new MutationObserver(hideBanner);
    observer.observe(document.body, { childList: true, subtree: true });

    // Check periodically for banner
    const interval = setInterval(hideBanner, 100);
    hideBanner();

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed z-50 top-4 right-4" ref={dropdownRef}>
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
          <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-3 min-w-[200px] z-50">
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
