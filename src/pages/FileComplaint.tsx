import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { FileUp, MapPin, Bot, ChevronRight, ChevronLeft } from 'lucide-react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Badge } from '@/components/ui/badge';

const FileComplaint = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    name: '',
    contact: '',
    email: '',
    language: '',
    
    // Step 2: Complaint Details
    category: '',
    description: '',
    location: '',
    dateTime: '',
    urgency: '',
    
    // Step 3: Evidence
    files: [] as File[]
  });

  const categories = [
    'Theft', 'Fraud', 'Assault', 'Cybercrime', 'Domestic Violence',
    'Property Damage', 'Harassment', 'Traffic Violation', 'Drug Related', 'Other'
  ];

  const languages = [
    'English', 'Tamil', 'Hindi', 'Telugu', 'Malayalam'
  ];

  const urgencyLevels = [
    'Low', 'Medium', 'High', 'Emergency'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFormData(prev => ({ ...prev, files: [...prev.files, ...files] }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Your backend integration here
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle success/error
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const progress = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">File a Complaint</h1>
            <p className="text-muted-foreground">Report incidents securely and track their progress</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span className={currentStep >= 1 ? 'text-primary font-medium' : ''}>Personal Info</span>
              <span className={currentStep >= 2 ? 'text-primary font-medium' : ''}>Complaint Details</span>
              <span className={currentStep >= 3 ? 'text-primary font-medium' : ''}>Upload Evidence</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Form */}
            <div className="lg:col-span-3">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Step {currentStep} of 3
                    {currentStep === 1 && " - Personal Information"}
                    {currentStep === 2 && " - Complaint Details"}
                    {currentStep === 3 && " - Upload Evidence"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Step 1: Personal Info */}
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="contact">Contact Number *</Label>
                          <Input
                            id="contact"
                            value={formData.contact}
                            onChange={(e) => handleInputChange('contact', e.target.value)}
                            placeholder="Enter contact number"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter email address"
                        />
                      </div>

                      <div>
                        <Label htmlFor="language">Preferred Language *</Label>
                        <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred language" />
                          </SelectTrigger>
                          <SelectContent>
                            {languages.map((lang) => (
                              <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Complaint Details */}
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">Complaint Category *</Label>
                          <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="urgency">Urgency Level *</Label>
                          <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent>
                              {urgencyLevels.map((level) => (
                                <SelectItem key={level} value={level}>{level}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="description">Detailed Description *</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Provide detailed description of the incident"
                          className="min-h-32"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <div className="relative">
                            <Input
                              id="location"
                              value={formData.location}
                              onChange={(e) => handleInputChange('location', e.target.value)}
                              placeholder="Enter incident location"
                            />
                            <Button 
                              type="button" 
                              variant="ghost" 
                              size="sm"
                              className="absolute right-2 top-1/2 -translate-y-1/2"
                            >
                              <MapPin className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="dateTime">Date & Time of Incident</Label>
                          <Input
                            id="dateTime"
                            type="datetime-local"
                            value={formData.dateTime}
                            onChange={(e) => handleInputChange('dateTime', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Upload Evidence */}
                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <Label>Upload Evidence (Optional)</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                          <FileUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground mb-2">
                            Drag and drop files here, or click to browse
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            Supported: JPG, PNG, PDF, DOC, MP4 (Max 10MB each)
                          </p>
                          <input
                            type="file"
                            multiple
                            accept="image/*,video/*,.pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="fileUpload"
                          />
                          <Button asChild variant="outline">
                            <label htmlFor="fileUpload" className="cursor-pointer">
                              Choose Files
                            </label>
                          </Button>
                        </div>
                      </div>

                      {/* File Preview */}
                      {formData.files.length > 0 && (
                        <div className="space-y-2">
                          <Label>Uploaded Files:</Label>
                          {formData.files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                              <span className="text-sm">{file.name}</span>
                              <span className="text-xs text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button 
                      variant="outline" 
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                    
                    {currentStep < 3 ? (
                      <Button onClick={nextStep}>
                        Next
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleSubmit} 
                        disabled={isSubmitting}
                        className="min-w-32"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Submitting...
                          </div>
                        ) : (
                          'Submit Complaint'
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Assistant Panel */}
            <div className="lg:col-span-1">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="w-full mb-4">
                    <Bot className="w-4 h-4 mr-2" />
                    AI Assistant
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[80vh]">
                  <DrawerHeader>
                    <DrawerTitle className="flex items-center gap-2">
                      <Bot className="w-5 h-5" />
                      AI Legal Assistant
                    </DrawerTitle>
                  </DrawerHeader>
                  <div className="p-4 space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Suggested BNS Sections:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Section 303</Badge>
                        <Badge variant="secondary">Section 351</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Safety Precautions:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Keep all evidence safe</li>
                        <li>• Do not confront the accused</li>
                        <li>• Inform trusted contacts</li>
                      </ul>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileComplaint;