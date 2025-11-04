import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BookingForm from "./BookingForm";

interface BikeCardProps {
  name: string;
  image: string;
  description: string;
  features: string[];
  bikeType: string;
}

const BikeCard = ({ name, image, description, features, bikeType }: BikeCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border">
      <div className="relative h-64 md:h-80 overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain p-2 transition-transform duration-500 ease-out hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 ring-0 ring-transparent transition-[ring] duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <BookingForm preselectedBike={name}>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            Reserve Now
          </Button>
        </BookingForm>
      </CardFooter>
    </Card>
  );
};

export default BikeCard;
