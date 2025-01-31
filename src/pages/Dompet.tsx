import { Footer } from "@/components/home/Footer";
import { Card } from "@/components/ui/card";
import { Wallet, CreditCard, PiggyBank, History } from "lucide-react";

const Dompet = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground">
        <div className="flex items-center px-4 h-14">
          <h1 className="text-lg font-semibold">Dompet DANA</h1>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Balance Card */}
        <Card className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Saldo DANA</span>
            <Wallet className="w-5 h-5 text-primary" />
          </div>
          <div className="text-2xl font-bold">Rp 1.500.000</div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 flex flex-col items-center space-y-2">
            <CreditCard className="w-6 h-6 text-primary" />
            <span className="text-sm">Top Up</span>
          </Card>
          <Card className="p-4 flex flex-col items-center space-y-2">
            <PiggyBank className="w-6 h-6 text-primary" />
            <span className="text-sm">Tabungan</span>
          </Card>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Transaksi Terakhir</h2>
          <Card className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <History className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">Top Up DANA</div>
                  <div className="text-sm text-muted-foreground">23 Jan 2024</div>
                </div>
              </div>
              <span className="text-green-600">+Rp 500.000</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <History className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">Pembayaran</div>
                  <div className="text-sm text-muted-foreground">22 Jan 2024</div>
                </div>
              </div>
              <span className="text-red-600">-Rp 150.000</span>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dompet;