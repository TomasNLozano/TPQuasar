<template>
  <div class="q-pa-md" style="max-width: 350px">
    <h5>Mi Garage</h5>
      <q-list bordered separator>
      <q-item clickable v-ripple v-for="auto in autos" :key="auto.marca">
        <q-item-section>
          <q-item-label overline>{{ auto.marca }}</q-item-label>
          <q-item-label>{{ auto.modelo }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    autos: function () {
      return this.$store.state.compras.misAutos
    }
  }
}
</script>
