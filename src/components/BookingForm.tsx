import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

interface BookingFormProps {
  children: React.ReactNode;
  preselectedBike?: string;
}

const BookingForm = ({ children, preselectedBike }: BookingFormProps) => {
  const [open, setOpen] = useState(false);
  const [bikeType, setBikeType] = useState(preselectedBike ?? "");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const getValue = (id: string) => (form.querySelector(`#${id}`) as HTMLInputElement | HTMLTextAreaElement | null)?.value || "";

    const fullName = getValue("name");
    const email = getValue("email");
    const phone = getValue("phone");
    const startDate = getValue("startDate");
    const endDate = getValue("endDate");
    const notes = getValue("message");

    const selectedBike = bikeType || preselectedBike || "";
    const message = `New Bike Booking Request:%0A%0A` +
      `Name: ${fullName}%0A` +
      `Email: ${email}%0A` +
      `Phone: ${phone}%0A` +
      `Bike Type: ${selectedBike}%0A` +
      `Start Date: ${startDate}%0A` +
      `End Date: ${endDate}%0A` +
      `Notes: ${notes}`;

    const whatsappNumber = "94728687054"; // +94 728687054
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp…",
      description: "Your booking details are prefilled in the chat.",
    });

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">Book Your Bike</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" required placeholder="John Doe" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required placeholder="unawatunabikerental@gmail.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" required placeholder="+94 728687054" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bike">Bike *</Label>
            <Select required value={bikeType} onValueChange={setBikeType}>
              <SelectTrigger id="bike">
                <SelectValue placeholder="Select a bike" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Suzuki Burgman">Suzuki Burgman</SelectItem>
                <SelectItem value="DIO">DIO</SelectItem>
                <SelectItem value="Honda Navi">Honda Navi</SelectItem>
                <SelectItem value="Yamaha FZ">Yamaha FZ</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date *</Label>
              <Input id="startDate" type="date" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="endDate">End Date *</Label>
              <Input id="endDate" type="date" required />
            </div>
          </div>
          
          
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea 
              id="message" 
              placeholder="Any special requests or questions?"
              className="min-h-[80px]"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Submit Booking Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
