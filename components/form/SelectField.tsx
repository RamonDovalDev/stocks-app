import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import ReactCountryFlag from "react-country-flag";

const SelectField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  options,
  control,
  error,
  required = false,
  showFlags = false,
}: SelectFieldProps<T>) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>

      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `Please, select ${label.toLowerCase()}` : false,
        }}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="select-trigger">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="focus:bg-gray-600 focus:text-white"
                >
                  <div className="flex items-center gap-2">
                    {showFlags && (
                      <ReactCountryFlag
                        countryCode={option.value}
                        svg
                        style={{
                          width: "1.2em",
                          height: "1.2em",
                        }}
                      />
                    )}
                    <span>{option.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
            {error && <p className="text-sm text-red-500">{error.message}</p>}
          </Select>
        )}
      />
    </div>
  );
};

export default SelectField;
