export type FileTemplateFormProps<TData extends object = any> = {
  value: Partial<TData>;
  onChange: (data: Partial<TData>) => void;
};

export type FileTemplateTextProps<TData extends object = any> = {
  data: Partial<TData>;
};
