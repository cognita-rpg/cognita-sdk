export type LinkType = {
  entityId: string;
  entityName: string;
  entityType: "folder" | "image" | "file";
};

export type LinkSearchType = {
  text?: string;
  tags?: string[];
};

export type PluginContextType = {
  getExport: <TExport = any>(name: string) => Promise<TExport | null>;
  searchLinkable: (search: LinkSearchType) => Promise<LinkType[]>;
};
