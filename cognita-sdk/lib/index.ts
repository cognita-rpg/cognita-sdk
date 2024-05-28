import {
  FileTemplateFormProps,
  FileTemplateTextProps,
} from "./types/rendererProps";
import { PluginContextType, LinkSearchType, LinkType } from "./types/context";
import {
  CollectionEntity,
  CollectionFileEntity,
  CollectionFileEntityCreate,
  CollectionFolderEntity,
  CollectionFolderEntityCreate,
  CollectionImageEntity,
  CollectionImageEntityCreate,
  EntityCreate,
  ReducedEntity,
} from "./types/collections";
import {
  PluginArticleTemplateFeature,
  PluginAssetExport,
  PluginCompendiumTemplateFeature,
  PluginComponentExport,
  PluginExport,
  PluginFeature,
  PluginFeatureReference,
  PluginFunctionExport,
  PluginJSONExport,
  PluginManifest,
  PluginMetadata,
} from "./types/plugin";

export type {
  FileTemplateFormProps,
  FileTemplateTextProps,
  PluginContextType,
  LinkSearchType,
  LinkType,
  CollectionEntity,
  CollectionFileEntity,
  CollectionFolderEntity,
  CollectionImageEntity,
  CollectionFileEntityCreate,
  CollectionFolderEntityCreate,
  CollectionImageEntityCreate,
  EntityCreate,
  ReducedEntity,
  PluginArticleTemplateFeature,
  PluginAssetExport,
  PluginCompendiumTemplateFeature,
  PluginComponentExport,
  PluginExport,
  PluginFeature,
  PluginFeatureReference,
  PluginFunctionExport,
  PluginJSONExport,
  PluginManifest,
  PluginMetadata,
};

import { PluginWrapper } from "./components/PluginWrapper/PluginWrapper";

export { PluginWrapper };
