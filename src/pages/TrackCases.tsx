import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const TrackCases = () => {
  const [caseId, setCaseId] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = () => {
    // Your backend search integration here
    console.log('Searching for case:', caseId);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Pending':
        return <Clock className="w-4 h-4 text-warning" />;
      case 'Investigating':
        return <AlertCircle className="w-4 h-4 text-primary" />;
      case 'Closed':
        return <CheckCircle className="w-4 h-4 text-success" />;
      default:
        return <FileText className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'warning';
      case 'Investigating':
        return 'default';
      case 'Closed':
        return 'success';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Track Your Cases</h1>
            <p className="text-muted-foreground">Monitor the progress of your filed complaints</p>
          </div>

          {/* Search Section */}
          <Card className="shadow-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search Case
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter Case ID (e.g., CTC2024001234)"
                  value={caseId}
                  onChange={(e) => setCaseId(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSearch} className="min-w-32">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Cases</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                  </div>
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Under Investigation</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                  </div>
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Resolved</p>
                    <p className="text-2xl font-bold text-foreground">0</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search Results / Recent Cases */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Your Cases</CardTitle>
            </CardHeader>
            <CardContent>
              {searchResults.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">No Cases Found</h3>
                  <p className="text-muted-foreground mb-4">
                    {caseId ? 'No cases found for the entered Case ID' : 'Enter a Case ID to search or file a new complaint'}
                  </p>
                  <Button variant="outline">
                    File New Complaint
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* This will be populated with actual case data */}
                  {searchResults.map((caseData, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(caseData.status)}
                          <div>
                            <h4 className="font-medium text-foreground">Case #{caseData.id}</h4>
                            <p className="text-sm text-muted-foreground">{caseData.category}</p>
                          </div>
                        </div>
                        <Badge variant={getStatusColor(caseData.status) as any}>
                          {caseData.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        Filed on: {caseData.filedDate}
                      </p>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Download Report
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="shadow-card mt-8">
            <CardHeader>
              <CardTitle>How to Track Your Case</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Case ID Format</h4>
                  <p className="text-sm text-muted-foreground">
                    Your Case ID follows the format: CTC2024XXXXXX. You can find this in your complaint receipt or confirmation email.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Status Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    You'll receive SMS and email notifications when your case status changes. Login here anytime to check progress.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrackCases;