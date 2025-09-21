import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { 
  FileText, 
  Users, 
  BarChart3, 
  Shield, 
  Clock, 
  AlertCircle, 
  CheckCircle,
  Bot,
  MapPin,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const PoliceDashboard = () => {
  const [activeView, setActiveView] = useState('complaints');
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [officerCount, setOfficerCount] = useState([3]);

  const sidebarItems = [
    { title: 'Complaints', icon: FileText, key: 'complaints' },
    { title: 'Officer Deployment', icon: Users, key: 'deployment' },
    { title: 'Reports & Analytics', icon: BarChart3, key: 'reports' }
  ];

  // Mock data - replace with actual API calls
  const complaints = [
    {
      id: 'CTC2025001001',
      category: 'Theft',
      status: 'Investigating',
      priority: 'High',
      victim: 'John Doe',
      contact: '+91 9876543210',
      email: 'john.doe@email.com',
      location: 'T. Nagar, Chennai',
      filedDate: '2025-01-15',
      description: 'Mobile phone stolen from auto rickshaw near T. Nagar bus stand around 3 PM.',
      suggestedBNS: [
        { section: '303', confidence: 85, description: 'Theft' },
        { section: '351', confidence: 65, description: 'Criminal intimidation' }
      ]
    },
    {
      id: 'CTC2025001002', 
      category: 'Fraud',
      status: 'Pending',
      priority: 'Medium',
      victim: 'Jane Smith',
      contact: '+91 9876543211',
      email: 'jane.smith@email.com',
      location: 'Anna Nagar, Chennai',
      filedDate: '2025-01-16',
      description: 'Online fraud involving fake investment scheme, lost ₹50,000.',
      suggestedBNS: [
        { section: '420', confidence: 92, description: 'Cheating and dishonestly inducing delivery of property' }
      ]
    }
  ];

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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const updateCaseStatus = (caseId: string, newStatus: string) => {
    // Your backend integration here
    console.log(`Updating case ${caseId} to status: ${newStatus}`);
  };

  const renderComplaintsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Complaint Management</h2>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="investigating">Investigating</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6">
        {selectedCase ? (
          // Case Detail View
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Case Details - #{selectedCase.id}
                </CardTitle>
                <Button variant="outline" onClick={() => setSelectedCase(null)}>
                  Back to List
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Case Information */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Victim Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedCase.victim}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedCase.contact}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedCase.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedCase.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Filed: {selectedCase.filedDate}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">Case Status</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(selectedCase.status)}
                          <Badge variant={getPriorityColor(selectedCase.priority) as any}>
                            {selectedCase.priority} Priority
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={() => updateCaseStatus(selectedCase.id, 'Investigating')}
                          >
                            Mark as Investigating
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full"
                            onClick={() => updateCaseStatus(selectedCase.id, 'Closed')}
                          >
                            Mark as Closed
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Complaint Description</h4>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-foreground">{selectedCase.description}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Investigation Notes</h4>
                    <Textarea 
                      placeholder="Add investigation notes, progress updates, evidence details..."
                      className="min-h-24"
                    />
                    <Button className="mt-2">Update Notes</Button>
                  </div>
                </div>

                {/* AI Suggestions & Officer Deployment */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Bot className="w-5 h-5" />
                        AI Suggestions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-sm mb-2">Suggested BNS Sections:</h5>
                          {selectedCase.suggestedBNS.map((bns: any, index: number) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-muted rounded mb-2">
                              <div>
                                <span className="font-medium">Section {bns.section}</span>
                                <p className="text-xs text-muted-foreground">{bns.description}</p>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {bns.confidence}%
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Users className="w-5 h-5" />
                        Officer Deployment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Recommended Officers:</span>
                            <Badge variant="outline">ML Suggestion</Badge>
                          </div>
                          <Badge variant="secondary">4 Officers</Badge>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Assign Officers:</label>
                          <Slider
                            value={officerCount}
                            onValueChange={setOfficerCount}
                            max={10}
                            min={1}
                            step={1}
                            className="mb-2"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>1</span>
                            <span>{officerCount[0]} Officers</span>
                            <span>10</span>
                          </div>
                        </div>

                        <Button className="w-full">
                          Deploy Officers
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          // Complaints List View
          <div className="grid gap-4">
            {complaints.map((complaint) => (
              <Card key={complaint.id} className="shadow-card cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(complaint.status)}
                      <div>
                        <h3 className="font-medium text-foreground">Case #{complaint.id}</h3>
                        <p className="text-sm text-muted-foreground">{complaint.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={getPriorityColor(complaint.priority) as any}>
                        {complaint.priority}
                      </Badge>
                      <Badge variant="outline">
                        {complaint.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Victim</p>
                      <p className="text-sm font-medium">{complaint.victim}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium">{complaint.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Filed Date</p>
                      <p className="text-sm font-medium">{complaint.filedDate}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {complaint.description}
                  </p>

                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedCase(complaint)}
                    className="w-full"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderDeploymentView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Officer Deployment</h2>
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Officer Deployment Management</h3>
            <p className="text-muted-foreground">
              Track and manage officer assignments, patrol schedules, and resource allocation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderReportsView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Reports & Analytics</h2>
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Analytics Dashboard</h3>
            <p className="text-muted-foreground">
              View crime statistics, officer performance metrics, and generate reports.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r border-border">
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Police Portal</span>
            </div>
          </div>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.key}>
                      <SidebarMenuButton 
                        onClick={() => setActiveView(item.key)}
                        className={activeView === item.key ? 'bg-primary text-primary-foreground' : ''}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <header className="h-16 border-b border-border flex items-center px-6">
            <SidebarTrigger />
            <div className="ml-4">
              <h1 className="text-xl font-semibold text-foreground">
                Chennai Police Dashboard
              </h1>
            </div>
          </header>

          <div className="p-6">
            {activeView === 'complaints' && renderComplaintsView()}
            {activeView === 'deployment' && renderDeploymentView()}
            {activeView === 'reports' && renderReportsView()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default PoliceDashboard;