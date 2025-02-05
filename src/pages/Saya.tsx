import { Footer } from "@/components/home/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Shield,
  CreditCard,
  Settings,
  HelpCircle,
  ChevronRight,
  Link,
  Gift,
  Bell,
  Wallet,
  Info,
  FileText,
  UserCheck
} from "lucide-react";

const Saya = () => {
  return (
    <div className="min-h-screen bg-background pb-20 mx-auto max-w-[480px]">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Profil Saya</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              Personal
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              Bisnis
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Profile Card */}
        <Card className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1">
                <span className="text-xs text-white">P</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">John Doe</h2>
              <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
            </div>
            <Button variant="outline" size="sm" className="text-primary">
              Tampilkan QR
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Menu Items */}
        <div className="space-y-2">
          <Card className="divide-y">
            {/* Account Settings */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <UserCheck className="w-6 h-6 text-primary" />
                <span>Akun Terhubung</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary" />
                <span>Pengaturan Keamanan</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <UserCheck className="w-6 h-6 text-primary" />
                <span>Verifikasi</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Wallet className="w-6 h-6 text-primary" />
                <span>SmartPay</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="divide-y">
            {/* Help & Support */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-6 h-6 text-primary" />
                <span>Pusat Bantuan</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6 text-primary" />
                <span>Syarat & Ketentuan</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Info className="w-6 h-6 text-primary" />
                <span>Kebijakan Privasi</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>

        {/* Version Info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Versi 2.0.0</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Saya;