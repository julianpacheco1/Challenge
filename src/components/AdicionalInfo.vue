<template>
  <div>
    <hr
      role="separator"
      aria-orientation="horizontal"
      class="mt-6 v-divider theme--light"
    />

    <div class="py-4">
      <div class="d-flex mb-4 open-sans-family font-0">
        <div
          class="d-flex justify-center align-center border-secondary mr-2 v-card v-sheet v-sheet--outlined theme--light traslate"
          style="width: 50px"
        >
          <i
            aria-hidden="true"
            class="v-icon notranslate mdi mdi-package-up theme--light quarter--text el-i"
            style="font-size: 40px"
          ></i>
        </div>
        Retiro gratis en nuestro local. <br />
        Rico 640, Dolores, Prov de Buenos Aires
      </div>
    </div>

    <div class="d-flex align-start">
      <div
      
        class="d-flex justify-center align-center border-secondary mr-2 v-card v-sheet v-sheet--outlined theme--light"
        style="min-width: 50px"
      >
        <i
          
          aria-hidden="true"
          class="v-icon notranslate mdi mdi-truck-fast theme--light quarter--text"
          style="font-size: 40px"
        ></i>
      </div>
      <div class="open-sans-family font-0" >
        Envío a domicilio. Consultenós el costo a su localidad.
        <br  />
        <span >
          Realizamos envíos a Dolores y zona con nuestra propia flota de
          camiones. LLegamos a Castelli, Lezama, Pila, Chascomús, Gral. Guido,
          Maipú, Gral. Conesa, Lavalle y el Partido de la Costa. Por otros
          destinos consulte antes de realizar su compra.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdicionalInfo",
  data() {
    return {};
  },
};
</script>

<style>
.font-0{
    font-size: 100%;
    margin: 0 auto;
}
.theme--light.v-divider {
  border-color: rgba(0, 0, 0, 0.12);
}
.mt-6 {
  margin-top: 24px !important;
}
.v-divider {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0px;
  -moz-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0;
  max-height: 0;
  border: solid;
  border-width: thin 0 0 0;
  -webkit-transition: inherit;
  -o-transition: inherit;
  -moz-transition: inherit;
  transition: inherit;
}

.py-4 {
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}

.mb-4 {
  margin-bottom: 16px !important;
}
.d-flex {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}
.open-sans-family {
  font-family: Open Sans, sans-serif;
}

.traslate {
  width: 50px;
}
.border-secondary {
  border: 2px solid var(--v-secondary-base);
}
.theme--light.v-sheet--outlined {
  border: thin solid rgba(0, 0, 0, 0.12);
}
.theme--light.v-sheet {
  background-color: #fff;
  border-color: #fff;
  color: rgba(0, 0, 0, 0.87);
}
.mr-2 {
  margin-right: 8px !important;
}
.align-center {
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  -moz-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}
.justify-center {
  -webkit-box-pack: center !important;
  -webkit-justify-content: center !important;
  -moz-box-pack: center !important;
  -ms-flex-pack: center !important;
  justify-content: center !important;
}
.d-flex {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}
.v-sheet.v-card {
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
.theme--light.v-card {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
}
.v-sheet {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}
.v-card {
  border-width: thin;
  display: block;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  -webkit-transition-property: opacity, -webkit-box-shadow;
  transition-property: opacity, -webkit-box-shadow;
  -o-transition-property: box-shadow, opacity;
  -moz-transition-property: box-shadow, opacity, -moz-box-shadow;
  transition-property: box-shadow, opacity;
  transition-property: box-shadow, opacity, -webkit-box-shadow, -moz-box-shadow;
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
}

.el-i {
  font-size: 100px;
}
.v-card > :last-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  -webkit-border-bottom-left-radius: inherit;
  -moz-border-radius-bottomleft: inherit;
  border-bottom-left-radius: inherit;
  -webkit-border-bottom-right-radius: inherit;
  -moz-border-radius-bottomright: inherit;
  border-bottom-right-radius: inherit;
}
.v-card > .v-card__progress + :not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > :first-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  -webkit-border-top-left-radius: inherit;
  -moz-border-radius-topleft: inherit;
  border-top-left-radius: inherit;
  -webkit-border-top-right-radius: inherit;
  -moz-border-radius-topright: inherit;
  border-top-right-radius: inherit;
}

.quarter--text {
  color: #461e8c !important;
  caret-color: var(--v-quarter-base) !important;
}
.v-icon.v-icon {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  font-size: 24px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  -o-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  -moz-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.theme--light.v-icon {
  color: rgba(0, 0, 0, 0.54);
}
</style>
