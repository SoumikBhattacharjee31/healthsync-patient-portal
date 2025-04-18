
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LineChart, BarChart } from "recharts";

const HealthTrends = () => {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("30");
  const [chartData, setChartData] = useState<any>(null);

  // Mock chart data
  const generateMockData = (days: number) => {
    // Top medications data
    const medications = [
      { name: "Lisinopril", count: 157 },
      { name: "Metformin", count: 132 },
      { name: "Amlodipine", count: 97 },
      { name: "Atorvastatin", count: 78 },
      { name: "Levothyroxine", count: 62 },
    ];

    // Daily medication adherence data
    const adherenceData = [];
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (days - i - 1));
      adherenceData.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        adherence: Math.floor(Math.random() * 30) + 70, // Random adherence between 70-100%
      });
    }

    // Health metrics data
    const metricsData = {
      bloodPressure: {
        systolic: Array.from({ length: 7 }, () => Math.floor(Math.random() * 30) + 110),
        diastolic: Array.from({ length: 7 }, () => Math.floor(Math.random() * 20) + 70),
        dates: Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (6 - i));
          return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }),
      },
      weight: {
        values: Array.from({ length: 7 }, () => Math.floor(Math.random() * 5) + 70),
        dates: Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (6 - i));
          return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }),
      },
    };

    return {
      medications,
      adherenceData,
      metricsData,
    };
  };

  useEffect(() => {
    setLoading(true);
    // Simulate API data fetch
    setTimeout(() => {
      const data = generateMockData(parseInt(timeRange, 10));
      setChartData(data);
      setLoading(false);
    }, 1500);
  }, [timeRange]);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Health Trends</h1>
        <p className="text-gray-600">View insights about your medications and health metrics</p>
      </div>

      <div className="flex justify-end mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Time Range:</span>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7 Days</SelectItem>
              <SelectItem value="30">30 Days</SelectItem>
              <SelectItem value="90">90 Days</SelectItem>
              <SelectItem value="180">6 Months</SelectItem>
              <SelectItem value="365">1 Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {/* Top Medications */}
          <DashboardCard title="Top 5 Medications in Your Area">
            <div className="h-80">
              <div className="bg-gray-50 p-4 rounded-md">
                {/* This is a placeholder for a bar chart */}
                <div className="h-60 w-full">
                  {chartData.medications.map((med: any, index: number) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-center mb-1">
                        <span className="text-sm font-medium">{med.name}</span>
                        <span className="ml-auto text-sm text-gray-500">{med.count} prescriptions</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${(med.count / chartData.medications[0].count) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Based on anonymized data from your local health system
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Most prescribed:</strong> Lisinopril (Used to treat high blood pressure and heart failure)
                </p>
              </div>
            </div>
          </DashboardCard>

          {/* Medication Adherence */}
          <DashboardCard title="Your Medication Adherence">
            <div className="h-80">
              <div className="bg-gray-50 p-4 rounded-md">
                {/* This is a placeholder for a line chart */}
                <div className="h-60 w-full">
                  <div className="relative h-full">
                    <div className="absolute top-0 left-0 w-full h-full flex items-end">
                      {chartData.adherenceData.map((data: any, index: number) => (
                        <div 
                          key={index} 
                          className="flex-1 flex flex-col items-center justify-end h-full"
                        >
                          <div 
                            className="w-4/5 bg-primary rounded-t-sm" 
                            style={{ height: `${data.adherence}%` }}
                          ></div>
                          <span className="text-xs mt-1 transform -rotate-45 origin-top-left">{data.date}</span>
                        </div>
                      ))}
                    </div>
                    {/* Y-axis labels */}
                    <div className="absolute top-0 left-0 h-full flex flex-col justify-between py-2">
                      <span className="text-xs text-gray-500">100%</span>
                      <span className="text-xs text-gray-500">75%</span>
                      <span className="text-xs text-gray-500">50%</span>
                      <span className="text-xs text-gray-500">25%</span>
                      <span className="text-xs text-gray-500">0%</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Your percentage of medication doses taken on time
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Average adherence:</strong> 83% (Good! Try to aim for 90%+)
                </p>
              </div>
            </div>
          </DashboardCard>

          {/* Health Metrics */}
          <DashboardCard title="Your Health Metrics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Blood Pressure (Last 7 Days)</h3>
                <div className="bg-gray-50 p-4 rounded-md h-60">
                  {/* Blood pressure chart placeholder */}
                  <div className="relative h-full">
                    <div className="absolute top-0 left-0 w-full h-full flex">
                      {chartData.metricsData.bloodPressure.dates.map((date: string, index: number) => (
                        <div key={index} className="flex-1 relative">
                          {/* Systolic */}
                          <div 
                            className="absolute w-2 bg-red-400 rounded-t-sm left-1/2 transform -translate-x-1/2"
                            style={{ 
                              bottom: '0', 
                              height: `${(chartData.metricsData.bloodPressure.systolic[index] - 70) / 80 * 100}%` 
                            }}
                          ></div>
                          {/* Diastolic */}
                          <div 
                            className="absolute w-2 bg-blue-400 rounded-t-sm left-1/2 transform -translate-x-1/2 translate-x-3"
                            style={{ 
                              bottom: '0', 
                              height: `${(chartData.metricsData.bloodPressure.diastolic[index] - 70) / 80 * 100}%` 
                            }}
                          ></div>
                          {/* Date label */}
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs mt-1 pt-2">{date}</span>
                        </div>
                      ))}
                    </div>
                    {/* Legend */}
                    <div className="absolute top-2 right-2 flex items-center text-xs">
                      <span className="inline-block w-3 h-3 bg-red-400 mr-1"></span>
                      <span className="mr-3">Systolic</span>
                      <span className="inline-block w-3 h-3 bg-blue-400 mr-1"></span>
                      <span>Diastolic</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Weight (Last 7 Days)</h3>
                <div className="bg-gray-50 p-4 rounded-md h-60">
                  {/* Weight chart placeholder */}
                  <div className="relative h-full">
                    <div className="absolute top-0 left-0 w-full h-full flex">
                      {chartData.metricsData.weight.dates.map((date: string, index: number, arr: any[]) => {
                        const value = chartData.metricsData.weight.values[index];
                        const nextValue = index < arr.length - 1 ? chartData.metricsData.weight.values[index + 1] : value;
                        const percent = (value - 65) / 15 * 100;
                        const nextPercent = (nextValue - 65) / 15 * 100;
                        
                        return (
                          <div key={index} className="flex-1 relative" style={{ height: '100%' }}>
                            {/* Point */}
                            <div 
                              className="absolute w-3 h-3 bg-primary rounded-full z-10"
                              style={{ 
                                bottom: `${percent}%`,
                                left: '50%',
                                transform: 'translate(-50%, 50%)'
                              }}
                            ></div>
                            
                            {/* Line to next point */}
                            {index < arr.length - 1 && (
                              <div 
                                className="absolute h-0.5 bg-primary z-0"
                                style={{ 
                                  bottom: `${percent}%`,
                                  left: '50%',
                                  width: '100%',
                                  transform: `translate(0, 0) rotate(${Math.atan2((nextPercent - percent), 100) * (180/Math.PI)}deg)`,
                                  transformOrigin: 'left center'
                                }}
                              ></div>
                            )}
                            
                            {/* Date label */}
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs mt-1 pt-2">{date}</span>
                          </div>
                        );
                      })}
                    </div>
                    {/* Y-axis labels */}
                    <div className="absolute top-0 left-0 h-full flex flex-col justify-between py-2">
                      <span className="text-xs text-gray-500">80 kg</span>
                      <span className="text-xs text-gray-500">75 kg</span>
                      <span className="text-xs text-gray-500">70 kg</span>
                      <span className="text-xs text-gray-500">65 kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button className="text-sm">Track a new metric</Button>
            </div>
          </DashboardCard>
        </div>
      )}

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> The data shown here is for demonstration purposes only. In a real application, this would display actual health data collected from your prescriptions and health records.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HealthTrends;
