import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bike.jpg";
import BookingForm from "./BookingForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Ride Your Way
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Explore the city on two wheels. Affordable bike rentals for every adventure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <BookingForm>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Book a Bike Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </BookingForm>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Fleet
          </Button>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-white/90">
          
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
