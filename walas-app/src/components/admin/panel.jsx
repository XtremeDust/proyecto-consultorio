"use client";
import Ingresos from '@/components/admin/elementos';
import Gestion from '@/components/admin/gestion'

function Panel() {

  return (
  

    <div>
      <section>
        <Ingresos></Ingresos>
      </section>

      <section>
        <Gestion></Gestion>
      </section>
    </div>
  )
}

export default Panel
