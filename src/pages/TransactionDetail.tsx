
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Share2, Download, Copy, Check, Plus, ShoppingCart, CreditCard, Smartphone, Coffee } from "lucide-react";
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
      title: "PLN Electricity",
      amount: -325000,
      date: "Due date 10 Feb 2025",
      type: "upcoming",
      status: "Pending",
      description: "Payment for electricity bill",
      referenceId: "PLN-ELE-9876543210",
      icon: <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
        <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" />
      </div>
    },
    { 
      id: "17",
      title: "PDAM Water Bill",
      amount: -175000,
      date: "Due date 15 Feb 2025",
      type: "upcoming",
      status: "Pending",
      description: "Payment for water utility",
      referenceId: "PDAM-WTR-1234567890",
      icon: <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
        <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" />
      </div>
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
        <Plus className="w-6 h-6 text-white" />
      </div>
    },
    {
      id: "4",
      title: "Starbucks Coffee",
      amount: -45000,
      date: "03 Feb 2025 • 10:30",
      type: "thisMonth",
      status: "Success",
      description: "Payment for coffee and pastry",
      referenceId: "SB-COFE-5678901234",
      icon: <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
        <Coffee className="w-6 h-6 text-white" />
      </div>
    },
    {
      id: "5",
      title: "Mobile Credit",
      amount: -100000,
      date: "02 Feb 2025 • 15:45",
      type: "thisMonth",
      status: "Success",
      description: "Phone credit reload",
      referenceId: "MOB-CRD-6789012345",
      icon: <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
        <Smartphone className="w-6 h-6 text-white" />
      </div>
    },
    {
      id: "6",
      title: "Grocery Shopping",
      amount: -250000,
      date: "02 Feb 2025 • 14:20",
      type: "thisMonth",
      status: "Success",
      description: "Groceries at Superindo",
      referenceId: "GRO-SUP-7890123456",
      icon: <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
        <ShoppingCart className="w-6 h-6 text-white" />
      </div>
    },
    {
      id: "7",
      title: "Credit Card Bill",
      amount: -1500000,
      date: "01 Feb 2025 • 09:15",
      type: "thisMonth",
      status: "Success",
      description: "Payment for credit card bill",
      referenceId: "CC-BILL-8901234567",
      icon: <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
        <CreditCard className="w-6 h-6 text-white" />
      </div>
    },
    {
      id: "8",
      title: "Top Up",
      amount: 2000000,
      date: "01 Feb 2025 • 08:30",
      type: "thisMonth",
      status: "Success",
      description: "Top up balance via Bank Transfer",
      referenceId: "TOPUP-9012345678",
      icon: <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
        <Plus className="w-6 h-6 text-white" />
      </div>
    },
    {
      id: "9",
      title: "Netflix Subscription",
      amount: -159000,
      date: "31 Jan 2025 • 23:59",
      type: "thisMonth",
      status: "Success",
      description: "Monthly subscription payment",
      referenceId: "NFLX-SUB-0123456789",
      icon: <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
        <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" />
      </div>
    },
    {
      id: "10",
      title: "Restaurant Payment",
      amount: -325000,
      date: "31 Jan 2025 • 20:15",
      type: "thisMonth",
      status: "Success",
      description: "Dinner at Sushi Tei",
      referenceId: "REST-SUSH-1234567890",
      icon: <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
        <Coffee className="w-6 h-6 text-white" />
      </div>
    },
    {
      id: "11",
      title: "Taxi Ride",
      amount: -75000,
      date: "31 Jan 2025 • 18:45",
      type: "thisMonth",
      status: "Success",
      description: "Transportation via GoJek",
      referenceId: "TAXI-GO-2345678901",
      icon: <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
        <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" />
      </div>
    },
    {
      id: "12",
      title: "Online Shopping",
      amount: -899000,
      date: "31 Jan 2025 • 15:30",
      type: "thisMonth",
      status: "Success",
      description: "Purchase on Tokopedia",
      referenceId: "SHOP-TOKO-3456789012",
      icon: <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
        <ShoppingCart className="w-6 h-6 text-white" />
      </div>
    },
    {
      id: "13",
      title: "Top Up",
      amount: 1500000,
      date: "31 Jan 2025 • 14:20",
      type: "thisMonth",
      status: "Success",
      description: "Top up balance via Bank Transfer",
      referenceId: "TOPUP-4567890123",
      icon: <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
        <Plus className="w-6 h-6 text-white" />
      </div>
    },
    {
      id: "14",
      title: "Electricity Bill",
      amount: -450000,
      date: "31 Jan 2025 • 10:00",
      type: "thisMonth",
      status: "Success",
      description: "Payment for January electricity",
      referenceId: "PLN-JAN-5678901234",
      icon: <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
        <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" />
      </div>
    },
    {
      id: "15",
      title: "Water Bill",
      amount: -225000,
      date: "31 Jan 2025 • 09:45",
      type: "thisMonth",
      status: "Success",
      description: "Payment for January water usage",
      referenceId: "WATER-JAN-6789012345",
      icon: <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
        <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" />
      </div>
    },
    {
      id: "16",
      title: "Gas Bill",
      amount: -150000,
      date: "31 Jan 2025 • 09:30",
      type: "thisMonth",
      status: "Success",
      description: "Payment for January gas usage",
      referenceId: "GAS-JAN-7890123456",
      icon: <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
        <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" />
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
