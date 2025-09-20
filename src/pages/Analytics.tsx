import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  TrendingUp, 
  MapPin, 
  Users, 
  Clock, 
  Filter,
  Download,
  Calendar,
  PieChart,
  Activity
} from 'lucide-react';

const Analytics = () => {
  const [timeFilter, setTimeFilter] = useState('month');
  const [locationFilter, setLocationFilter] = useState('all');
  const [severityFilter, setSeverityFilter] = useState('all');

  // Mock analytics data - replace with actual API calls
  const stats = {
    totalCrimes: 1247,
    solvedCases: 943,
    activeCases: 304,
    responseTime: '18 mins',
    clearanceRate: 75.6
  };

  const crimeCategories = [
    { category: 'Theft', count: 387, change: +12 },
    { category: 'Fraud', count: 245, change: -8 },
    { category: 'Assault', count: 189, change: +5 },
    { category: 'Cybercrime', count: 156, change: +24 },
    { category: 'Property Damage', count: 134, change: -3 },
    { category: 'Domestic Violence', count: 89, change: -15 },
  ];

  const locationData = [
    { area: 'T. Nagar', crimes: 156, officers: 24, severity: 'High' },
    { area: 'Anna Nagar', crimes: 134, officers: 20, severity: 'Medium' },
    { area: 'Adyar', crimes: 112, officers: 18, severity: 'Medium' },
    { area: 'Velachery', crimes: 98, officers: 16, severity: 'Low' },
    { area: 'Mylapore', crimes: 87, officers: 14, severity: 'Low' },
  ];

  const officerAllocation = [
    { station: 'T. Nagar Police Station', allocated: 45, required: 52, efficiency: 87 },
    { station: 'Anna Nagar Police Station', allocated: 38, required: 40, efficiency: 95 },
    { station: 'Adyar Police Station', allocated: 42, required: 38, efficiency: 110 },
    { station: 'Velachery Police Station', allocated: 35, required: 33, efficiency: 106 },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'secondary';
      case 'Low':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 100) return 'outline';
    if (efficiency >= 80) return 'secondary';
    return 'destructive';
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Crime Analytics Dashboard</h1>
              <p className="text-muted-foreground">Data-driven insights for effective policing</p>
            </div>
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>

          {/* Filters */}
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Time Period</label>
                  <Select value={timeFilter} onValueChange={setTimeFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Last Week</SelectItem>
                      <SelectItem value="month">Last Month</SelectItem>
                      <SelectItem value="quarter">Last Quarter</SelectItem>
                      <SelectItem value="year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Areas</SelectItem>
                      <SelectItem value="tnagar">T. Nagar</SelectItem>
                      <SelectItem value="annanagar">Anna Nagar</SelectItem>
                      <SelectItem value="adyar">Adyar</SelectItem>
                      <SelectItem value="velachery">Velachery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Severity</label>
                  <Select value={severityFilter} onValueChange={setSeverityFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severities</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button variant="outline" className="w-full">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Crimes</p>
                    <p className="text-2xl font-bold text-foreground">{stats.totalCrimes.toLocaleString()}</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Solved Cases</p>
                    <p className="text-2xl font-bold text-foreground">{stats.solvedCases.toLocaleString()}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Cases</p>
                    <p className="text-2xl font-bold text-foreground">{stats.activeCases}</p>
                  </div>
                  <Activity className="w-8 h-8 text-warning" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Response</p>
                    <p className="text-2xl font-bold text-foreground">{stats.responseTime}</p>
                  </div>
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Clearance Rate</p>
                    <p className="text-2xl font-bold text-foreground">{stats.clearanceRate}%</p>
                  </div>
                  <PieChart className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Crime Categories */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Crime Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {crimeCategories.map((crime, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-foreground">{crime.category}</span>
                          <span className="text-sm text-muted-foreground">{crime.count} cases</span>
                        </div>
                        <div className="w-full bg-background rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(crime.count / Math.max(...crimeCategories.map(c => c.count))) * 100}%` }}
                          />
                        </div>
                      </div>
                        <Badge 
                        variant={crime.change > 0 ? 'destructive' : 'outline'} 
                        className="ml-3"
                      >
                        {crime.change > 0 ? '+' : ''}{crime.change}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Heatmap */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Crime Heatmap by Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {locationData.map((location, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">{location.area}</span>
                          <Badge variant={getSeverityColor(location.severity) as any}>
                            {location.severity}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Crimes: </span>
                            <span className="font-medium">{location.crimes}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Officers: </span>
                            <span className="font-medium">{location.officers}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Officer Allocation */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Officer Allocation Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {officerAllocation.map((station, index) => (
                  <div key={index} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground">{station.station}</h4>
                      <Badge variant={getEfficiencyColor(station.efficiency) as any}>
                        {station.efficiency}% Efficiency
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Allocated: </span>
                        <span className="font-medium">{station.allocated} officers</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Required: </span>
                        <span className="font-medium">{station.required} officers</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Gap: </span>
                        <span className={`font-medium ${station.allocated < station.required ? 'text-destructive' : 'text-success'}`}>
                          {station.allocated - station.required > 0 ? '+' : ''}{station.allocated - station.required}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="w-full bg-background rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${station.efficiency >= 100 ? 'bg-success' : station.efficiency >= 80 ? 'bg-warning' : 'bg-destructive'}`}
                          style={{ width: `${Math.min(station.efficiency, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;