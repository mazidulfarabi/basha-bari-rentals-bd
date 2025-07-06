import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, Building } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful properties in Bangladesh" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-warning">
              BashaBari
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Bangladesh's most trusted platform for renting and buying properties. 
            Connect with verified landlords, agents, and find your dream home today.
          </p>

          {/* Search Form */}
          <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-elegant max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Enter location (e.g., Dhanmondi, Gulshan)"
                  className="pl-10 h-12 border-2 focus:border-primary"
                />
              </div>

              {/* Property Type */}
              <Select>
                <SelectTrigger className="h-12 border-2 focus:border-primary">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="duplex">Duplex</SelectItem>
                  <SelectItem value="office">Office Space</SelectItem>
                  <SelectItem value="shop">Shop</SelectItem>
                </SelectContent>
              </Select>

              {/* Budget Range */}
              <Select>
                <SelectTrigger className="h-12 border-2 focus:border-primary">
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5000-15000">৳5,000 - ৳15,000</SelectItem>
                  <SelectItem value="15000-30000">৳15,000 - ৳30,000</SelectItem>
                  <SelectItem value="30000-50000">৳30,000 - ৳50,000</SelectItem>
                  <SelectItem value="50000+">৳50,000+</SelectItem>
                </SelectContent>
              </Select>

              {/* Search Button */}
              <Button variant="hero" size="lg" className="h-12">
                <Search className="h-5 w-5 mr-2" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm text-primary-foreground/80">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1200+</div>
              <div className="text-sm text-primary-foreground/80">Verified Landlords</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">800+</div>
              <div className="text-sm text-primary-foreground/80">Happy Tenants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-primary-foreground/80">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}