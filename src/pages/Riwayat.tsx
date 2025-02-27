
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/home/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search, Plus, Download } from "lucide-react";

const Riwayat = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const transactions = [
    { 
      id: "1",
      title: "Biznet Ulujami",
      amount: -476750,
      date: "Due date 07 Feb 2025",
      type: "upcoming",
      icon: <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-10 h-10" loading="lazy" />,
      action: "Pay now!"
    },
    { 
      id: "2",
      title: "Berkah Basamo QRIS",
      amount: -30000,
      date: "03 Feb 2025 • 12:15",
      type: "thisMonth",
      icon: <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-10 h-10" loading="lazy" />
    },
    { 
      id: "3",
      title: "Top Up",
      amount: 700000,
      date: "03 Feb 2025 • 11:23",
      type: "thisMonth",
      icon: <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
        <Download className="w-6 h-6 text-white" />
      </div>
    }
  ];

  const monthlyTotal = -233900;

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter(transaction => 
    transaction.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUpcoming = filteredTransactions.filter(t => t.type === 'upcoming');
  const filteredThisMonth = filteredTransactions.filter(t => t.type === 'thisMonth');

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Navigate to transaction detail page
  const handleTransactionClick = (id: string) => {
    navigate(`/transaction/${id}`);
  };

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
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-4 space-y-4">
        {/* Upcoming Section */}
        {(filteredUpcoming.length > 0 || searchQuery === "") && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-medium">Upcoming</h2>
              <button className="text-blue-500 font-medium">SEE MORE</button>
            </div>
            {filteredUpcoming.length > 0 ? (
              filteredUpcoming.map((transaction, index) => (
                <Card 
                  key={index} 
                  className="p-4 mb-2 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleTransactionClick(transaction.id)}
                >
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
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">No upcoming transactions found</div>
            )}
          </div>
        )}

        {/* This Month Section */}
        {(filteredThisMonth.length > 0 || searchQuery === "") && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-medium">This Month</h2>
              <button className="flex items-center text-blue-500">
                <span className="font-medium">Rp {Math.abs(monthlyTotal).toLocaleString()}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            {filteredThisMonth.length > 0 ? (
              filteredThisMonth.map((transaction, index) => (
                <Card 
                  key={index} 
                  className="p-4 mb-2 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleTransactionClick(transaction.id)}
                >
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
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">No transactions found</div>
            )}
          </div>
        )}

        {filteredTransactions.length === 0 && searchQuery !== "" && (
          <div className="text-center py-8">
            <p className="text-gray-500">No transactions matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Riwayat;
