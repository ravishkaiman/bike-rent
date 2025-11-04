import BikeCard from "./BikeCard";
import bergman from "@/assets/c.jpg";
import dio from "@/assets/d.jpg";
import electricBike from "@/assets/electric-bike.jpg";
import navi from "@/assets/n.jpg";
import Fz from "@/assets/f.jpg";

const Fleet = () => {
  const bikes = [
    {
      name: "Suzuki Burgman",
      image: bergman,
      description: "Perfect for off-road adventures and trails",
      features: [
        "Helmets: 1 or 2",
        "First-Aid Kit: Yes",
        "24/7 Road Side Assistance: Yes",
        "Mileage: Unlimited"
        
      ],
      bikeType: "mountain"
    },
    {
      name: "DIO",
      image: dio,
      description: "Comfortable ride for urban exploration",
      features: [
        "Helmets: 1 or 2",
        "First-Aid Kit: Yes",
        "24/7 Road Side Assistance: Yes",
        "Mileage: Unlimited"
      ],
      bikeType: "city"
    },
    {
      name: "Honda Navi",
      image: navi,
      description: "Comfortable ride for urban exploration",
      features: [
        "Helmets: 1 or 2",
        "First-Aid Kit: Yes",
        "24/7 Road Side Assistance: Yes",
        "Mileage: Unlimited"
      ],
      bikeType: "city"
    },
 
    {
      name: "Yamaha FZ",
      image: Fz,
      description: "Effortless riding with electric assist",
      features: [
        "Helmets: 1 or 2",
        "Mileage: Unlimited",
        "First-Aid Kit: Yes",
        "Manual Gear"
      ],
      bikeType: "electric"
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Bike Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of quality bikes, perfect for any journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bikes.map((bike, index) => (
            <BikeCard key={index} {...bike} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
