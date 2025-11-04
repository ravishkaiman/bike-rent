import { Bike } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Bike className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">Unawatuna Bike Rentals</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-background/80">© 2025 Unawatuna Bike Rentals. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
