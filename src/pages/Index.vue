<template>
  <q-page>
     <q-card>
     <q-tabs
        v-model="tab"
        dense
        align="left"
        class="bg-grey-7 text-white shadow-2"
        :breakpoint="0"
      >
        <q-tab name="Catálogo de Autos" icon="list" />
        <q-tab name="Comprar" icon="add_shopping_cart" />
        <q-tab name="Mis Autos" icon="directions_car" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Catálogo de Autos">
            <div class="text-h6">Autos</div>
            <Catalogo />
          </q-tab-panel>

          <q-tab-panel name="Comprar">
            <div class="text-h6">Comprar</div>
            <ComprarAuto />
          </q-tab-panel>

          <q-tab-panel name="Mis Autos">
            <MiGarage />
          </q-tab-panel>
        </q-tab-panels>
         </q-card>

  </q-page>
</template>

<script>
import MiGarage from '../components/MiGarage'
import ComprarAuto from '../components/ComprarAuto'
import Catalogo from '../components/Catalogo'

export default {
  name: 'PageIndex',
  components: {
    MiGarage,
    ComprarAuto,
    Catalogo
  },
  data () {
    return {
      tab: 'autos'
    }
  }
}
</script>
