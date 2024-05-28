import { ReactNode } from "react";
import { PluginFeature, PluginFeatureReference } from "../../types/plugin";
import { PluginWrapperContext } from "./util";

export function PluginWrapper({
  children,
}: {
  plugin: PluginFeatureReference<PluginFeature>;
  children?: ReactNode | ReactNode[];
}) {
  return (
    <PluginWrapperContext.Provider
      value={{ getExport: async () => null, searchLinkable: async () => [] }}
    >
      {children}
    </PluginWrapperContext.Provider>
  );
}
