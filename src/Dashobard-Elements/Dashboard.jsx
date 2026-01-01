import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { 
  FaUtensils, 
  FaShoppingCart, 
  FaUsers, 
  FaDollarSign,
  FaFire,
  FaStar,
  FaClock,
  FaChartLine,
  FaCalendarAlt,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import { format, subDays, startOfWeek, endOfWeek } from 'date-fns';
import FooterContent from '../components/FooterContent';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function Dashboard() {
  const [timeRange, setTimeRange] = useState('week');
  const [dashboardStats, setDashboardStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalCustomers: 0,
    averageOrderValue: 0,
    popularItems: [],
    recentOrders: [],
    revenueGrowth: 0,
    orderGrowth: 0
  });

  // Sample data - in real app, this would come from API
  useEffect(() => {
    const loadDashboardData = () => {
      const stats = {
        totalRevenue: 125800,
        totalOrders: 428,
        totalCustomers: 157,
        averageOrderValue: 294,
        revenueGrowth: 12.5,
        orderGrowth: 8.3,
        popularItems: [
          { name: 'Quarter Spicy Broast', orders: 128, revenue: 102400 },
          { name: 'Roasted Chicken', orders: 95, revenue: 114000 },
          { name: 'Pepperoni Pizza', orders: 87, revenue: 139200 },
          { name: 'Crispy Wings', orders: 76, revenue: 57000 },
          { name: 'Inferno Burger', orders: 42, revenue: 27300 },
        ],
        recentOrders: [
          { id: '#ORD-001', customer: 'John Doe', amount: 1200, status: 'delivered', time: '10 min ago' },
          { id: '#ORD-002', customer: 'Jane Smith', amount: 850, status: 'preparing', time: '25 min ago' },
          { id: '#ORD-003', customer: 'Mike Johnson', amount: 2100, status: 'delivered', time: '1 hour ago' },
          { id: '#ORD-004', customer: 'Sarah Wilson', amount: 650, status: 'pending', time: '2 hours ago' },
          { id: '#ORD-005', customer: 'Alex Brown', amount: 1800, status: 'delivered', time: '3 hours ago' },
        ]
      };
      setDashboardStats(stats);
    };

    loadDashboardData();
  }, [timeRange]);

  // Revenue Chart Data
  const revenueData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenue',
        data: [18000, 21000, 19000, 23000, 28000, 32000, 29000],
        borderColor: 'rgba(245, 158, 11, 1)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 3
      }
    ]
  };

  const revenueOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Revenue Trend',
        color: '#1f2937',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          callback: function(value) {
            return '₹' + value.toLocaleString();
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      }
    }
  };

  // Orders Chart Data
  const ordersData = {
    labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM', '12AM'],
    datasets: [
      {
        label: 'Orders',
        data: [15, 25, 40, 35, 65, 80, 30],
        backgroundColor: 'rgba(249, 115, 22, 0.8)',
        borderRadius: 8,
        borderSkipped: false,
      }
    ]
  };

  const ordersOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Orders by Hour',
        color: '#1f2937',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          stepSize: 20
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      }
    }
  };

  // Category Distribution Data
  const categoryData = {
    labels: ['Chicken', 'Burgers', 'Pizza', 'Sides', 'Drinks'],
    datasets: [
      {
        data: [35, 20, 25, 15, 5],
        backgroundColor: [
          'rgba(245, 158, 11, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(253, 224, 71, 0.8)'
        ],
        borderWidth: 0,
        cutout: '70%'
      }
    ]
  };

  const categoryOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      title: {
        display: true,
        text: 'Sales by Category',
        color: '#1f2937',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  };

  // Stats Cards Data
  const statsCards = [
    {
      title: 'Total Revenue',
      value: `₹${dashboardStats.totalRevenue.toLocaleString()}`,
      icon: <FaDollarSign className="text-2xl" />,
      color: 'from-green-500 to-emerald-600',
      change: `${dashboardStats.revenueGrowth}%`,
      trend: 'up'
    },
    {
      title: 'Total Orders',
      value: dashboardStats.totalOrders.toLocaleString(),
      icon: <FaShoppingCart className="text-2xl" />,
      color: 'from-blue-500 to-cyan-600',
      change: `${dashboardStats.orderGrowth}%`,
      trend: 'up'
    },
    {
      title: 'Total Customers',
      value: dashboardStats.totalCustomers.toLocaleString(),
      icon: <FaUsers className="text-2xl" />,
      color: 'from-purple-500 to-pink-600',
      change: '5.2%',
      trend: 'up'
    },
    {
      title: 'Avg. Order Value',
      value: `₹${dashboardStats.averageOrderValue}`,
      icon: <FaChartLine className="text-2xl" />,
      color: 'from-amber-500 to-orange-600',
      change: '3.8%',
      trend: 'up'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl">
                <FaUtensils className="text-white text-2xl" />
              </div>
              Dashboard Overview
            </h1>
            <p className="text-gray-600 mt-2">
              Welcome back! Here's what's happening with your restaurant today.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm">
              <FaCalendarAlt className="text-amber-500" />
              <span className="text-gray-700 font-medium">
                {format(new Date(), 'EEEE, MMMM d, yyyy')}
              </span>
            </div>
            
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((card, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color}`}>
                {card.icon}
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
                card.trend === 'up' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {card.trend === 'up' ? <FaArrowUp /> : <FaArrowDown />}
                {card.change}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{card.value}</h3>
            <p className="text-gray-600">{card.title}</p>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Compared to last period</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
          <Line data={revenueData} options={revenueOptions} />
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <Doughnut data={categoryData} options={categoryOptions} />
        </div>

        {/* Orders Chart */}
        <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-lg">
          <Bar data={ordersData} options={ordersOptions} />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Popular Items */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FaFire className="text-orange-500" />
              Popular Menu Items
            </h2>
            <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
              View All →
            </button>
          </div>

          <div className="space-y-4">
            {dashboardStats.popularItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg flex items-center justify-center text-amber-600 font-bold">
                    #{index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FaShoppingCart className="text-gray-400" />
                        {item.orders} orders
                      </span>
                      <span className="flex items-center gap-1">
                        <FaDollarSign className="text-gray-400" />
                        ₹{item.revenue.toLocaleString()} revenue
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    <FaStar className="fill-current" />
                    <FaStar className="fill-current" />
                    <FaStar className="fill-current" />
                    <FaStar className="fill-current" />
                    <FaStar className="text-gray-300" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">4.2</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <FaClock className="text-amber-500" />
              Recent Orders
            </h2>
            <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
              View All →
            </button>
          </div>

          <div className="space-y-4">
            {dashboardStats.recentOrders.map((order, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">{order.id}</h4>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === 'delivered' 
                      ? 'bg-green-100 text-green-700'
                      : order.status === 'preparing'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800">
                    ₹{order.amount.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <FaClock className="text-gray-400" />
                    {order.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Peak Hours</h3>
              <p className="text-amber-100">6PM - 9PM</p>
              <p className="text-amber-100 text-sm">Highest order volume</p>
            </div>
            <div className="text-4xl">📈</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-emerald-100">4.8/5.0 Rating</p>
              <p className="text-emerald-100 text-sm">Based on 157 reviews</p>
            </div>
            <div className="text-4xl">⭐</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Repeat Customers</h3>
              <p className="text-purple-100">68% Return Rate</p>
              <p className="text-purple-100 text-sm">Excellent loyalty</p>
            </div>
            <div className="text-4xl">🔄</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 w-full absolute b-1 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
        <p>Dashboard updated {format(new Date(), 'PPpp')}</p>
        <p className="mt-1">inferno Grill   Restaurant Management System</p>
      </div>
      
    </div>

  );
}

export default Dashboard;