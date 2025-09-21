import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, MapPin, Clock, AlertTriangle, Users, Shield, MessageCircle } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

const Emergency = () => {
  const [emergencyActive, setEmergencyActive] = useState(false);

  const emergencyNumbers = [
    { service: 'Police Emergency', number: '100', icon: Shield, color: 'destructive' },
    { service: 'Fire Department', number: '101', icon: AlertTriangle, color: 'warning' },
    { service: 'Ambulance', number: '108', icon: Users, color: 'success' },
    { service: 'Women Helpline', number: '181', icon: Phone, color: 'primary' },
    { service: 'Child Helpline', number: '1098', icon: Users, color: 'secondary' },
    { service: 'Disaster Management', number: '1070', icon: AlertTriangle, color: 'warning' },
  ];

  const nearbyStations = [
    { name: 'T. Nagar Police Station', distance: '0.8 km', contact: '044-2433-4567' },
    { name: 'Teynampet Police Station', distance: '1.2 km', contact: '044-2433-5678' },
    { name: 'Anna Nagar Police Station', distance: '2.1 km', contact: '044-2433-6789' },
  ];

  const safetyTips = [
    'Stay calm and find a safe location',
    'If possible, move to a well-lit public area',
    'Share your location with trusted contacts',
    'Keep emergency numbers handy',
    'Trust your instincts about dangerous situations'
  ];

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const activateEmergencyMode = () => {
    setEmergencyActive(true);
    // Your backend integration for emergency alert
    console.log('Emergency mode activated');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Emergency Services</h1>
            <p className="text-muted-foreground">Quick access to emergency contacts and safety resources</p>
          </div>

          {/* Emergency Alert Button */}
          <Card className="shadow-card mb-8 border-destructive">
            <CardContent className="p-6">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">In Immediate Danger?</h2>
                <p className="text-muted-foreground mb-6">
                  Press the emergency button to alert nearby police stations and trusted contacts
                </p>
                <Button 
                  size="lg" 
                  variant="destructive" 
                  onClick={activateEmergencyMode}
                  disabled={emergencyActive}
                  className="text-lg px-8 py-3"
                >
                  {emergencyActive ? (
                    <>
                      <Clock className="w-5 h-5 mr-2" />
                      Emergency Alert Sent
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Emergency Alert
                    </>
                  )}
                </Button>
                {emergencyActive && (
                  <p className="text-sm text-success mt-2">
                    ✓ Alert sent to nearby police stations and emergency contacts
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Emergency Numbers */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Emergency Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {emergencyNumbers.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <service.icon className="w-6 h-6 text-primary" />
                          <div>
                            <h4 className="font-medium text-foreground">{service.service}</h4>
                            <p className="text-sm text-muted-foreground">24/7 Available</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={service.color as any} className="text-sm font-mono">
                            {service.number}
                          </Badge>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleEmergencyCall(service.number)}
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Safety Tips */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Safety Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {safetyTips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Location & Nearby Services */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Nearby Police Stations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {nearbyStations.map((station, index) => (
                      <div key={index} className="p-4 bg-muted rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-foreground">{station.name}</h4>
                          <Badge variant="outline">{station.distance}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{station.contact}</p>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleEmergencyCall(station.contact)}
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline">
                            <MapPin className="w-4 h-4 mr-2" />
                            Directions
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    <Button variant="outline" className="justify-start">
                      <MessageCircle className="w-4 h-4 mr-3" />
                      Send Location to Emergency Contact
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <MapPin className="w-4 h-4 mr-3" />
                      Find Nearest Safe Place
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Shield className="w-4 h-4 mr-3" />
                      Report Non-Emergency Incident
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Checklist */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Emergency Preparedness</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span>Emergency contacts saved in phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span>Location sharing enabled</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span>Medical information updated</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="rounded" />
                      <span>Safe routes planned</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;