import React, { useState } from "react";
import { useFormikContext } from "formik";
import { SelectList } from "react-native-dropdown-select-list";

function AppSelectStoreList({ data, ...properties }) {
  const [selected, setSelected] = useState(); // Dropdown for stores
  const { setValues } = useFormikContext();
  console.log("AppSelectStoreList");
  return (
    <SelectList
      setSelected={setSelected}
      data={data}
      name="store_name"
      onSelect={() => {
        console.log("onSelect", selected);
        setValues((values) => {
          console.log("setValues", values, data);

          return { ...values, store: data[selected - 1].value };
        });
      }}
      {...properties}
    />
  );
}

export default AppSelectStoreList;
