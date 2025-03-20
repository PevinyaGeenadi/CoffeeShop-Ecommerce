import Sidebar from './Sidebar';
import NavbarAdmin from './NavbarAdmin';
import { FaUsers } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { LuShoppingBag } from "react-icons/lu";
import { MdRestaurantMenu } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [counts, setCounts] = useState({products: 0, users: 0});
  interface GraphData {
    name: string;
    users: number;
    products: number;
    orders: number;
  }

  const [graphData, setGraphData] = useState<GraphData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoints
        const usersResponse = await fetch('http://localhost:4000/totalUsers');
        const usersData = await usersResponse.json();
        
        const productsResponse = await fetch('http://localhost:4000/totalProducts');
        const productsData = await productsResponse.json();
        
        setCounts({
          users: usersData.totalUsers,
          products: productsData.totalProducts,
          // orders: ordersData.totalOrders
        });

        // Sample data for the graph - replace with actual API call
        setGraphData([
          { name: 'Jan', users: 40, products: 24, orders: 10 },
          { name: 'Feb', users: 55, products: 30, orders: 17 },
          { name: 'Mar', users: 68, products: 36, orders: 23 },
          { name: 'Apr', users: 81, products: 43, orders: 38 },
          { name: 'May', users: 90, products: 49, orders: 42 },
          { name: 'Jun', users: 95, products: 55, orders: 45 },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <NavbarAdmin />
      <div className='flex flex-col lg:flex-row'>
        <Sidebar />
        <div className='p-8 box-border bg-[#E1F0DA] w-full rounded-sm mt-4 lg:m-7 flex-grow'>
  <h2 className="text-2xl font-bold mb-4 text-green-900">Dashboard</h2>
  
  {/* Stats Cards with Coffee Theme */}
  <div className="flex flex-col md:flex-row gap-4 mb-8">
    <div className="flex-1 bg-[#88AB8E]  p-6 rounded-lg shadow-lg border-l-4 border-green-700">
      <div className='flex justify-center'>
        <FaUsers className="text-3xl mb-2 w-[90px] h-[90px] text-white" />
      </div>
      <h1 className="text-[60px] font-semibold text-white">{counts.users}</h1>
      <p className="text-[25px] text-white">Loyal Customers</p>
    </div>
    
    <div className="flex-1 bg-[#88AB8E] p-6 rounded-lg shadow-lg border-l-4 border-green-700">
      <div className='flex justify-center'>
        <MdRestaurantMenu className="text-3xl mb-2 w-[90px] h-[90px] text-white" />
      </div>
      <h1 className="text-[60px] font-semibold text-white">{counts.products}</h1>
      <p className="text-[25px] text-white">Menu Items</p>
    </div>
    
    <div className="flex-1 bg-[#88AB8E] p-6 rounded-lg shadow-lg border-l-4 border-green-700">
      <div className='flex justify-center'>
        <LuShoppingBag className="text-3xl mb-2 w-[90px] h-[90px] text-white" />
      </div>
      <h1 className="text-[60px] font-semibold text-white">1</h1>
      <p className="text-[25px] text-white">Daily Orders</p>
    </div>
  </div>
  
  {/* Top Selling Products */}
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-green-900">Top Selling Items</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
        <div className="h-16 w-16 bg-[#88AB8E] rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl">☕</span>
        </div>
        <div>
          <h4 className="font-semibold text-amber-900">Cappuccino</h4>
          <p className="text-amber-700">32 sold today</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
        <div className="h-16 w-16 bg-[#88AB8E] rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl">🍰</span>
        </div>
        <div>
          <h4 className="font-semibold text-amber-900">Chocolate Cake</h4>
          <p className="text-amber-700">28 sold today</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
        <div className="h-16 w-16 bg-[#88AB8E] rounded-full flex items-center justify-center mr-4">
          <span className="text-2xl">🥤</span>
        </div>
        <div>
          <h4 className="font-semibold text-amber-900">Iced Latte</h4>
          <p className="text-amber-700">25 sold today</p>
        </div>
      </div>
    </div>
  </div>
  
  {/* Recent Activity */}
  <div>
    <h3 className="text-xl font-semibold mb-4 text-green-900">Recent Activity</h3>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="border-b border-amber-100 pb-3 mb-3">
        <div className="flex justify-between">
          <span className="font-medium text-amber-900">New Order #1089</span>
          <span className="text-amber-700 text-sm">Just now</span>
        </div>
        <p className="text-amber-600">3 items • $18.50</p>
      </div>
      
      <div className="border-b border-amber-100 pb-3 mb-3">
        <div className="flex justify-between">
          <span className="font-medium text-amber-900">New Customer Registration</span>
          <span className="text-amber-700 text-sm">10 minutes ago</span>
        </div>
        <p className="text-amber-600">Sarah Johnson joined your loyalty program</p>
      </div>
      
      <div>
        <div className="flex justify-between">
          <span className="font-medium text-amber-900">Inventory Alert</span>
          <span className="text-amber-700 text-sm">30 minutes ago</span>
        </div>
        <p className="text-amber-600">Low stock: Premium Coffee Beans (2kg remaining)</p>
      </div>
    </div>
  </div>

          
          {/* Graph Section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Monthly Growth</h3>
            <div className="bg-gray-100 p-4 rounded-md shadow-lg h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={graphData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="#8884d8" name="Users" />
                  <Bar dataKey="products" fill="#82ca9d" name="Products" />
                  <Bar dataKey="orders" fill="#ffc658" name="Orders" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;