import { Footer } from "@/components/home/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Plus, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Dompet = () => {
  return (
    <div className="min-h-screen bg-background pb-20 mx-auto max-w-[480px]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground">
        <div className="flex items-center justify-between px-4 h-14">
          <h1 className="text-lg font-semibold">Dompet</h1>
          <Plus className="h-6 w-6" />
        </div>
        {/* Search Bar */}
        <div className="p-4 pb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              className="pl-9 bg-white/90 placeholder:text-muted-foreground/70" 
              placeholder="Lagi cari metode pembayaran apa?"
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 space-y-6">
        {/* Payment Methods */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-medium text-muted-foreground">METODE PEMBAYARAN</h2>
            <span className="text-sm text-muted-foreground">5 KARTU</span>
          </div>
          <div className="space-y-2">
            <PaymentCard 
              name="BANK BRI"
              type="DEBIT"
              bgColor="bg-gradient-to-r from-gray-700 to-gray-900"
            />
            <PaymentCard 
              name="PermataBank"
              type="DEBIT"
              bgColor="bg-gradient-to-r from-green-700 to-green-900"
            />
            <PaymentCard 
              name="DANA"
              type=""
              bgColor="bg-blue-500"
              button="BUKA"
              className="rounded-b-3xl"
            />
          </div>
        </section>

        {/* Vouchers & Tickets */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-medium text-muted-foreground">VOUCHER & TIKET</h2>
            <span className="text-sm text-primary">9+ PRODUK</span>
          </div>
          <div className="space-y-2">
            <VoucherCard 
              name="Spotify"
              price="100rb"
              isNew
              icon="🎵"
              bgColor="bg-green-600"
            />
            <VoucherCard 
              name="Spotify"
              price="100rb"
              isNew
              icon="🎵"
              bgColor="bg-green-600"
            />
            <VoucherCard 
              name="Autoglazz"
              price="100rb"
              type="Voucher"
              icon="🚗"
              bgColor="bg-black"
              button="BUKA"
              className="rounded-b-3xl"
            />
          </div>
        </section>

        {/* Loyalty Cards */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-medium text-muted-foreground">LOYALTY</h2>
            <span className="text-sm text-muted-foreground">5 LOYALTY</span>
          </div>
          <div className="space-y-2">
            <LoyaltyCard 
              name="THE COFFEE BEAN & TEA LEAF"
              points={350}
              bgColor="bg-gradient-to-r from-brown-800 to-brown-900"
            />
            <LoyaltyCard 
              name="QUIZNOS"
              points={350}
              bgColor="bg-green-700"
            />
            <LoyaltyCard 
              name="WENDYS"
              points={350}
              bgColor="bg-red-700"
              button="BUKA"
              className="rounded-b-3xl"
            />
          </div>
        </section>

        {/* Identity Cards */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-medium text-muted-foreground">KARTU IDENTITAS</h2>
            <span className="text-sm text-muted-foreground">2 KARTU</span>
          </div>
          <Card className="p-4 rounded-xl rounded-b-3xl bg-gradient-to-r from-red-500 to-red-600">
            <div className="flex items-center justify-between text-white">
              <div>
                <div className="text-xs mb-1">INDONESIA</div>
                <div className="text-sm font-medium">KARTU TANDA PENDUDUK</div>
                <div className="text-sm font-medium">REPUBLIK INDONESIA</div>
              </div>
              <button className="px-4 py-1 text-sm bg-white/20 rounded-full">
                BUKA
              </button>
            </div>
          </Card>
        </section>

        {/* Investment Section */}
        <section>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-medium text-muted-foreground">INVESTASI</h2>
            <span className="text-sm text-muted-foreground">3 INVESTASI</span>
          </div>
          <div className="space-y-2">
            <InvestmentCard 
              name="PLUS"
              bgColor="bg-blue-500"
            />
            <InvestmentCard 
              name="GOALS"
              bgColor="bg-red-500"
            />
            <InvestmentCard 
              name="eMAS"
              bgColor="bg-yellow-500"
              button="BUKA"
              className="rounded-b-3xl"
            />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

// Helper Components
const PaymentCard = ({ name, type, bgColor, button, className }: { 
  name: string;
  type?: string;
  bgColor: string;
  button?: string;
  className?: string;
}) => (
  <Card className={cn("p-4 rounded-xl", bgColor, className)}>
    <div className="flex items-center justify-between text-white">
      <div>
        <div className="font-medium">{name}</div>
        {type && <div className="text-sm opacity-80">{type}</div>}
      </div>
      {button && (
        <button className="px-4 py-1 text-sm bg-white/20 rounded-full">
          {button}
        </button>
      )}
    </div>
  </Card>
);

const VoucherCard = ({ name, price, type, isNew, icon, bgColor, button, className }: {
  name: string;
  price: string;
  type?: string;
  isNew?: boolean;
  icon: string;
  bgColor: string;
  button?: string;
  className?: string;
}) => (
  <Card className={cn("p-4 rounded-xl", bgColor, className)}>
    <div className="flex items-center justify-between text-white">
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{name}</span>
            {isNew && (
              <span className="px-1.5 py-0.5 text-[10px] bg-red-500 rounded">NEW</span>
            )}
          </div>
          <div className="text-sm">
            Rp{price} {type && <span className="opacity-80">{type}</span>}
          </div>
        </div>
      </div>
      {button && (
        <button className="px-4 py-1 text-sm bg-white/20 rounded-full">
          {button}
        </button>
      )}
    </div>
  </Card>
);

const LoyaltyCard = ({ name, points, bgColor, button, className }: {
  name: string;
  points: number;
  bgColor: string;
  button?: string;
  className?: string;
}) => (
  <Card className={cn("p-4 rounded-xl", bgColor, className)}>
    <div className="flex items-center justify-between text-white">
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm">Points {points}</div>
      </div>
      {button && (
        <button className="px-4 py-1 text-sm bg-white/20 rounded-full">
          {button}
        </button>
      )}
    </div>
  </Card>
);

const InvestmentCard = ({ name, bgColor, button, className }: {
  name: string;
  bgColor: string;
  button?: string;
  className?: string;
}) => (
  <Card className={cn("p-4 rounded-xl", bgColor, className)}>
    <div className="flex items-center justify-between text-white">
      <div className="font-medium">{name}</div>
      {button && (
        <button className="px-4 py-1 text-sm bg-white/20 rounded-full">
          {button}
        </button>
      )}
    </div>
  </Card>
);

export default Dompet;