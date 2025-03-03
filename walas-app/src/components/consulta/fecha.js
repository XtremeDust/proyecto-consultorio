import React from 'react'
import { DayPicker, getDefaultClassNames} from "react-day-picker";
import "react-day-picker/style.css";

export function Fecha() {
    const [selected, setSelected] = React.useState();
    const defaultClassNames = getDefaultClassNames();
    
    return (
      <DayPicker 
        mode="single"
        captionLayout="dropdown"
        
        startMonth={new Date(2025, 2)}
        endMonth={new Date(2025, 4)}
        classNames={{
          today: ` border border-green-500 `, // Add a border to today's date
          selected: `bg-green-500 text-white`, // Highlight the selected day
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
    );
  }

  export default Fecha;
  
  
  