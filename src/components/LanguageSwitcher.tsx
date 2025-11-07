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
      try {
        // Hide all possible banner elements
        const banners = document.querySelectorAll('.goog-te-banner-frame, iframe.goog-te-banner-frame, .goog-te-banner, #google_translate_element iframe');
        banners.forEach((banner) => {
          if (banner instanceof HTMLElement) {
            banner.style.display = 'none';
            banner.style.visibility = 'hidden';
            banner.style.opacity = '0';
            banner.style.height = '0';
            banner.style.width = '0';
          }
        });
        
        // Prevent body shift
        if (document.body) {
          document.body.style.top = '0px';
          document.body.style.position = 'relative';
        }
        
        if (document.documentElement) {
          document.documentElement.style.marginTop = '0px';
        }
      } catch (error) {
        // Silently handle any errors
        console.error('Error hiding banner:', error);
      }
    };

    // Use MutationObserver to catch dynamically added banners
    let observer: MutationObserver | null = null;
    let interval: NodeJS.Timeout | null = null;

    try {
      if (document.body) {
        observer = new MutationObserver(hideBanner);
        observer.observe(document.body, { childList: true, subtree: true });

        // Check periodically for banner
        interval = setInterval(hideBanner, 100);
        hideBanner();
      } else {
        // Wait for body to be ready
        const checkBody = setInterval(() => {
          if (document.body) {
            clearInterval(checkBody);
            observer = new MutationObserver(hideBanner);
            observer.observe(document.body, { childList: true, subtree: true });
            interval = setInterval(hideBanner, 100);
            hideBanner();
          }
        }, 50);
        
        return () => {
          clearInterval(checkBody);
          if (interval) clearInterval(interval);
          if (observer) observer.disconnect();
        };
      }
    } catch (error) {
      console.error('Error setting up banner hiding:', error);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (observer) observer.disconnect();
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
