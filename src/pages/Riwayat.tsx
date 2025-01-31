import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";

const Riwayat = () => {
  const isMobile = useIsMobile();
  const transactions = [
    {
      id: 1,
      date: "31 Jan 2024",
      type: "Transfer",
      description: "Transfer ke Budi",
      amount: -50000,
      status: "Berhasil"
    },
    {
      id: 2,
      date: "30 Jan 2024",
      type: "Top Up",
      description: "Top Up via BCA",
      amount: 100000,
      status: "Berhasil"
    },
    {
      id: 3,
      date: "29 Jan 2024",
      type: "Pembayaran",
      description: "Pulsa Telkomsel",
      amount: -25000,
      status: "Berhasil"
    },
    {
      id: 4,
      date: "28 Jan 2024",
      type: "Transfer",
      description: "Transfer ke Ani",
      amount: -75000,
      status: "Berhasil"
    },
    {
      id: 5,
      date: "27 Jan 2024",
      type: "Top Up",
      description: "Top Up via Mandiri",
      amount: 200000,
      status: "Berhasil"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground">
        <div className="flex items-center px-4 h-14">
          <button 
            onClick={() => window.history.back()}
            className="mr-4 hover:opacity-75 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Riwayat Transaksi</h1>
        </div>
      </header>

      {/* Transaction List */}
      <div className="p-4">
        {isMobile ? (
          // Mobile view - Card layout
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div 
                key={transaction.id} 
                className="bg-card rounded-lg shadow-sm p-4 space-y-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{transaction.type}</div>
                    <div className="text-sm text-muted-foreground">{transaction.description}</div>
                  </div>
                  <span className={`font-medium ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    Rp {Math.abs(transaction.amount).toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{transaction.date}</span>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop view - Table layout
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tanggal</TableHead>
                <TableHead>Deskripsi</TableHead>
                <TableHead className="text-right">Nominal</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.date}</TableCell>
                  <TableCell>
                    <div className="font-medium">{transaction.type}</div>
                    <div className="text-sm text-muted-foreground">{transaction.description}</div>
                  </TableCell>
                  <TableCell className={`text-right ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    Rp {Math.abs(transaction.amount).toLocaleString('id-ID')}
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                      {transaction.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Riwayat;