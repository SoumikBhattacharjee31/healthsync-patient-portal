
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Search, Pill, Info, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Medications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [selectedMedication, setSelectedMedication] = useState<any>(null);
  
  // Mock alternative medications data
  const alternativeMedications = {
    "Lipitor": [
      {
        name: "Atorvastatin",
        type: "Generic",
        dosage: "10mg, 20mg, 40mg, 80mg",
        costRating: "$",
        description: "Generic version of Lipitor. Used to treat high cholesterol and to lower the risk of stroke, heart attack, or other heart complications."
      },
      {
        name: "Crestor",
        type: "Brand (Alternative)",
        dosage: "5mg, 10mg, 20mg, 40mg",
        costRating: "$$$",
        description: "Alternative statin medication. May be prescribed when atorvastatin causes side effects or isn't effective enough."
      },
      {
        name: "Simvastatin",
        type: "Generic (Alternative)",
        dosage: "5mg, 10mg, 20mg, 40mg",
        costRating: "$",
        description: "Different statin medication. Usually taken in the evening as it works better during sleep."
      }
    ],
    "Amoxicillin": [
      {
        name: "Augmentin",
        type: "Brand (Combination)",
        dosage: "500mg/125mg, 875mg/125mg",
        costRating: "$$",
        description: "Combines amoxicillin with clavulanic acid to make it effective against more types of bacteria."
      },
      {
        name: "Cefuroxime",
        type: "Generic (Alternative)",
        dosage: "250mg, 500mg",
        costRating: "$$",
        description: "A cephalosporin antibiotic that can be used when penicillin antibiotics aren't suitable."
      },
      {
        name: "Azithromycin",
        type: "Generic (Alternative)",
        dosage: "250mg, 500mg",
        costRating: "$$",
        description: "A macrolide antibiotic that's often prescribed for shorter treatment courses (3-5 days)."
      }
    ],
    "Lisinopril": [
      {
        name: "Enalapril",
        type: "Generic (Alternative)",
        dosage: "2.5mg, 5mg, 10mg, 20mg",
        costRating: "$",
        description: "Another ACE inhibitor that works similarly to lisinopril but may have slightly different side effects."
      },
      {
        name: "Losartan",
        type: "Generic (Alternative)",
        dosage: "25mg, 50mg, 100mg",
        costRating: "$",
        description: "An ARB medication that works differently than ACE inhibitors but achieves similar blood pressure control."
      },
      {
        name: "Amlodipine",
        type: "Generic (Different class)",
        dosage: "2.5mg, 5mg, 10mg",
        costRating: "$",
        description: "A calcium channel blocker that can be used instead of or alongside ACE inhibitors for blood pressure control."
      }
    ],
  };
  
  const commonMedications = [
    "Lipitor",
    "Amoxicillin",
    "Lisinopril",
    "Metformin",
    "Amlodipine",
    "Gabapentin",
    "Omeprazole"
  ];
  
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a medication name to search");
      return;
    }
    
    setLoading(true);
    setSelectedMedication(null);
    
    // Simulate API call to search for alternatives
    setTimeout(() => {
      // Check if searched medication exists in our mock data
      const matchKey = Object.keys(alternativeMedications).find(
        key => key.toLowerCase() === searchQuery.toLowerCase()
      );
      
      if (matchKey) {
        setSearchResults(alternativeMedications[matchKey as keyof typeof alternativeMedications]);
      } else {
        setSearchResults([]);
        toast.info("No alternatives found for this medication");
      }
      
      setLoading(false);
    }, 1500);
  };
  
  const handleSuggestionClick = (medication: string) => {
    setSearchQuery(medication);
    
    // Auto search after clicking a suggestion
    setLoading(true);
    setSelectedMedication(null);
    
    setTimeout(() => {
      setSearchResults(alternativeMedications[medication as keyof typeof alternativeMedications]);
      setLoading(false);
    }, 800);
  };
  
  const handleSelectMedication = (medication: any) => {
    setSelectedMedication(medication);
  };
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Alternative Medications</h1>
        <p className="text-gray-600">Explore generic and alternative options for your prescriptions</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <DashboardCard title="Find Alternatives" icon={<Search className="h-5 w-5" />}>
            <div className="mb-4">
              <label htmlFor="medication-search" className="block text-sm font-medium text-gray-700 mb-1">
                Enter Medication Name
              </label>
              <div className="flex">
                <Input
                  id="medication-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g., Lipitor"
                  className="rounded-r-none"
                />
                <Button 
                  onClick={handleSearch} 
                  disabled={loading}
                  className="rounded-l-none"
                >
                  {loading ? <LoadingSpinner size="sm" /> : <Search className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Common Medications:</p>
              <div className="flex flex-wrap gap-2">
                {commonMedications.map((med) => (
                  <Button
                    key={med}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => handleSuggestionClick(med)}
                  >
                    {med}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">Important Disclaimer</h3>
                  <p className="mt-1 text-xs text-yellow-700">
                    Always consult with your healthcare provider before switching medications. This information is for educational purposes only.
                  </p>
                </div>
              </div>
            </div>
          </DashboardCard>
          
          <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-medium text-lg mb-4 flex items-center">
              <Info className="h-5 w-5 text-primary mr-2" />
              Why Consider Alternatives?
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <span>Generic medications can be 80-85% less expensive than brand-name equivalents</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <span>Alternatives may cause fewer side effects for some patients</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <span>Some alternatives may be covered better by your insurance</span>
              </li>
              <li className="flex">
                <span className="font-bold mr-2">•</span>
                <span>Different medications within the same class may be more effective for your specific condition</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <DashboardCard 
            title={searchQuery ? `Alternatives for ${searchQuery}` : "Medication Alternatives"} 
            icon={<Pill className="h-5 w-5" />}
          >
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <LoadingSpinner size="lg" />
                <p className="mt-4 text-gray-600">Searching for alternatives...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dosage Options
                        </th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cost
                        </th>
                        <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {searchResults.map((med, index) => (
                        <tr key={index} className={selectedMedication === med ? "bg-blue-50" : ""}>
                          <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {med.name}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            {med.type}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            {med.dosage}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            {med.costRating}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleSelectMedication(med)}
                            >
                              Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {selectedMedication && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
                    <h3 className="font-medium text-lg text-blue-800 mb-2">{selectedMedication.name}</h3>
                    <p className="text-sm text-blue-700 mb-4">{selectedMedication.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-medium text-blue-800 uppercase">Type</h4>
                        <p className="text-sm text-blue-700">{selectedMedication.type}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-blue-800 uppercase">Dosage Options</h4>
                        <p className="text-sm text-blue-700">{selectedMedication.dosage}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-blue-800 uppercase">Cost Comparison</h4>
                        <p className="text-sm text-blue-700">{selectedMedication.costRating}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-blue-800 italic">
                      Discuss with your doctor if this alternative might be appropriate for your condition.
                    </p>
                  </div>
                )}
              </div>
            ) : searchQuery ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="rounded-full bg-gray-100 p-3 mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  We couldn't find alternatives for "{searchQuery}". Try another medication name.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="rounded-full bg-gray-100 p-3 mb-4">
                  <Pill className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Search for a medication</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Enter a medication name to find generic and alternative options.
                </p>
              </div>
            )}
          </DashboardCard>
          
          {searchResults.length > 0 && (
            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-medium text-lg mb-4">Talking to Your Doctor</h2>
              <p className="text-sm text-gray-700 mb-4">
                When discussing alternatives with your healthcare provider, consider asking:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>"Would a generic version of my medication work just as well for me?"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>"Are there any alternatives that might cause fewer side effects?"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>"Would any of these alternatives be better covered by my insurance?"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>"What are the pros and cons of switching to this alternative medication?"</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Medications;
