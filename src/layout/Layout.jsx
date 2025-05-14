import AosProvider from "@/components/providers/Aos/AosProvider";
import CartProvider from "@/components/providers/CartProvider";
import SiteSettingsProvider from "@/providers/SiteSettingsProvider";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import DiscountModal from "@/components/common/DiscountModal";

function Layout() {
  const location = useLocation();

  return (
    <div>
      <SiteSettingsProvider>
        <AosProvider>
          <CartProvider>
            {location.pathname !== "/contest/photo-contest" && <Navbar />}
            <ScrollRestoration></ScrollRestoration>
            <main>
              <Outlet />
              <DiscountModal />
            </main>
            {location.pathname !== "/contest/photo-contest" && <Footer />}
          </CartProvider>
        </AosProvider>
      </SiteSettingsProvider>
    </div>
  );
}

export default Layout;
