import { FileText, Shield, Users, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroIllustration from '@/assets/hero-illustration.jpg';

export const Hero = () => {
  const trustBadges = [
    { icon: Shield, text: 'Secure' },
    { icon: Users, text: 'Multilingual' },
    { icon: FileText, text: 'Verified' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background illustration */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroIllustration})` }}
      />
      
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-up">
              Report.{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Track.
              </span>{' '}
              Stay Safe.
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground animate-slide-up animation-delay-200">
              AI-powered crime reporting & tracking for Chennai citizens and police.
              Secure, fast, and reliable incident management system.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in animation-delay-400">
            <Link to="/complaint">
              <Button 
                size="lg" 
                className="w-full sm:w-auto hero-gradient text-primary-foreground shadow-elegant hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <FileText className="mr-2 h-5 w-5" />
                File Complaint
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/police">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto shadow-card hover:shadow-lg transition-all duration-300"
              >
                <Shield className="mr-2 h-5 w-5" />
                Police Login
              </Button>
            </Link>
          </div>

          {/* Emergency Contact */}
          <div className="flex justify-center animate-fade-in animation-delay-600">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-primary/20">
              <CardContent className="flex items-center space-x-3 p-4">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">Emergency Hotline</p>
                  <p className="text-lg font-bold text-primary">100</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust badges */}
          <div className="flex justify-center space-x-8 sm:space-x-12 animate-fade-in animation-delay-800">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-theme">
                  <badge.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-12 animate-slide-up animation-delay-1000">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Available</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Languages</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Secure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};