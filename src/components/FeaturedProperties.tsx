import { PropertyCard } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const featuredProperties = [
  {
    id: "1",
    title: "Modern 3BR Apartment in Dhanmondi",
    location: "Dhanmondi, Dhaka",
    price: 35000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    image: property1,
    type: "Rent" as const,
    featured: true
  },
  {
    id: "2", 
    title: "Luxury Duplex House in Gulshan",
    location: "Gulshan-2, Dhaka",
    price: 8500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: property2,
    type: "Sale" as const,
    featured: true
  },
  {
    id: "3",
    title: "Commercial Office Space in Motijheel",
    location: "Motijheel, Dhaka",
    price: 85000,
    bedrooms: 0,
    bathrooms: 2,
    area: 1800,
    image: property3,
    type: "Rent" as const,
    featured: true
  }
];

export function FeaturedProperties() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-semibold">Featured Properties</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover Premium Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of the finest residential and commercial properties 
            across Bangladesh's prime locations.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Properties
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}