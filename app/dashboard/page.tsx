export default function DashboardPage() {
  const stats = [
    { label: "Total Users", value: "12,345", change: "+12%" },
    { label: "Revenue", value: "$45,678", change: "+8%" },
    { label: "Orders", value: "1,234", change: "+15%" },
    { label: "Growth", value: "23.4%", change: "+5%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Analytics and metrics overview</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-sm"
            >
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Activity Chart</h2>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Chart visualization area</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium text-gray-900">Activity Item {i}</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Top Products</h2>
            <div className="space-y-3">
              {["Product A", "Product B", "Product C"].map((product) => (
                <div key={product} className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-900">{product}</span>
                  <span className="text-gray-600">$1,234</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Create", "Export", "Share", "Settings"].map((action) => (
                <button
                  key={action}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-900 font-medium transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

