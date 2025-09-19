import { Bot, MapPin, Clock, Shield, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FeatureSection = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and automated case categorization with our advanced AI system.',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your complaint status and get location-based crime insights for better safety planning.',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'File complaints and access support round the clock with our always-available platform.',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected with enterprise-grade security protocols.',
      color: 'text-red-600'
    },
    {
      icon: Users,
      title: 'Multi-language Support',
      description: 'Access the platform in Tamil, English, Telugu, Hindi, and other regional languages.',
      color: 'text-orange-600'
    },
    {
      icon: FileText,
      title: 'Digital Evidence',
      description: 'Upload photos, videos, and documents as evidence with automatic verification.',
      color: 'text-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in">
            Why Choose CrimeTracer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Built for Chennai citizens and law enforcement with cutting-edge technology and user-friendly design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in border-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl bg-primary/10`}>
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-lg">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};