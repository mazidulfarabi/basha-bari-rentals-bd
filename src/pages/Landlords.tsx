import { Building, Users, DollarSign, Shield, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

export default function Landlords() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Manage Your Properties with Ease
          </h1>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of landlords who trust BashaBari to manage their rental properties efficiently
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              List Your Property
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BashaBari?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Easy Property Listing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  List your properties with photos, details, and availability in minutes
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Tenant Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Screen tenants, manage applications, and communicate seamlessly
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Rent Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automated rent tracking, reminders, and digital payment processing
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Legal Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Digital lease agreements and documentation for legal compliance
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Property Management</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Digital Lease Management</h3>
                    <p className="text-muted-foreground">Create, sign, and store lease agreements digitally</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Maintenance Tracking</h3>
                    <p className="text-muted-foreground">Handle maintenance requests and track repairs efficiently</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Financial Reporting</h3>
                    <p className="text-muted-foreground">Generate rental income reports and expense tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Tenant Screening</h3>
                    <p className="text-muted-foreground">Verify tenant backgrounds and financial stability</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
              <p className="text-muted-foreground mb-6">
                Join BashaBari and start managing your properties more efficiently
              </p>
              <Button className="w-full mb-4">Create Free Account</Button>
              <p className="text-sm text-center text-muted-foreground">
                No setup fees • Cancel anytime • 30-day free trial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Landlords Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4">
                  "BashaBari has made managing my 5 properties so much easier. The rent collection feature is a game-changer!"
                </p>
                <div className="font-semibold">Ahmed Rahman</div>
                <div className="text-sm text-muted-foreground">Property Owner, Dhaka</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4">
                  "Finally, a platform that understands the Bangladeshi rental market. Professional and reliable."
                </p>
                <div className="font-semibold">Fatima Khatun</div>
                <div className="text-sm text-muted-foreground">Landlord, Chittagong</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4">
                  "The tenant screening process is thorough and the digital documentation saves me hours of paperwork."
                </p>
                <div className="font-semibold">Mohammad Ali</div>
                <div className="text-sm text-muted-foreground">Real Estate Investor</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}