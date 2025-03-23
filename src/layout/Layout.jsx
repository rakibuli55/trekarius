import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import CartProvider from "@/components/providers/CartProvider";
import AosProvider from "@/components/providers/Aos/AosProvider";
import SiteSettingsProvider from "@/providers/SiteSettingsProvider";
import WhatsappButton from "@/components/common/WhatsappButton";

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
            </main>
          {location.pathname !== "/contest/photo-contest" && <Footer />}
          </CartProvider>
        </AosProvider>
      </SiteSettingsProvider>
    </div>
  );
}

export default Layout;
