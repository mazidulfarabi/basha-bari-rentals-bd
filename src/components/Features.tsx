import { Shield, Users, FileText, Headphones, MapPin, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "All properties are verified by our team to ensure authenticity and quality."
  },
  {
    icon: Users,
    title: "Trusted Network",
    description: "Connect with verified landlords, agents, and property managers across Bangladesh."
  },
  {
    icon: FileText,
    title: "Digital Documentation",
    description: "Generate lease agreements, rent receipts, and legal documents digitally."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you with any queries or issues."
  },
  {
    icon: MapPin,
    title: "Area Insights",
    description: "Get detailed information about neighborhoods, amenities, and transportation."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe and secure online rent payments with automated tracking and receipts."
  }
];

export function Features() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose BashaBari?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're revolutionizing the property rental market in Bangladesh with 
            cutting-edge technology and customer-first approach.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}