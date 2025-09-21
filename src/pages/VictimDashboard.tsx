import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { FileText, Clock, CheckCircle, AlertCircle, Bot, Shield, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

const VictimDashboard = () => {
  const [verificationFeedback, setVerificationFeedback] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  // Mock case data - replace with actual API call
  const caseData = {
    id: 'CTC2025001001',
    status: 'Investigating',
    category: 'Theft',
    filedDate: '2025-01-15',
    lastUpdate: '2025-01-18',
    assignedOfficer: 'Inspector R. Kumar',
    station: 'T. Nagar Police Station'
  };

  const timeline = [
    {
      date: '2025-01-15 10:30 AM',
      status: 'Filed',
      description: 'Complaint filed and FIR registered',
      officer: 'Constable S. Priya'
    },
    {
      date: '2025-01-16 02:15 PM', 
      status: 'Acknowledged',
      description: 'Case assigned to investigating officer',
      officer: 'Inspector R. Kumar'
    },
    {
      date: '2025-01-17 11:00 AM',
      status: 'Investigation Started',
      description: 'Site visit completed, evidence collected',
      officer: 'Inspector R. Kumar'
    },
    {
      date: '2025-01-18 04:20 PM',
      status: 'Progress Update',
      description: 'Suspects identified, investigation ongoing',
      officer: 'Inspector R. Kumar'
    }
  ];

  const aiInsights = [
    {
      type: 'precaution',
      title: 'Personal Safety',
      content: 'Based on your case type, ensure you avoid isolated areas and inform trusted contacts of your whereabouts.'
    },
    {
      type: 'legal',
      title: 'Legal Rights',
      content: 'You have the right to regular updates on your case progress and can request a copy of the FIR.'
    },
    {
      type: 'support',
      title: 'Victim Support',
      content: 'Free counseling services are available through the District Legal Services Authority.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Filed':
        return <FileText className="w-4 h-4 text-primary" />;
      case 'Investigating':
        return <AlertCircle className="w-4 h-4 text-warning" />;
      case 'Closed':
        return <CheckCircle className="w-4 h-4 text-success" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Filed':
        return 'default';
      case 'Investigating':
        return 'warning';
      case 'Closed':
        return 'success';
      default:
        return 'secondary';
    }
  };

  const handleVerification = (action: 'confirm' | 'dispute') => {
    // Your backend integration here
    console.log(`Case ${action}ed by victim`);
    setShowVerification(false);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Case Dashboard</h1>
            <p className="text-muted-foreground">Track your complaint progress and get updates</p>
          </div>

          {/* Case Status Card */}
          <Card className="shadow-card mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Case #{caseData.id}
                </CardTitle>
                <Badge variant={getStatusColor(caseData.status) as any} className="text-sm">
                  {caseData.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-medium text-foreground">{caseData.category}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Filed Date</p>
                  <p className="font-medium text-foreground">{caseData.filedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Assigned Officer</p>
                  <p className="font-medium text-foreground">{caseData.assignedOfficer}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Police Station</p>
                  <p className="font-medium text-foreground">{caseData.station}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Investigation Progress</p>
                  <p className="text-sm text-muted-foreground">75% Complete</p>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Timeline */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Case Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-border"></div>
                    
                    <div className="space-y-6">
                      {timeline.map((event, index) => (
                        <div key={index} className="relative flex items-start gap-4">
                          {/* Timeline Dot */}
                          <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-background border-2 border-primary rounded-full">
                            {getStatusIcon(event.status)}
                          </div>
                          
                          {/* Event Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-medium text-foreground">{event.status}</h4>
                              <span className="text-xs text-muted-foreground">{event.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{event.description}</p>
                            <p className="text-xs text-muted-foreground">By: {event.officer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Verification Panel */}
              {caseData.status === 'Closed' && (
                <Card className="shadow-card mt-8 border-warning">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Case Closure Verification Required
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-warning/10 p-4 rounded-lg mb-4">
                      <p className="text-sm text-foreground mb-2">
                        The investigating officer has marked this case as closed. Please verify if you agree with the closure.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Your verification is required within 7 days, otherwise the case will be automatically closed.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">
                          Additional Comments (Optional)
                        </label>
                        <Textarea
                          placeholder="Provide any additional feedback about the case resolution..."
                          value={verificationFeedback}
                          onChange={(e) => setVerificationFeedback(e.target.value)}
                          className="mt-2"
                        />
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          onClick={() => handleVerification('confirm')}
                          className="flex-1"
                        >
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Confirm Closure
                        </Button>
                        <Button 
                          variant="destructive" 
                          onClick={() => handleVerification('dispute')}
                          className="flex-1"
                        >
                          <ThumbsDown className="w-4 h-4 mr-2" />
                          Dispute Closure
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Insights */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    AI Insights & Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {aiInsights.map((insight, index) => (
                      <div key={index} className="p-3 bg-muted rounded-lg">
                        <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          {insight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{insight.content}</p>
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
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="w-4 h-4 mr-3" />
                      Contact Investigating Officer
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-3" />
                      Download Case Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="w-4 h-4 mr-3" />
                      Request Security Measures
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Support Resources */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Support Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Victim Support Helpline</span>
                      <Badge variant="outline">1091</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Legal Aid Services</span>
                      <Badge variant="outline">15100</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Counseling Services</span>
                      <Button variant="link" className="h-auto p-0 text-sm">
                        Book Session
                      </Button>
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

export default VictimDashboard;