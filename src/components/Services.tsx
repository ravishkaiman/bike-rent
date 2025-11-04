import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "1-Hour A to Z Riding Guide",
      description:
        "Learn how to drive and practice with a coach on real traffic roads. We cover safety, controls, balance, signaling, and confidence building in one focused session.",
    },
    {
      title: "Handling Accident Situations",
      description:
        "Practical guidance on what to do after an accident: staying safe, documenting the scene, contacting support, and following the right steps calmly.",
    },
    {
      title: "What To Do If Your Bike Has a Problem",
      description:
        "Simple troubleshooting you can try on the spot and how to contact us for quick roadside assistance so you’re never stranded.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don’t just rent bikes—we help you ride with confidence and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-border h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


