import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Green Corner Villa Unawatuna",
      subContent: "Thalpe North"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+94 728687054",
      subContent: "Mon-Sun: 8am - 8pm"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "unawatunabikerental@gmail.com",
      subContent: "We reply within 24hrs"
    },
    {
      icon: Send,
      title: "Chat on Telegram",
      content: "@unawatunabikerent",
      subContent: "Join our Telegram channel"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      content: "Monday - Sunday",
      subContent: "8:00 AM - 8:00 PM"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you start your cycling adventure
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const isVisitUs = info.title === "Visit Us";
            const isCallUs = info.title === "Call Us";
            const isEmailUs = info.title === "Email Us";
            const isTelegram = info.title === "Chat on Telegram";
            const mapUrl = "https://maps.app.goo.gl/BSkmSX9cyBGY2oxk8";
            const telUrl = "tel:+94728687054";
            const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=unawatunabikerental@gmail.com";
            const telegramUrl = "https://t.me/unawatunabikerent";
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                {isVisitUs ? (
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground text-sm mb-1">{info.content}</p>
                      <p className="text-muted-foreground text-xs">{info.subContent}</p>
                    </CardContent>
                  </a>
                ) : isCallUs ? (
                  <a href={telUrl}>
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground text-sm mb-1">{info.content}</p>
                      <p className="text-muted-foreground text-xs">{info.subContent}</p>
                    </CardContent>
                  </a>
                ) : isEmailUs ? (
                  <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground text-sm mb-1">{info.content}</p>
                      <p className="text-muted-foreground text-xs">{info.subContent}</p>
                    </CardContent>
                  </a>
                ) : isTelegram ? (
                  <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground text-sm mb-1">{info.content}</p>
                      <p className="text-muted-foreground text-xs">{info.subContent}</p>
                    </CardContent>
                  </a>
                ) : (
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{info.content}</p>
                    <p className="text-muted-foreground text-xs">{info.subContent}</p>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
