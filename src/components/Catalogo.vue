<template>
  <div class="q-pa-md" style="max-width: 100%">
      <q-list bordered separator>
      <q-item clickable v-ripple v-for="auto of marcas" :key="auto.modelo">
        <q-item-section>
          <q-item-label overline>{{ auto.label }}</q-item-label>
          <q-item-label>{{ auto.modelo }}</q-item-label>
          <q-item-label overline>Descripcion</q-item-label>
          <q-item-label>{{ auto.descripcion }}</q-item-label>
          <q-img src= '../../images/Senna-Hero1920x1080.jpg' />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import * as services from '../services'
export default {
  data () {
    return {
      marcas: null
    }
  },
  mounted: function () {
    this.marcas = services.leerCatalogo()
  }
}
</script>
