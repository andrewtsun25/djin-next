import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import {
  AutocompleteOwnerState,
  AutocompleteRenderGetTagProps,
} from "@mui/material/Autocomplete/Autocomplete";
import React, { ReactElement } from "react";

interface MultiSelectProps<
  T,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends Omit<
    AutocompleteProps<T, true, DisableClearable, FreeSolo>,
    "multiple" | "filterSelectedOptions" | "renderInput" | "renderTags"
  > {
  inputLabel?: React.ReactNode;
  inputPlaceholder?: string;
  renderTags?: (
    value: T[],
    getTagProps: AutocompleteRenderGetTagProps,
    ownerState: AutocompleteOwnerState<T, true, DisableClearable, FreeSolo>,
  ) => React.ReactNode;
}

export function MultiSelect<
  T,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
>({
  inputLabel,
  inputPlaceholder,
  ...rest
}: MultiSelectProps<T, DisableClearable, FreeSolo>): ReactElement<
  MultiSelectProps<T, DisableClearable, FreeSolo>
> {
  return (
    <Autocomplete
      multiple
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label={inputLabel}
          placeholder={inputPlaceholder}
        />
      )}
      {...rest}
    />
  );
}
