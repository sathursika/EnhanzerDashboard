import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  ShoppingCart, 
  Package, 
  Factory, 
  ShoppingBag,
  DollarSign,
  Building2,
  Headphones,
  UserCheck,
  BarChart2,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Bell,
  Settings,
  Star,
  FileText,
  UserMinus,
  Trash2,
  Filter,
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  
  const sidebarItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Admin' },
    { icon: <Users className="w-5 h-5" />, label: 'Core' },
    { icon: <ShoppingCart className="w-5 h-5" />, label: 'Procurement' },
    { icon: <Package className="w-5 h-5" />, label: 'Inventory' },
    { icon: <Factory className="w-5 h-5" />, label: 'Manufacture' },
    { icon: <ShoppingBag className="w-5 h-5" />, label: 'Sales' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Finance' },
    { icon: <Building2 className="w-5 h-5" />, label: 'Assets' },
    { icon: <Headphones className="w-5 h-5" />, label: 'Services' },
    { icon: <UserCheck className="w-5 h-5" />, label: 'CRM' },
    { icon: <BarChart2 className="w-5 h-5" />, label: 'Analytics' }
  ];

  const userData = [
    {
      firstName: "John",
      lastName: "Doe",
      address: "123 Elm Street",
      mobile: "555-1234",
      email: "john.doe@example.com",
      department: "Sales",
      designation: "Manager",
      updated: "2024-05-08 1:45PM",
      initial: "J"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      address: "456 Oak Avenue",
      mobile: "555-5678",
      email: "jane.smith@example.com",
      department: "Marketing",
      designation: "Director",
      updated: "2024-03-08 2:10PM",
      initial: "S"
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      address: "789 Pine Road",
      mobile: "555-8765",
      email: "alice.johnson@example.com",
      department: "HR",
      designation: "Coordinator",
      updated: "2024-03-08 2:30PM",
      initial: "J"
    },
    {
      firstName: "Bob",
      lastName: "Brown",
      address: "321 Maple Lane",
      mobile: "555-2345",
      email: "bob.brown@example.com",
      department: "IT",
      designation: "Technician",
      updated: "2024-03-08 3:00PM",
      initial: "B"
    },
    {
      firstName: "Charlie",
      lastName: "Davis",
      address: "654 Birch Boulevard",
      mobile: "555-3456",
      email: "charlie.davis@example.com",
      department: "Finance",
      designation: "Analyst",
      updated: "2024-03-08 3:15PM",
      initial: "B"
    },
    {
      firstName: "Eve",
      lastName: "Miller",
      address: "987 Cedar Street",
      mobile: "555-4567",
      email: "eve.miller@example.com",
      department: "Operations",
      designation: "Supervisor",
      updated: "2024-03-08 3:30PM",
      initial: "J"
    },
    {
      firstName: "Frank",
      lastName: "Wilson",
      address: "321 Spruce Way",
      mobile: "555-5678",
      email: "frank.wilson@example.com",
      department: "Legal",
      designation: "Consultant",
      updated: "2024-03-08 3:45PM",
      initial: "J"
    },
    {
      firstName: "Grace",
      lastName: "Lee",
      address: "654 Palm Drive",
      mobile: "555-6789",
      email: "grace.lee@example.com",
      department: "Engineering",
      designation: "Developer",
      updated: "2024-03-08 4:00PM",
      initial: "J"
    },
    {
      firstName: "Henry",
      lastName: "Taylor",
      address: "987 Fir Street",
      mobile: "555-7890",
      email: "henry.taylor@example.com",
      department: "R&D",
      designation: "Scientist",
      updated: "2024-03-08 4:15PM",
      initial: "A"
    },
    {
      firstName: "Isabel",
      lastName: "Anderson",
      address: "123 Aspen Court",
      mobile: "555-8901",
      email: "isabel.anderson@example.com",
      department: "Customer Support",
      designation: "Agent",
      updated: "2024-03-08 4:30PM",
      initial: "J"
    },
    {
      firstName: "Jack",
      lastName: "Thomas",
      address: "456 Cypress Avenue",
      mobile: "555-9012",
      email: "jack.thomas@example.com",
      department: "Quality Assurance",
      designation: "Inspector",
      updated: "2024-03-08 4:45PM",
      initial: "J"
    },
    {
      firstName: "Karen",
      lastName: "Jackson",
      address: "789 Redwood Road",
      mobile: "555-0123",
      email: "karen.jackson@example.com",
      department: "Logistics",
      designation: "Coordinator",
      updated: "2024-03-08 5:00PM",
      initial: "J"
    }
  ];

  const getInitialBgColor = (initial) => {
    const colors = {
      'J': 'bg-blue-500',
      'S': 'bg-green-500',
      'B': 'bg-purple-500',
      'A': 'bg-yellow-500',
    };
    return colors[initial] || 'bg-gray-500';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
  className={`${sidebarExpanded ? 'w-48' : 'w-16'} text-white transition-all duration-300 ease-in-out`}
  style={{
    backgroundImage: 'linear-gradient(to bottom, #000428, #004e92)'
  }}
  onMouseEnter={() => setSidebarExpanded(true)}
  onMouseLeave={() => setSidebarExpanded(false)}
>

        <div className="flex flex-col py-4 space-y-4">
          {sidebarItems.map((item, index) => (
            <div key={index} className="flex items-center px-4 py-2 hover:bg-blue-800 cursor-pointer">
              <div className="flex items-center">
                {item.icon}
                <span className={`ml-2 whitespace-nowrap ${sidebarExpanded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-blue-900 text-white p-4 flex justify-between items-center" style={{
    backgroundImage: 'linear-gradient(to bottom, #000428, #004e92)'
  }}>
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold" style={{marginRight:'500px'}}>eZuite</h1>
            <div className="flex items-center space-x-2">
        <Users className="w-6 h-6" />
        <span className="text-lg font-medium">Admin</span>
        <span className="text-lg">›</span>
        <span className="text-lg">User</span>
        <span className="text-yellow-300">★</span>
      </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Enhanzer</span>
            <Bell className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Settings className="w-5 h-5" />
          </div>
        </header>

       {/* Content Area */}
       <div className="flex-1 overflow-auto p-4">
          {/* Tabs */}
          <div className="flex space-x-4 mb-4">
            <button 
              className={`px-4 py-2 flex items-center border border-gray-400 rounded-full ${activeTab === 'drafts' ? 'border-blue-500' : ''}`}
              onClick={() => setActiveTab('drafts')}
            >
              <FileText className="w-4 h-4 mr-2" /> Drafts <span className="ml-2 text-gray-600">(40)</span>
            </button>
            <button 
              className={`px-4 py-2 flex items-center border border-gray-400 rounded-full ${activeTab === 'active' ? 'border-blue-500' : ''}`}
              onClick={() => setActiveTab('active')}
            >
              <Users className="w-4 h-4 mr-2" /> Active <span className="ml-2 text-gray-600">(40)</span>
            </button>
            <button 
              className={`px-4 py-2 flex items-center border border-gray-400 rounded-full ${activeTab === 'inactive' ? 'border-blue-500' : ''}`}
              onClick={() => setActiveTab('inactive')}
            >
              <UserMinus className="w-4 h-4 mr-2" /> Inactive <span className="ml-2 text-gray-600">(40)</span>
            </button>
            <button 
              className={`px-4 py-2 flex items-center border border-gray-400 rounded-full ${activeTab === 'deleted' ? 'border-blue-500' : ''}`}
              onClick={() => setActiveTab('deleted')}
            >
              <Trash2 className="w-4 h-4 mr-2" /> Deleted <span className="ml-2 text-gray-600">(40)</span>
            </button>
             {/* Search and Pagination */}
          <div className="flex justify-between mb-4 items-center">
            <div className="relative" style={{marginLeft:'300px'}}>
              <Filter className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex space-x-2 items-center" style={{marginLeft:'50px'}}>
              <button className="p-2 border rounded"><ChevronsLeft className="w-4 h-4" /></button>
              <button className="p-2 border rounded"><ChevronLeft className="w-4 h-4" /></button>
              <span className="p-2">1</span>
              <button className="p-2 border rounded"><ChevronRight className="w-4 h-4" /></button>
              <button className="p-2 border rounded"><ChevronsRight className="w-4 h-4" /></button>
            </div>
          </div>
          </div>

         

          {/* Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left">First Name</th>
                  <th className="p-4 text-left">Last Name</th>
                  <th className="p-4 text-left">Address</th>
                  <th className="p-4 text-left">Mobile</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Department</th>
                  <th className="p-4 text-left">Designation</th>
                  <th className="p-4 text-left">Updated</th>
                  <th className="p-4 text-left">Number</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4">{user.firstName}</td>
                    <td className="p-4">{user.lastName}</td>
                    <td className="p-4">{user.address}</td>
                    <td className="p-4">{user.mobile}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.department}</td>
                    <td className="p-4">{user.designation}</td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full ${getInitialBgColor(user.initial)} text-white flex items-center justify-center mr-2`}>
                          {user.initial}
                        </div>
                        {user.updated}
                      </div>
                    </td>
                    <td className="p-4 text-blue-500">{index + 1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center">
            <span>© 2024 eZuite. All rights reserved.</span>
            <div className="flex items-center">
    <Star className="w-5 h-5 mr-1" /> 
    <span>5.0</span>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;