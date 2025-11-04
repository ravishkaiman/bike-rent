import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Unawatuna Bike Rentals, we make it easy to explore the beautiful
            southern coast of Sri Lanka on two wheels. Whether you’re cruising the
            beach roads or heading out for a day trip, our well-maintained fleet
            and friendly service ensure a safe and comfortable ride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Quality & Safety</h3>
              <p className="text-sm text-muted-foreground">
                Every bike is regularly serviced and checked. Helmets and basic
                safety gear are included for a worry-free experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Flexible Options</h3>
              <p className="text-sm text-muted-foreground">
                Choose from scooters and motorbikes to match your style and
                comfort. Simple pickup and drop-off near Unawatuna and Thalpe North.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Local Support</h3>
              <p className="text-sm text-muted-foreground">
                We’re a local team ready to help with routes, tips, and quick
                assistance. Your smooth ride is our priority.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;


