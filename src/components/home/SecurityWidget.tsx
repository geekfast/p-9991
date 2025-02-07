
import { ShieldCheck, ArrowRight, Check, Search, Percent } from "lucide-react";

export const SecurityWidget = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden mx-4">
      {/* Header section */}
      <div className="bg-blue-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-sm">[x] aktivitas terlindungi!</span>
        </div>
        <ArrowRight className="w-5 h-5" />
      </div>

      {/* Search section */}
      <div className="p-4">
        <div className="flex items-center gap-2 px-4 py-3 rounded-full border border-gray-200">
          <Search className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Ada yang kirim link mencurigakan?</span>
        </div>
      </div>

      {/* Protection status section */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="font-semibold text-lg">DANA Protection</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                <Check className="w-4 h-4" />
                <span>100%</span>
              </div>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                TERLINDUNGI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
