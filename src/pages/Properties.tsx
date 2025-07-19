import { Search, Filter, MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PropertyCard } from "@/components/PropertyCard";
import { Footer } from "@/components/Footer";

const properties = [
  {
    id: "1",
    title: "Modern 2BHK Apartment in Gulshan",
    location: "Gulshan 2, Dhaka",
    price: 35000,
    image: "/src/assets/property-1.jpg",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "Rent" as const
  },
  {
    id: "2",
    title: "Luxury 3BHK with Rooftop Garden",
    location: "Dhanmondi 27, Dhaka",
    price: 55000,
    image: "/src/assets/property-2.jpg",
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    type: "Rent" as const
  },
  {
    id: "3",
    title: "Cozy 1BHK Near University",
    location: "Wari, Dhaka",
    price: 18000,
    image: "/src/assets/property-3.jpg",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    type: "Rent" as const
  }
];

export default function Properties() {
  return (
    <div className="min-h-screen">
      {/* Search Section */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Find Your Perfect Property</h1>
            
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search location..." className="pl-10" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="City, Area..." className="pl-10" />
                </div>
                <Button className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Search Properties
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" size="sm">1 BHK</Button>
                <Button variant="outline" size="sm">2 BHK</Button>
                <Button variant="outline" size="sm">3 BHK</Button>
                <Button variant="outline" size="sm">Furnished</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Available Properties</h2>
            <p className="text-muted-foreground">{properties.length} properties found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline">Previous</Button>
              <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}