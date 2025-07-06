import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu, Home, Building, UserPlus, LogIn, Bell } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Home className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-primary">BashaBari</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Property Management</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex ml-8">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Properties</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="ghost" className="justify-start h-auto p-3">
                      <div className="text-left">
                        <div className="font-medium">For Rent</div>
                        <div className="text-sm text-muted-foreground">Find rental properties</div>
                      </div>
                    </Button>
                    <Button variant="ghost" className="justify-start h-auto p-3">
                      <div className="text-left">
                        <div className="font-medium">For Sale</div>
                        <div className="text-sm text-muted-foreground">Buy properties</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" className="h-10">
                For Landlords
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" className="h-10">
                For Agents
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side actions */}
        <div className="ml-auto flex items-center space-x-2">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative hidden sm:flex">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </Button>

          {/* Desktop Auth Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button variant="hero" size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Button variant="ghost" className="justify-start">
                  <Home className="h-4 w-4 mr-2" />
                  Properties for Rent
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Building className="h-4 w-4 mr-2" />
                  Properties for Sale
                </Button>
                <Button variant="ghost" className="justify-start">
                  For Landlords
                </Button>
                <Button variant="ghost" className="justify-start">
                  For Agents
                </Button>
                
                <div className="border-t pt-4 space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button variant="hero" className="w-full justify-start">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}