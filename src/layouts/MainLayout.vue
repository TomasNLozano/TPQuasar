<style>
div.background {
  background: url("../../images/Senna-Hero1920x1080.jpg") repeat;
  border: 2px solid black;
}

div.transbox {
  background-color: #ffffff;
  border: 1px solid black;
  opacity: 0.7;
}
</style>
<template>
  <div class="background">
    <div class="transbox">
      <q-layout view="lHh Lpr lFf">
        <q-header elevated>
          <q-toolbar class="bg-dark text-white shadow-2">
            <q-toolbar-title>
              Autos de Lujo App
            </q-toolbar-title>

            <div>App v0.01</div>
          </q-toolbar>
        </q-header>

        <q-page-container>
          <router-view />
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {}
}
</script>
