import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="status-bar h-6 bg-white">
        <img
          alt="Status"
          className="w-full h-full object-cover"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/3d65bc3edd0209910b6753c3f972c7bb9e947cf882cea7562866e00270a2aa6a"
        />
      </div>
      
      <nav className="px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            alt="DANA Balance"
            className="h-8"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/6c2ecfcb9fe0b0a3cdd74e34e7c3a63e91d96e0196a854f45db32d3a7cfbbb15"
          />
          <div className="flex items-center">
            <span className="text-sm font-medium">Rp</span>
            <span className="text-lg font-bold mx-1">2.567.890</span>
            <img
              alt="Show/Hide"
              className="h-4 w-4"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b619760657a6454d8d32ae280985c005/2a6efa65c53b486619bcfeadfd1b48d68f56337a10bcc32cefe77d157ea46d57"
            />
          </div>
        </div>
        
        <Button variant="ghost" size="icon">
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