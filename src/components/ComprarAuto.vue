<template>
    <div class="q-gutter-md" style="max-width: 300px">
        <q-form @submit="onComprar" @reset="onLimpiar" class="q-gutter-md">
            <q-select v-model="marca" :options="options" label="Elija la marca" />
            <div v-if= "condition">
              <q-select v-model="modelo" :options="modelosFerrari" label="Elija el modelo" />
            </div>
            <div v-if= "!condition">
              <q-select v-model="modelo" :options="modelosPorsche" label="Elija el modelo" />
            </div>
            <q-btn label="Comprar" type="submit" color="dark"/>
            <q-btn label="Limpiar" type="reset" color="dark"/>
        </q-form>
    </div>
</template>

<script>
import * as services from '../services'
import { COMPRAR_AUTO } from '../store/compras/types'
export default {
  data () {
    return {
      marca: '',
      modelo: null,
      marcas: [],
      modelosFerrari: null,
      modelosPorsche: null,
      condition: '',
      options: []
    }
  },
  methods: {
    onComprar: function () {
      const autoNuevo = {
        marca: this.marca,
        modelo: this.modelo
      }
      this.$store.dispatch('compras/' + COMPRAR_AUTO, autoNuevo)
    },
    onLimpiar: function () {
      this.marca = null
      this.modelo = null
    },
    obtenerMarcas: function () {
      const marcasLabel = []
      this.marcas.forEach(element => {
        marcasLabel.push(element.label)
      }
      )
      return marcasLabel
    }
  },
  watch: {
    marca: function (value) {
      if (this.marca === 'Ferrari') {
        this.condition = true
      } else {
        this.condition = false
      }
    }
  },
  mounted: function () {
    this.marcas = services.leerMarca()
    this.modelosFerrari = services.leerModelosFerrari()
    this.modelosPorsche = services.leerModelosPorsche()
    this.options = this.obtenerMarcas()
  }
}
</script>
