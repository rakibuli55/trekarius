import { SiteSettingsContext } from "@/context";
import { useContext } from "react";

function useSiteSettings() {
  return useContext(SiteSettingsContext);
}

export default useSiteSettings;
