
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  AlertTriangle,
  PlusCircle,
  Calendar,
  Clock,
  ThermometerIcon,
  Activity,
  FileText,
  ChevronDown,
  ChevronUp,
  Edit,
  Trash2
} from "lucide-react";
import { toast } from "sonner";

// Define symptom severity levels
const severityLevels = [
  { value: "mild", label: "Mild", color: "bg-green-100 text-green-800 border-green-200" },
  { value: "moderate", label: "Moderate", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { value: "severe", label: "Severe", color: "bg-red-100 text-red-800 border-red-200" },
];

const Symptoms = () => {
  const [newSymptom, setNewSymptom] = useState({
    name: "",
    description: "",
    severity: "moderate",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toTimeString().substring(0, 5),
  });
  
  // Mock data for symptoms log
  const [symptoms, setSymptoms] = useState([
    {
      id: 1,
      name: "Headache",
      description: "Dull pain in the forehead and temples. Pain seems to worsen when looking at screens for too long.",
      severity: "moderate",
      date: "2025-04-17",
      time: "14:30",
      expanded: false,
    },
    {
      id: 2,
      name: "Fatigue",
      description: "Feeling unusually tired throughout the day, even after a full night's sleep.",
      severity: "mild",
      date: "2025-04-15",
      time: "08:45",
      expanded: false,
    },
    {
      id: 3,
      name: "Joint Pain",
      description: "Sharp pain in right knee, especially when walking up stairs or after sitting for long periods.",
      severity: "severe",
      date: "2025-04-10",
      time: "19:15",
      expanded: false,
    },
  ]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewSymptom((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = () => {
    // Validate form
    if (!newSymptom.name) {
      toast.error("Please enter a symptom name.");
      return;
    }
    
    // Create new symptom entry
    const newEntry = {
      id: Date.now(),
      ...newSymptom,
      expanded: false,
    };
    
    // Add to symptoms list
    setSymptoms((prev) => [newEntry, ...prev]);
    
    // Reset form
    setNewSymptom({
      name: "",
      description: "",
      severity: "moderate",
      date: new Date().toISOString().split("T")[0],
      time: new Date().toTimeString().substring(0, 5),
    });
    
    toast.success("Symptom logged successfully!");
  };
  
  const toggleExpand = (id: number) => {
    setSymptoms((prev) =>
      prev.map((symptom) =>
        symptom.id === id ? { ...symptom, expanded: !symptom.expanded } : symptom
      )
    );
  };
  
  const deleteSymptom = (id: number) => {
    setSymptoms((prev) => prev.filter((symptom) => symptom.id !== id));
    toast.success("Symptom deleted successfully.");
  };
  
  const getSeverityClass = (severity: string) => {
    const level = severityLevels.find((s) => s.value === severity);
    return level ? level.color : "bg-gray-100 text-gray-800 border-gray-200";
  };
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Symptom Tracker</h1>
        <p className="text-gray-600">Log and track your symptoms to share with healthcare providers</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <DashboardCard 
            title="Log New Symptom" 
            icon={<PlusCircle className="h-5 w-5" />}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="symptom-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Symptom Name*
                </label>
                <Input
                  id="symptom-name"
                  name="name"
                  value={newSymptom.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Headache, Cough, Fatigue"
                />
              </div>
              
              <div>
                <label htmlFor="symptom-description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <Textarea
                  id="symptom-description"
                  name="description"
                  value={newSymptom.description}
                  onChange={handleInputChange}
                  placeholder="Describe your symptom in detail (location, triggers, etc.)"
                  className="resize-none h-24"
                />
              </div>
              
              <div>
                <label htmlFor="symptom-severity" className="block text-sm font-medium text-gray-700 mb-1">
                  Severity
                </label>
                <div className="flex space-x-2">
                  {severityLevels.map((level) => (
                    <label
                      key={level.value}
                      className={`flex-1 border rounded-md p-2 text-center text-sm cursor-pointer ${
                        newSymptom.severity === level.value
                          ? level.color
                          : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="severity"
                        value={level.value}
                        checked={newSymptom.severity === level.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      {level.label}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="symptom-date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <Input
                    id="symptom-date"
                    name="date"
                    type="date"
                    value={newSymptom.date}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="symptom-time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <Input
                    id="symptom-time"
                    name="time"
                    type="time"
                    value={newSymptom.time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="pt-2">
                <Button onClick={handleSubmit} className="w-full">
                  Log Symptom
                </Button>
              </div>
            </div>
          </DashboardCard>
          
          <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-medium text-lg mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
              When to Seek Medical Attention
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Sudden severe headache or chest pain</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Difficulty breathing or shortness of breath</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Sudden confusion, dizziness, or changes in vision</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Persistent high fever not responding to medication</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">•</span>
                <span>Symptoms that significantly worsen over a short period</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">
              If you experience any of these symptoms, contact your healthcare provider immediately or visit an emergency room.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <DashboardCard 
            title="Symptoms Log" 
            icon={<FileText className="h-5 w-5" />}
            footer={
              symptoms.length > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {symptoms.length} symptom{symptoms.length !== 1 ? "s" : ""} logged
                  </span>
                  <Button variant="outline" size="sm">
                    Export Log
                  </Button>
                </div>
              )
            }
          >
            {symptoms.length > 0 ? (
              <div className="space-y-4">
                {symptoms.map((symptom) => (
                  <div 
                    key={symptom.id} 
                    className="border rounded-md overflow-hidden"
                  >
                    <div 
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 cursor-pointer"
                      onClick={() => toggleExpand(symptom.id)}
                    >
                      <div className="flex items-start sm:items-center">
                        <div className="flex-shrink-0 mr-4">
                          {symptom.severity === "mild" && (
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                              <ThermometerIcon className="h-5 w-5 text-green-600" />
                            </div>
                          )}
                          {symptom.severity === "moderate" && (
                            <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                              <Activity className="h-5 w-5 text-yellow-600" />
                            </div>
                          )}
                          {symptom.severity === "severe" && (
                            <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-md font-medium">{symptom.name}</h3>
                          <div className="flex items-center mt-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {new Date(symptom.date).toLocaleDateString()}
                            <Clock className="h-3 w-3 mx-1 ml-3" />
                            {symptom.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center mt-2 sm:mt-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 ${getSeverityClass(symptom.severity)}`}>
                          {severityLevels.find(s => s.value === symptom.severity)?.label}
                        </span>
                        {symptom.expanded ? <ChevronUp className="h-5 w-5 text-gray-400" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                      </div>
                    </div>
                    
                    {symptom.expanded && (
                      <div className="px-4 pb-4 pt-2 bg-gray-50 border-t">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Description:</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {symptom.description || "No description provided."}
                        </p>
                        
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm" className="text-gray-600">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-gray-600"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteSymptom(symptom.id);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No symptoms logged</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Start tracking your symptoms by using the form on the left.
                </p>
              </div>
            )}
          </DashboardCard>
          
          <DashboardCard 
            title="Symptom Patterns" 
            className="mt-6"
          >
            <div className="text-center py-6">
              <p className="text-gray-600 mb-4">
                Track your symptoms over time to identify patterns and triggers.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-500">
                  Symptom visualization charts will appear here as you log more data.
                </p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <h3 className="text-sm font-medium text-gray-700">Tracking Tips:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Be consistent in logging symptoms to identify patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Note potential triggers (foods, activities, stress, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">•</span>
                  <span>Track the effectiveness of treatments or medications</span>
                </li>
              </ul>
            </div>
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Symptoms;
