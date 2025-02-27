
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Saya from "./pages/Saya";
import Riwayat from "./pages/Riwayat";
import Dompet from "./pages/Dompet";
import Pay from "./pages/Pay";
import AllServices from "./pages/AllServices";
import NotFound from "./pages/NotFound";
import TransactionDetail from "./pages/TransactionDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/saya" element={<Saya />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/dompet" element={<Dompet />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/all-services" element={<AllServices />} />
        <Route path="/transaction/:id" element={<TransactionDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
