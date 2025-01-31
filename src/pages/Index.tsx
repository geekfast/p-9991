import { Navigation } from "@/components/home/Navigation";
import { QuickActions } from "@/components/home/QuickActions";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { ActivityFeed } from "@/components/home/ActivityFeed";
import { SecurityWidget } from "@/components/home/SecurityWidget";
import { DealsSection } from "@/components/home/DealsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      <main className="pb-16">
        <QuickActions />
        
        <div className="space-y-2">
          <div className="bg-white p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-medium">Send to Bank</h2>
                <p className="text-sm text-gray-600">Kirim cepat & gampang</p>
              </div>
              <button className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm">
                KIRIM
              </button>
            </div>
            <ServiceGrid />
          </div>

          <ActivityFeed />
          <SecurityWidget />
          <DealsSection />
          <NewsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;