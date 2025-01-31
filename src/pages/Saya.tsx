import { Footer } from "@/components/home/Footer";
import { Card } from "@/components/ui/card";
import { 
  User, 
  Shield, 
  CreditCard, 
  Settings, 
  HelpCircle, 
  ChevronRight 
} from "lucide-react";

const Saya = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground">
        <div className="flex items-center px-4 h-14">
          <h1 className="text-lg font-semibold">Profil Saya</h1>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Profile Card */}
        <Card className="p-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">John Doe</h2>
              <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
            </div>
          </div>
        </Card>

        {/* Menu Items */}
        <div className="space-y-3">
          <Card className="divide-y">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-primary" />
                <span>Keamanan Akun</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-5 h-5 text-primary" />
                <span>Metode Pembayaran</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-primary" />
                <span>Pengaturan</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-primary" />
                <span>Pusat Bantuan</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>

        {/* Version Info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Versi Aplikasi 2.0.0</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Saya;