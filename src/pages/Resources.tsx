
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Heart, Brain, Stethoscope, FileText, ExternalLink } from "lucide-react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Mock health resources data
  const healthResources = [
    {
      id: 1,
      title: "Understanding Hypertension",
      category: "Heart Health",
      summary: "Learn about the causes, symptoms, and management of high blood pressure.",
      link: "#",
      icon: Heart,
    },
    {
      id: 2,
      title: "Type 2 Diabetes Management",
      category: "Endocrinology",
      summary: "Comprehensive guide to managing type 2 diabetes through diet, exercise, and medication.",
      link: "#",
      icon: FileText,
    },
    {
      id: 3,
      title: "Anxiety and Stress Management",
      category: "Mental Health",
      summary: "Techniques and strategies to manage anxiety and stress in daily life.",
      link: "#",
      icon: Brain,
    },
    {
      id: 4,
      title: "The Importance of Vaccination",
      category: "Preventive Care",
      summary: "Understanding how vaccines work and why they're important for public health.",
      link: "#",
      icon: Stethoscope,
    },
    {
      id: 5,
      title: "Healthy Eating Guidelines",
      category: "Nutrition",
      summary: "Evidence-based nutrition recommendations for maintaining good health.",
      link: "#",
      icon: Heart,
    },
    {
      id: 6,
      title: "Sleep Hygiene and Health",
      category: "Wellness",
      summary: "The science of sleep and tips for improving sleep quality.",
      link: "#",
      icon: Brain,
    },
  ];
  
  // Featured resources
  const featuredResources = healthResources.slice(0, 3);
  
  // Health categories
  const categories = [
    { name: "Heart Health", icon: Heart },
    { name: "Mental Health", icon: Brain },
    { name: "Preventive Care", icon: Stethoscope },
    { name: "Nutrition", icon: Heart },
    { name: "Medications", icon: FileText },
  ];
  
  const handleSearch = () => {
    setHasSearched(true);
    
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    // Filter resources based on search query
    const filteredResults = healthResources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.summary.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(filteredResults);
  };
  
  const handleCategoryClick = (category: string) => {
    setSearchQuery(category);
    
    // Filter resources based on selected category
    const filteredResults = healthResources.filter(
      (resource) => resource.category === category
    );
    
    setHasSearched(true);
    setSearchResults(filteredResults);
  };
  
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Educational Resources</h1>
        <p className="text-gray-600">Access reliable health information and educational materials</p>
      </div>
      
      <div className="mb-8">
        <div className="bg-gradient-to-r from-health-soft-blue to-health-soft-gray rounded-lg p-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Search Health Topics</h2>
            <p className="text-gray-600 mb-4">
              Find reliable information on conditions, treatments, and wellness topics
            </p>
            <div className="flex">
              <Input
                placeholder="e.g., Hypertension, Diabetes, Nutrition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-r-none"
              />
              <Button onClick={handleSearch} className="rounded-l-none">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {hasSearched ? (
        <div className="mb-8">
          <DashboardCard title={`Search Results for "${searchQuery}"`} icon={<Search className="h-5 w-5" />}>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((resource) => (
                  <div key={resource.id} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <resource.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-gray-500">{resource.category}</span>
                    </div>
                    <h3 className="font-medium mb-2">{resource.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{resource.summary}</p>
                    <a
                      href={resource.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Read More
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="rounded-full bg-gray-100 p-3 inline-flex mb-4">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No results found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  We couldn't find any resources matching "{searchQuery}". Try another search term.
                </p>
              </div>
            )}
          </DashboardCard>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-2 bg-primary"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <resource.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-xs font-medium text-gray-500">{resource.category}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{resource.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{resource.summary}</p>
                    <a
                      href={resource.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Read More
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          <DashboardCard title="Health Topics A-Z" icon={<BookOpen className="h-5 w-5" />}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter) => (
                <button
                  key={letter}
                  className="bg-gray-50 hover:bg-gray-100 rounded-md p-4 text-center transition-colors"
                >
                  <span className="text-xl font-semibold text-gray-700">{letter}</span>
                </button>
              ))}
            </div>
          </DashboardCard>
        </>
      )}
      
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Looking for More Resources?</h2>
        <p className="text-gray-600 mb-6">
          HealthSync partners with trusted healthcare organizations to provide you with reliable information. For more extensive resources, consider visiting:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://www.cdc.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 border rounded-md hover:bg-gray-50 transition-colors"
          >
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <Stethoscope className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Centers for Disease Control and Prevention (CDC)</h3>
              <p className="text-sm text-gray-600">Reliable health information from the U.S. national public health agency</p>
            </div>
          </a>
          <a
            href="https://www.nih.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 border rounded-md hover:bg-gray-50 transition-colors"
          >
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">National Institutes of Health (NIH)</h3>
              <p className="text-sm text-gray-600">The nation's medical research agency with health information for the public</p>
            </div>
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Resources;
