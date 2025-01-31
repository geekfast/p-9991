import { Footer } from "@/components/home/Footer";
import { Card } from "@/components/ui/card";

const Riwayat = () => {
  const transactions = [
    { title: "Top Up DANA", amount: 500000, date: "23 Jan 2024", type: "income", icon: <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" /> },
    { title: "Pembayaran", amount: 150000, date: "22 Jan 2024", type: "expense", icon: <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" /> },
    { title: "Transfer ke Bank", amount: 200000, date: "21 Jan 2024", type: "expense", icon: <img src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/87be36aa233d6639c1a4ee2530a8ca56234a7f689a1572d6b8b6e92587142252" alt="" className="w-6 h-6" loading="lazy" /> },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 mx-auto max-w-[480px]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground">
        <div className="flex items-center px-4 h-14">
          <h1 className="text-lg font-semibold">Riwayat Transaksi</h1>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 space-y-4">
        {transactions.map((transaction, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {transaction.icon}
                </div>
                <div>
                  <div className="font-medium">{transaction.title}</div>
                  <div className="text-sm text-muted-foreground">{transaction.date}</div>
                </div>
              </div>
              <span className={`font-medium ${
                transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}Rp {transaction.amount}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Riwayat;
