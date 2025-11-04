import { Bike, Facebook, Instagram, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Bike className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">Unawatuna Bike Rentals</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/94768087054"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-background/80 hover:text-background transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/unawatunabikerentals"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-background/80 hover:text-background transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
            <p className="text-background/80">© 2025 Unawatuna Bike Rentals. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
