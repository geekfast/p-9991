import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#108ee9]">      
      <nav className="px-4 py-3 flex justify-between items-center max-w-[480px] mx-auto">
        <div className="flex items-center space-x-2">
          <img
            alt="DANA Balance"
            className="h-7"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/6c2ecfcb9fe0b0a3cdd74e34e7c3a63e91d96e0196a854f45db32d3a7cfbbb15"
          />
          <div className="flex items-center text-white">
            <span className="text-sm font-medium">Rp</span>
            <span className="text-xl font-bold mx-1">2.567.890</span>
            <img
              alt="Show/Hide"
              className="h-3 w-3"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/2a6efa65c53b486619bcfeadfd1b48d68f56337a10bcc32cefe77d157ea46d57"
            />
          </div>
        </div>
        
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
          <img
            alt="Navigation"
            className="h-6 w-6"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/4508da8f46ad219e791b0b32c8fd61abec75258bf809f05f22c817577a481df9"
          />
        </Button>
      </nav>
    </header>
  );
};