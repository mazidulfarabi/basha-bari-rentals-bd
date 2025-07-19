import { Users, TrendingUp, Award, Briefcase, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";

export default function Agents() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Grow Your Real Estate Business
          </h1>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join BashaBari's network of professional real estate agents and expand your client base
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Become an Agent
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Agent Portal Login
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner with BashaBari?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>More Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access a larger pool of verified property seekers and landlords
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Increased Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn higher commissions with our transparent pricing structure
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Professional Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Use our CRM, lead management, and marketing tools to close deals faster
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Business Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get training, marketing materials, and ongoing business support
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
              <h2 className="text-3xl font-bold mb-6">Professional Agent Dashboard</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Lead Management System</h3>
                    <p className="text-muted-foreground">Track and nurture leads from inquiry to closing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Property Portfolio</h3>
                    <p className="text-muted-foreground">Manage multiple listings with rich media and details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Commission Tracking</h3>
                    <p className="text-muted-foreground">Real-time commission calculations and payment tracking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Client Communication</h3>
                    <p className="text-muted-foreground">Built-in messaging and appointment scheduling</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Join Our Agent Network</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Commission Rate</span>
                  <span className="font-semibold text-primary">Up to 3%</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Fee</span>
                  <span className="font-semibold text-primary">৳500</span>
                </div>
                <div className="flex justify-between">
                  <span>Setup Cost</span>
                  <span className="font-semibold text-primary">Free</span>
                </div>
              </div>
              <Button className="w-full mb-4">Apply Now</Button>
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Need help? Call +880 1XXX-XXXXXX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Agent Requirements</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Basic Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Valid real estate license</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Minimum 2 years experience</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Professional references</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Clean background check</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Preferred Qualifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Local market expertise</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Digital marketing skills</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Multiple language fluency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Proven sales track record</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}