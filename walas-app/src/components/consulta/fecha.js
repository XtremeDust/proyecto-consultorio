"use client";
import React, { useEffect, useState } from 'react'
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
export function Fecha() {


  const [selected, setSelected] = React.useState(null);
  const defaultClassNames = getDefaultClassNames();
  const [fetchs, setFetchs] = useState(false)

  useEffect(() => {

    if (!globalThis.fetch)
       { globalThis.fetch = fetch
         globalThis.Headers = Headers
          globalThis.Request = Request
           globalThis.Response = Response }
            if (typeof window !== 'undefined') {
        const handleSubmit = async () => {
            console.log('sexo')
           const data = {
          name: 'parametros', //con esta funcion podraer peticiones, si necesitas get solo lo pasas
           password:''
           }
           const response = await fetch(`http://basilicadelvalle.org/api/register/data`, {
             method: 'get',
              cache: "no-cache",
               headers: { "Content-Type": 'application/json', Accept: 'application/json', },
                /* body: JSON.stringify(data), */ });
                 console.log(await response.json()); 
                 setFetchs(true); }
                  handleSubmit() 
                  console.log('aqui') } })


return fetchs ? (
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
) : null;
  }

export default Fecha;


