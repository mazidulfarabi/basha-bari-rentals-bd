import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, BedDouble, Bath, Square, Heart } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: "Rent" | "Sale";
  featured?: boolean;
}

export function PropertyCard({ 
  id, 
  title, 
  location, 
  price, 
  bedrooms, 
  bathrooms, 
  area, 
  image, 
  type,
  featured = false 
}: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={type === "Rent" ? "default" : "secondary"} className="font-medium">
            {type === "Rent" ? "For Rent" : "For Sale"}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-warning text-warning-foreground">Featured</Badge>
          </div>
        )}
        <button 
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute bottom-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        >
          <Heart 
            className={`h-4 w-4 ${isFavorited ? 'fill-destructive text-destructive' : 'text-muted-foreground'}`} 
          />
        </button>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
        
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <BedDouble className="h-4 w-4 mr-1" />
              <span>{bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{area} sqft</span>
            </div>
          </div>
        </div>

        <div className="text-xl font-bold text-primary">
          ৳{price.toLocaleString()}{type === "Rent" ? "/month" : ""}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button size="sm" className="flex-1">
          View Details
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
}