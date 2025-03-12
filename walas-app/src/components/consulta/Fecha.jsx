"use client";
import React, { useEffect, useState } from 'react'
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
export function Fecha() {
  const [selected, setSelected] = React.useState(null);
  const defaultClassNames = getDefaultClassNames();
  //const [fetchs, setFetchs] = useState(false)

return (
  <DayPicker
    mode="single"
    captionLayout="dropdown"

    startMonth={new Date(2025, 2)}
    endMonth={new Date(2025, 4)}
    classNames={{
      root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
      chevron: `${defaultClassNames.chevron} fill-amber-500`, // Change the color of the chevron

    }}
    selected={selected}
    onSelect={setSelected}
    footer={
      selected
        ? `Fecha escogida ${selected.toLocaleDateString()}.`
        : "Selecciona una Fecha."
    }
  />
) 
  }

export default Fecha;


