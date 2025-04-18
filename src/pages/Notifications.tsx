
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Calendar, 
  Clock, 
  Pill, 
  Trash2, 
  PlusCircle, 
  Edit,
  CheckCircle2,
  XCircle 
} from "lucide-react";
import { toast } from "sonner";

const Notifications = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [medicationForm, setMedicationForm] = useState({
    name: "",
    dosage: "",
    frequency: "",
    time: "",
    notes: ""
  });
  const [appointmentForm, setAppointmentForm] = useState({
    doctor: "",
    specialty: "",
    date: "",
    time: "",
    location: ""
  });
  
  // Mock data for existing reminders
  const [medicationReminders, setMedicationReminders] = useState([
    {
      id: 1,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Daily",
      time: "08:00",
      notes: "Take with water"
    },
    {
      id: 2,
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      time: "09:00, 21:00",
      notes: "Take with food"
    },
    {
      id: 3,
      name: "Vitamin D",
      dosage: "1000 IU",
      frequency: "Daily",
      time: "09:00",
      notes: ""
    }
  ]);
  
  const [appointmentReminders, setAppointmentReminders] = useState([
    {
      id: 1,
      doctor: "Dr. Sarah Miller",
      specialty: "Cardiology",
      date: "2025-04-28",
      time: "10:30",
      location: "City Medical Center"
    },
    {
      id: 2,
      doctor: "Dr. Robert Johnson",
      specialty: "Endocrinology",
      date: "2025-05-15",
      time: "14:00",
      location: "Community Health Clinic"
    }
  ]);
  
  const handleMedicationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMedicationForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAppointmentForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleAddMedication = () => {
    // Validate form
    if (!medicationForm.name || !medicationForm.dosage || !medicationForm.time) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    // Add new medication reminder
    const newReminder = {
      id: Date.now(),
      ...medicationForm
    };
    
    setMedicationReminders((prev) => [...prev, newReminder]);
    
    // Reset form
    setMedicationForm({
      name: "",
      dosage: "",
      frequency: "",
      time: "",
      notes: ""
    });
    
    toast.success("Medication reminder added successfully!");
  };
  
  const handleAddAppointment = () => {
    // Validate form
    if (!appointmentForm.doctor || !appointmentForm.date || !appointmentForm.time) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    // Add new appointment reminder
    const newReminder = {
      id: Date.now(),
      ...appointmentForm
    };
    
    setAppointmentReminders((prev) => [...prev, newReminder]);
    
    // Reset form
    setAppointmentForm({
      doctor: "",
      specialty: "",
      date: "",
      time: "",
      location: ""
    });
    
    toast.success("Appointment reminder added successfully!");
  };
  
  const handleDeleteMedication = (id: number) => {
    setMedicationReminders((prev) => prev.filter((reminder) => reminder.id !== id));
    toast.success("Medication reminder deleted.");
  };
  
  const handleDeleteAppointment = (id: number) => {
    setAppointmentReminders((prev) => prev.filter((reminder) => reminder.id !== id));
    toast.success("Appointment reminder deleted.");
  };
  
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    if (!notificationsEnabled) {
      toast.success("Notifications enabled.");
    } else {
      toast.info("Notifications disabled.");
    }
  };
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Notifications & Reminders</h1>
        <p className="text-gray-600">Manage your medication schedule and appointment reminders</p>
      </div>
      
      <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="h-6 w-6 text-primary mr-3" />
            <div>
              <h2 className="text-lg font-semibold">Notification Settings</h2>
              <p className="text-sm text-gray-600">Control how and when you receive reminders</p>
            </div>
          </div>
          <Switch checked={notificationsEnabled} onCheckedChange={toggleNotifications} />
        </div>
        
        {notificationsEnabled && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <input
                id="email"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="email" className="text-sm text-gray-700">
                Email Notifications
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                id="push"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="push" className="text-sm text-gray-700">
                Push Notifications
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                id="sms"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="sms" className="text-sm text-gray-700">
                SMS Notifications
              </label>
            </div>
          </div>
        )}
      </div>
      
      <Tabs defaultValue="medications">
        <TabsList className="mb-6">
          <TabsTrigger value="medications" className="flex items-center">
            <Pill className="h-4 w-4 mr-2" />
            Medication Reminders
          </TabsTrigger>
          <TabsTrigger value="appointments" className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Appointment Reminders
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="medications">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DashboardCard 
                title="Medication Schedule" 
                icon={<Pill className="h-5 w-5" />}
              >
                {medicationReminders.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Medication
                          </th>
                          <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Dosage
                          </th>
                          <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Schedule
                          </th>
                          <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Notes
                          </th>
                          <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {medicationReminders.map((reminder) => (
                          <tr key={reminder.id}>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {reminder.name}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {reminder.dosage}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                              {reminder.frequency}, {reminder.time}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                              {reminder.notes || "-"}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-600 hover:text-gray-900"
                                onClick={() => handleDeleteMedication(reminder.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No medication reminders set.</p>
                  </div>
                )}
              </DashboardCard>
            </div>
            
            <div className="lg:col-span-1">
              <DashboardCard 
                title="Add Medication Reminder" 
                icon={<PlusCircle className="h-5 w-5" />}
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Medication Name*
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={medicationForm.name}
                      onChange={handleMedicationChange}
                      placeholder="e.g., Lisinopril"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dosage" className="block text-sm font-medium text-gray-700 mb-1">
                      Dosage*
                    </label>
                    <Input
                      id="dosage"
                      name="dosage"
                      value={medicationForm.dosage}
                      onChange={handleMedicationChange}
                      placeholder="e.g., 10mg"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                      Frequency
                    </label>
                    <Input
                      id="frequency"
                      name="frequency"
                      value={medicationForm.frequency}
                      onChange={handleMedicationChange}
                      placeholder="e.g., Daily, Twice daily"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Time(s)*
                    </label>
                    <Input
                      id="time"
                      name="time"
                      value={medicationForm.time}
                      onChange={handleMedicationChange}
                      placeholder="e.g., 08:00 or 08:00, 20:00"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Notes
                    </label>
                    <Input
                      id="notes"
                      name="notes"
                      value={medicationForm.notes}
                      onChange={handleMedicationChange}
                      placeholder="e.g., Take with food"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button onClick={handleAddMedication} className="w-full">
                      Add Medication Reminder
                    </Button>
                  </div>
                </div>
              </DashboardCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="appointments">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <DashboardCard 
                title="Appointment Schedule" 
                icon={<Calendar className="h-5 w-5" />}
              >
                {appointmentReminders.length > 0 ? (
                  <div className="space-y-4">
                    {appointmentReminders.map((appointment) => (
                      <div 
                        key={appointment.id} 
                        className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-md"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="bg-primary/10 rounded-full p-3">
                              <Calendar className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-md font-medium">{appointment.doctor}</h3>
                            <p className="text-sm text-gray-500">{appointment.specialty}</p>
                            <div className="flex items-center mt-1 text-sm">
                              <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                              <span>
                                {new Date(appointment.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </span>
                              <Clock className="h-4 w-4 text-gray-400 mx-1 ml-3" />
                              <span>{appointment.time}</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{appointment.location}</p>
                          </div>
                        </div>
                        <div className="flex mt-4 md:mt-0 space-x-2">
                          <Button variant="outline" size="sm" className="text-gray-600">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-600"
                            onClick={() => handleDeleteAppointment(appointment.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No appointment reminders set.</p>
                  </div>
                )}
              </DashboardCard>
            </div>
            
            <div className="lg:col-span-1">
              <DashboardCard 
                title="Add Appointment Reminder" 
                icon={<PlusCircle className="h-5 w-5" />}
              >
                <div className="space-y-4">
                  <div>
                    <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                      Doctor Name*
                    </label>
                    <Input
                      id="doctor"
                      name="doctor"
                      value={appointmentForm.doctor}
                      onChange={handleAppointmentChange}
                      placeholder="e.g., Dr. Smith"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                      Specialty
                    </label>
                    <Input
                      id="specialty"
                      name="specialty"
                      value={appointmentForm.specialty}
                      onChange={handleAppointmentChange}
                      placeholder="e.g., Cardiology"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date*
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={appointmentForm.date}
                      onChange={handleAppointmentChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Time*
                    </label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={appointmentForm.time}
                      onChange={handleAppointmentChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <Input
                      id="location"
                      name="location"
                      value={appointmentForm.location}
                      onChange={handleAppointmentChange}
                      placeholder="e.g., City Medical Center"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button onClick={handleAddAppointment} className="w-full">
                      Add Appointment Reminder
                    </Button>
                  </div>
                </div>
              </DashboardCard>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-200">
                <h3 className="font-medium text-blue-800 mb-2">Reminder Tips</h3>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <span>Set medication reminders for the same time each day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <span>Add doctor appointment reminders at least a week in advance</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <span>Avoid scheduling multiple medication reminders at the same time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Notifications;
