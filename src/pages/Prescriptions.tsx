
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { Upload, File, Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Prescriptions = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [extractedData, setExtractedData] = useState<any>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Create preview for image files
      if (selectedFile.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            setPreview(e.target.result as string);
          }
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
        toast.error("Please select an image file.");
      }
      
      // Reset extracted data when new file is selected
      setExtractedData(null);
    }
  };
  
  const handleExtract = () => {
    if (!file) {
      toast.error("Please upload a prescription image first.");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call to extract data from prescription
    setTimeout(() => {
      // Mock extracted data
      const data = {
        patientName: "John Doe",
        doctorName: "Dr. Sarah Miller",
        date: "April 15, 2025",
        medications: [
          {
            name: "Amoxicillin",
            dosage: "500mg",
            frequency: "3 times daily",
            duration: "7 days"
          },
          {
            name: "Ibuprofen",
            dosage: "400mg",
            frequency: "As needed",
            duration: "For pain"
          }
        ]
      };
      
      setExtractedData(data);
      setLoading(false);
      toast.success("Prescription data extracted successfully!");
    }, 2000);
  };
  
  const handleSave = () => {
    if (!extractedData) return;
    
    toast.success("Prescription saved to your records!");
    
    // Reset the form
    setFile(null);
    setPreview(null);
    setExtractedData(null);
  };
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upload Prescription</h1>
        <p className="text-gray-600">Upload your prescription images to extract and save medication information</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Upload Prescription Image">
          <div className="mb-6">
            <label
              htmlFor="file-upload"
              className={`relative cursor-pointer rounded-md bg-white font-semibold text-primary hover:text-secondary flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-12 text-center ${
                file ? "opacity-80" : ""
              }`}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <span className="text-lg font-medium text-gray-900">Upload your prescription</span>
              <span className="mt-2 text-sm text-gray-500">
                Drag and drop your files here or click to upload
              </span>
              <span className="mt-1 text-xs text-gray-500">
                Supports: JPG, PNG, JPEG, HEIC (Max 5MB)
              </span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={handleFileChange}
              />
            </label>
          </div>
          
          {file && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">Selected file:</h3>
              <div className="mt-2 flex items-center">
                <File className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-500">{file.name}</span>
              </div>
            </div>
          )}
          
          {preview && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Preview:</h3>
              <div className="relative rounded-md overflow-hidden border border-gray-300">
                <img
                  src={preview}
                  alt="Prescription preview"
                  className="w-full h-auto max-h-64 object-contain"
                />
              </div>
            </div>
          )}
          
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleExtract}
              disabled={!file || loading}
              className="ml-3"
            >
              {loading ? (
                <>
                  <LoadingSpinner size="sm" />
                  <span className="ml-2">Extracting...</span>
                </>
              ) : (
                "Extract Data"
              )}
            </Button>
          </div>
        </DashboardCard>
        
        <DashboardCard title="Extracted Data">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <LoadingSpinner size="lg" />
              <p className="mt-4 text-gray-600">Analyzing prescription...</p>
            </div>
          ) : extractedData ? (
            <div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      Successfully extracted prescription data.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Patient Information</h3>
                  <div className="mt-2 bg-gray-50 p-3 rounded-md">
                    <p className="text-sm text-gray-600">Patient: {extractedData.patientName}</p>
                    <p className="text-sm text-gray-600">Doctor: {extractedData.doctorName}</p>
                    <p className="text-sm text-gray-600">Date: {extractedData.date}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Medications</h3>
                  <div className="mt-2 space-y-3">
                    {extractedData.medications.map((med: any, index: number) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-md">
                        <p className="text-sm font-medium text-gray-900">{med.name}</p>
                        <p className="text-sm text-gray-600">Dosage: {med.dosage}</p>
                        <p className="text-sm text-gray-600">Frequency: {med.frequency}</p>
                        <p className="text-sm text-gray-600">Instructions: {med.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        Please verify that the extracted information is correct before saving.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setExtractedData(null)}>
                  Discard
                </Button>
                <Button onClick={handleSave}>
                  Save to Records
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="rounded-full bg-gray-100 p-3 mb-4">
                <File className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No data yet</h3>
              <p className="mt-1 text-sm text-gray-500">
                Upload a prescription and click "Extract Data" to see the extracted information here.
              </p>
            </div>
          )}
        </DashboardCard>
      </div>
      
      <div className="mt-8">
        <DashboardCard title="Previous Prescriptions">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medications
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    April 15, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Dr. Sarah Miller
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-1">
                      Amoxicillin 500mg
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-1">
                      Ibuprofen 400mg
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-900">
                      View
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    March 22, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Dr. Robert Johnson
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-1">
                      Lisinopril 10mg
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-1">
                      Metformin 500mg
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-900">
                      View
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default Prescriptions;
