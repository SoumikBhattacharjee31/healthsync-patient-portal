
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { FileText, Download, QrCode, Plus } from "lucide-react";
import { toast } from "sonner";

const HospitalForms = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    dateOfBirth: "1990-05-15",
    address: "123 Main St, Anytown, CA 12345",
    phone: "(555) 123-4567",
    email: "john.doe@example.com",
    emergencyContact: "Jane Doe",
    emergencyPhone: "(555) 987-6543",
    allergies: "Penicillin",
    currentMedications: "Lisinopril 10mg, Metformin 500mg",
    medicalHistory: "Hypertension, Type 2 Diabetes",
    surgicalHistory: "Appendectomy (2015)",
    familyHistory: "Father: Hypertension, Mother: Type 2 Diabetes",
    smokingStatus: "Non-smoker",
    alcoholUse: "Occasional",
    primaryDoctor: "Dr. Sarah Miller",
    insuranceProvider: "Health Plus Insurance",
    policyNumber: "HP123456789",
    notes: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [formGenerated, setFormGenerated] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleGenerateForm = () => {
    setLoading(true);
    
    // Simulate API call to generate form
    setTimeout(() => {
      setLoading(false);
      setFormGenerated(true);
      toast.success("Hospital admission form generated successfully!");
    }, 2000);
  };
  
  const handleDownloadForm = () => {
    // In a real app, this would trigger a PDF download
    toast.success("Form downloaded successfully!");
  };
  
  const handleGenerateQRCode = () => {
    // In a real app, this would generate a QR code
    toast.success("QR code generated! Hospital staff can scan this to access your information.");
  };
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Hospital Admission Forms</h1>
        <p className="text-gray-600">Pre-fill hospital admission forms to save time during check-in</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DashboardCard title="Patient Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact
                </label>
                <Input
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact Phone
                </label>
                <Input
                  id="emergencyPhone"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="primaryDoctor" className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Doctor
                </label>
                <Input
                  id="primaryDoctor"
                  name="primaryDoctor"
                  value={formData.primaryDoctor}
                  onChange={handleChange}
                />
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard title="Medical Information" className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">
                  Allergies
                </label>
                <Input
                  id="allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  placeholder="List any allergies you have"
                />
              </div>
              
              <div>
                <label htmlFor="currentMedications" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Medications
                </label>
                <Textarea
                  id="currentMedications"
                  name="currentMedications"
                  value={formData.currentMedications}
                  onChange={handleChange}
                  placeholder="List all medications you are currently taking"
                  className="resize-none h-20"
                />
              </div>
              
              <div>
                <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-1">
                  Medical History
                </label>
                <Textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  placeholder="Include any chronic conditions or major illnesses"
                  className="resize-none h-20"
                />
              </div>
              
              <div>
                <label htmlFor="surgicalHistory" className="block text-sm font-medium text-gray-700 mb-1">
                  Surgical History
                </label>
                <Input
                  id="surgicalHistory"
                  name="surgicalHistory"
                  value={formData.surgicalHistory}
                  onChange={handleChange}
                  placeholder="List any past surgeries with dates if known"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="smokingStatus" className="block text-sm font-medium text-gray-700 mb-1">
                    Smoking Status
                  </label>
                  <Input
                    id="smokingStatus"
                    name="smokingStatus"
                    value={formData.smokingStatus}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="alcoholUse" className="block text-sm font-medium text-gray-700 mb-1">
                    Alcohol Use
                  </label>
                  <Input
                    id="alcoholUse"
                    name="alcoholUse"
                    value={formData.alcoholUse}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard title="Insurance Information" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-1">
                  Insurance Provider
                </label>
                <Input
                  id="insuranceProvider"
                  name="insuranceProvider"
                  value={formData.insuranceProvider}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Policy Number
                </label>
                <Input
                  id="policyNumber"
                  name="policyNumber"
                  value={formData.policyNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard title="Additional Notes" className="mt-6">
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes for Hospital Staff
              </label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Include any additional information that may be relevant"
                className="resize-none h-32"
              />
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button onClick={handleGenerateForm} disabled={loading}>
                {loading ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span className="ml-2">Generating...</span>
                  </>
                ) : (
                  "Generate Form"
                )}
              </Button>
            </div>
          </DashboardCard>
        </div>
        
        <div className="lg:col-span-1">
          <DashboardCard title="Generated Forms">
            {formGenerated ? (
              <div>
                <div className="mb-6 p-4 bg-gray-50 rounded-md border border-gray-200">
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 text-primary mr-3" />
                    <div>
                      <h3 className="font-medium">Admission Form</h3>
                      <p className="text-sm text-gray-500">Generated just now</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center"
                      onClick={handleDownloadForm}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center"
                      onClick={handleGenerateQRCode}
                    >
                      <QrCode className="h-4 w-4 mr-2" />
                      Generate QR Code
                    </Button>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-md border border-green-200">
                  <QrCode className="h-24 w-24 mx-auto text-green-600 mb-4" />
                  <h3 className="font-medium text-green-800 mb-2">QR Code Ready!</h3>
                  <p className="text-sm text-green-700">
                    Hospital staff can scan this code to access your pre-filled information
                  </p>
                </div>
                
                <div className="mt-6 text-sm text-gray-500">
                  <p>Present this QR code upon arrival at the hospital. Staff will be able to access your information securely.</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="rounded-full bg-gray-100 p-3 mb-4">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No forms yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Complete the information and click "Generate Form" to create your hospital admission form.
                </p>
              </div>
            )}
          </DashboardCard>
          
          <DashboardCard title="Saved Forms" className="mt-6">
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-md flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">General Hospital Form</p>
                  <p className="text-xs text-gray-500">Last updated: April 10, 2025</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-md flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">City Medical Center</p>
                  <p className="text-xs text-gray-500">Last updated: March 22, 2025</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                <Plus className="h-4 w-4 mr-2" />
                Create New Form Template
              </Button>
            </div>
          </DashboardCard>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
            <h3 className="font-medium text-blue-800 mb-2">Did You Know?</h3>
            <p className="text-sm text-blue-700">
              Pre-filling your hospital forms can reduce check-in time by up to 15 minutes and helps ensure your medical information is accurate.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HospitalForms;
