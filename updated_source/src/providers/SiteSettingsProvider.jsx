import { api } from "@/api";
import { SiteSettingsContext } from "@/context";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function SiteSettingsProvider({ children }) {
  const [siteSettings, setSiteSettings] = useState("hello there");

  const { data: siteSettingData, isLoading: siteSettingLoading } = useQuery({
    queryKey: ["siteSettingData"],
    queryFn: async () => {
      const response = await api.get("/site-settings");
      return response?.data?.data;
    },
  });

  useEffect(() => {
    if (siteSettingData) {
      setSiteSettings(siteSettingData);

      // Dynamically update favicon
      const faviconUrl = siteSettingData?.favicon
        ? `${import.meta.env.VITE_SERVER_URL}/${siteSettingData.favicon}`
        : null;

      let favicon = document.querySelector("link[rel='icon']");

      if (!favicon) {
        favicon = document.createElement("link");
        favicon.rel = "icon";
        document.head.appendChild(favicon);
      }

      if (faviconUrl) {
        favicon.href = faviconUrl;
      }
    }
  }, [siteSettingData]);

  return (
    <SiteSettingsContext.Provider
      value={{ siteSettings, setSiteSettings, siteSettingLoading }}
    >
      {children}
    </SiteSettingsContext.Provider>
  );
}

export default SiteSettingsProvider;
