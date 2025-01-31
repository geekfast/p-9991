import React from "react";

const Riwayat = () => {
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
      <div className="p-4 space-y-4">
        {/* Empty State */}
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">Belum ada transaksi</p>
          <p className="text-gray-400 text-sm mt-2">
            Transaksi yang Anda lakukan akan muncul di sini
          </p>
        </div>
      </div>
    </div>
  );
};

export default Riwayat;