
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Share2, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/home/Footer";
import { Card } from "@/components/ui/card";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  type: string;
  status: string;
  description: string;
  referenceId: string;
  icon: JSX.Element;
}

const TransactionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [copied, setCopied] = useState(false);

  // Mock transactions data with additional details for the detail view
  const transactions: Transaction[] = [
    { 
      id: "1",
      title: "Biznet Ulujami",
      amount: -476750,
      date: "Due date 07 Feb 2025",
      type: "upcoming",
      status: "Pending",
      description: "Payment for internet subscription",
      referenceId: "BIZ-INT-4567890123",
      icon: <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-10 h-10" loading="lazy" />
    },
    { 
      id: "2",
      title: "Berkah Basamo QRIS",
      amount: -30000,
      date: "03 Feb 2025 • 12:15",
      type: "thisMonth",
      status: "Success",
      description: "Payment for food and beverages",
      referenceId: "QRIS-BB-7891234560",
      icon: <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-10 h-10" loading="lazy" />
    },
    { 
      id: "3",
      title: "Top Up",
      amount: 700000,
      date: "03 Feb 2025 • 11:23",
      type: "thisMonth",
      status: "Success",
      description: "Top up balance via Bank Transfer",
      referenceId: "TOPUP-789456123",
      icon: <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
        <Download className="w-6 h-6 text-white" />
      </div>
    }
  ];

  useEffect(() => {
    // Find the transaction with the matching ID
    const foundTransaction = transactions.find(t => t.id === id);
    if (foundTransaction) {
      setTransaction(foundTransaction);
    } else {
      // Redirect to history page if transaction not found
      navigate('/riwayat');
    }
  }, [id, navigate]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!transaction) return null;

  const isPositive = transaction.amount >= 0;

  return (
    <div className="min-h-screen bg-gray-100 pb-20 mx-auto max-w-[480px]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-blue-500 text-white">
        <div className="flex items-center justify-between px-4 h-14">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20"
            onClick={() => navigate('/riwayat')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-medium">Transaction Detail</h1>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Transaction Card */}
      <div className="px-4 py-4">
        <Card className="p-6 pb-8">
          <div className="flex flex-col items-center mb-6">
            <div className="rounded-lg overflow-hidden mb-4">
              {transaction.icon}
            </div>
            <h2 className="text-xl font-bold mb-1">{transaction.title}</h2>
            <div className="text-2xl font-bold mb-1">
              {isPositive ? 'Rp ' : '-Rp '}
              {Math.abs(transaction.amount).toLocaleString()}
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              transaction.status === "Success" ? "bg-green-100 text-green-800" : 
              transaction.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
              "bg-red-100 text-red-800"
            }`}>
              {transaction.status}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">Date</span>
              <span className="font-medium">{transaction.date}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">Description</span>
              <span className="font-medium">{transaction.description}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-500">Type</span>
              <span className="font-medium capitalize">{transaction.type}</span>
            </div>
            <div className="flex items-start justify-between py-2">
              <span className="text-gray-500">Reference ID</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">{transaction.referenceId}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8" 
                  onClick={() => copyToClipboard(transaction.referenceId)}
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="px-4 mt-4">
        <Button variant="outline" className="w-full mb-3">
          Report a Problem
        </Button>
        <Button variant="outline" className="w-full">
          Download Receipt
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default TransactionDetail;
