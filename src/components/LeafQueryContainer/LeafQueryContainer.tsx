import React, { useState } from "react";
import "./LeafQueryContainer.scss";
import { ILeafNode } from "../../utils/searchStructureTypes";

const searchTypes = [
  ["Match", "Match Phrase"],
  ["Term", "Phrase", "Prefix", "Regex", "Fuzzy", "Wildcard", "Boolean"],
  ["Number - Range", "Number - Greater than", "Number - Lower than"],
  ["Date - Range", "Date - Greater than", "Date - Lower than"],
];

const fieldOptions = ["_all", "custom"];

export const LeafQueryContainer = ({
  leafElementData,
}: {
  leafElementData?: ILeafNode;
}) => {
  console.log("leafElementData", leafElementData);
  const [showDoubleRow, setShowDoubleRow] = useState(false);

  const [field, setField] = useState<string | undefined>(undefined);
  const [customField, setCustomField] = useState<string | undefined>(undefined);
  const [fieldType, setFieldType] = useState<string | undefined>(undefined);
  const [searchType, setSearchType] = useState<string | undefined>(undefined);
  const [value, setValue] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (leafElementData) {
      setField(leafElementData.field || undefined);
      if (leafElementData.field === "custom") {
        setCustomField(leafElementData.field || undefined);
      }
      setFieldType(leafElementData.fieldType || undefined);
      setSearchType(leafElementData.searchType || undefined);
      setValue(leafElementData.value || undefined);
    }
  }, [leafElementData]);

  React.useEffect(() => {
    // Validate the field and fieldType
  }, [fieldType]);

  React.useEffect(() => {
    // Validate the field and searchType
  }, [searchType]);

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setField(e.target.value);
  };

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchType(e.target.value);
  };

  const handleCustomFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomField(e.target.value);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  // Create a UI for the leaf node which is based of Type ILeafNode

  return (
    <div className="leaf-query-container">
      <div className="field-container">
        <div className="select-container">
          <select value={field} onChange={handleFieldChange}>
            <option value="" disabled={field !== "" && field !== undefined}>
              Select a field
            </option>
            {fieldOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {field === "custom" && (
          <div className="custom-field-container">
            <input
              type="text"
              onChange={handleCustomFieldChange}
              placeholder="Enter custom field"
              value={customField}
            />
          </div>
        )}
      </div>
      {field && (
        <div className="search-type-container">
          <div className="select-container">
            <select value={searchType} onChange={handleSearchTypeChange}>
              <option
                value=""
                disabled={searchType !== "" && searchType !== undefined}
                style={{ textAlign: "center" }}
              >
                Select
              </option>
              {searchTypes.map((searchTypesSubgroup, index) => (
                <optgroup key={index} label="--------------------">
                  {searchTypesSubgroup.map((option, subGroupIdx) => (
                    <option key={index * 10 + subGroupIdx} value={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          {searchType && (
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter search value"
                value={value}
                onChange={handleValueChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
