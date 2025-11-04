import { Calendar, Bike, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book Online",
      description: "Choose your bike and select your rental dates through our easy booking system"
    },
    {
      icon: MapPin,
      title: "Pick Up",
      description: "Visit our location to collect your bike. We'll ensure it's perfectly fitted for you"
    },
    {
      icon: Bike,
      title: "Ride & Explore",
      description: "Enjoy your adventure! Return the bike at your convenience during our opening hours"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get riding in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
