import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Riwayat = () => {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-b from-blue-500 to-blue-400 p-4">
        <div className="flex items-center">
          <button 
            onClick={() => window.history.back()}
            className="text-white mr-4"
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
          <h1 className="text-xl font-semibold text-white">Riwayat Transaksi</h1>
        </div>
      </header>

      {/* Transaction List */}
      <div className="p-4">
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
                  <div className="text-sm text-gray-500">{transaction.description}</div>
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
      </div>
    </div>
  );
};

export default Riwayat;