import { createContext } from "react";
import { PluginContextType } from "../../types/context";

export const PluginWrapperContext = createContext<PluginContextType>({
  getExport: async () => null,
  searchLinkable: async () => [],
});
