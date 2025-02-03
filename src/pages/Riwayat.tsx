import { Footer } from "@/components/home/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search } from "lucide-react";

const Riwayat = () => {
  const transactions = [
    { 
      title: "Biznet Ulujami",
      amount: -476750,
      date: "Due date 07 Feb 2025",
      type: "upcoming",
      icon: <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-10 h-10" loading="lazy" />,
      action: "Pay now!"
    },
    { 
      title: "Berkah Basamo QRIS",
      amount: -30000,
      date: "03 Feb 2025 • 12:15",
      type: "thisMonth",
      icon: <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-10 h-10" loading="lazy" />
    },
    { 
      title: "Top Up",
      amount: 700000,
      date: "03 Feb 2025 • 11:23",
      type: "thisMonth",
      icon: <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
        <Plus className="w-6 h-6 text-white" />
      </div>
    }
  ];

  const monthlyTotal = -233900;

  return (
    <div className="min-h-screen bg-background pb-20 mx-auto max-w-[480px]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-blue-500 text-white">
        <div className="flex items-center px-4 h-14">
          <h1 className="text-xl font-normal">Activity</h1>
        </div>
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              className="pl-10 bg-white text-gray-500 border-0" 
              placeholder="Search send money..."
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Upcoming Section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Upcoming</h2>
            <button className="text-blue-500 font-medium">SEE MORE</button>
          </div>
          {transactions.filter(t => t.type === 'upcoming').map((transaction, index) => (
            <Card key={index} className="p-4 mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg overflow-hidden">
                    {transaction.icon}
                  </div>
                  <div>
                    <div className="font-medium">{transaction.title}</div>
                    <div className="text-sm text-muted-foreground">{transaction.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">Rp {Math.abs(transaction.amount).toLocaleString()}</div>
                  {transaction.action && (
                    <div className="text-blue-500 text-sm">{transaction.action}</div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* This Month Section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">This Month</h2>
            <button className="flex items-center text-blue-500">
              <span className="font-medium">Rp {Math.abs(monthlyTotal).toLocaleString()}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          {transactions.filter(t => t.type === 'thisMonth').map((transaction, index) => (
            <Card key={index} className="p-4 mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg overflow-hidden">
                    {transaction.icon}
                  </div>
                  <div>
                    <div className="font-medium">{transaction.title}</div>
                    <div className="text-sm text-muted-foreground">{transaction.date}</div>
                  </div>
                </div>
                <div className="font-medium">
                  {transaction.amount >= 0 ? 'Rp ' : '-Rp '}
                  {Math.abs(transaction.amount).toLocaleString()}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Riwayat;