<template>
  <div class="py-3">
    <hr
      role="separator"
      aria-orientation="horizontal"
      class="mb-4 v-divider theme--light"
    />

    <div class="principal">
      <div class="d-flex qty-btn">
        <div class="d-flex align-center qty-btn__container">
          <button
          v-on:click="counter-=1"
            class="d-inline rounded-0 qty-btn qty-btn__minus v-btn v-btn--icon v-btn--plain v-btn--round v-btn--text theme--light v-size--default"
          >
            <span class="v-btn__content">
              <i
                aria-hidden="true"
                class="v-icon notranslate mdi mdi-minus theme--light"
              >
              </i>
            </span>
          </button>

          <div class="qty-btn__tf-container">
            <div
              class="v-input qty-btn__tf rounded-0 v-input--hide-details v-input--is-label-active v-input--is-dirty v-input--dense theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--solo-flat v-text-field--is-booted v-text-field--enclosed"
            >
              <div class="v-input__control">
                <div class="v-input__slot">
                  <div class="v-text-field__slot">
                    <input small type="tel" :value="counter"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
          v-on:click="counter+=1"
            class="d-inline rounded-0 qty-btn__plus v-btn v-btn--icon v-btn--plain v-btn--round v-btn--text theme--light v-size--default"
          >
            <span class="v-btn__content">
              <i
                aria-hidden="true"
                class="v-icon notranslate mdi mdi-plus theme--light"
              >
              </i>
            </span>
          </button>
        </div>
      </div>
    </div>


    <div class="pt-2 grey--text disponible">
        <span>Última disponible</span>
    </div>


    <div class="pt-4">
        <button class="px-10 font-weight-black text-uppercase btn transition v-btn v-btn--block v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--light v-size--large white--text boton-comprar" style="background-color: rgb(246, 193, 221); border-color: rgb(246, 193, 221);" >
            <span class="v-btn__content">
                <i aria-hidden="true" class="v-icon notranslate v-icon--left mdi mdi-cart-plus theme--light quarter--text">

                </i>
                <span class="font-1 quarter--text transition">
                    Comprar ahora
                </span>
            </span>
        </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuantityProducts",
  data(){
    return {
        counter : 0
    }
  },
};
</script>

<style>
.principal{
    border: 1px;
    border-color: grey;
   border-style:solid;
}
.py-3 {
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}

.theme--light.v-divider {
  border-color: rgba(0, 0, 0, 0.12);
}
.mb-4 {
  margin-bottom: 16px !important;
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

hr {
  overflow: visible;
  height: 0;
}

.d-flex {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.qty-btn__container[data-v-c0617df4] {
  border: 1px solid #d3d3d3;
}
.align-center {
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  -moz-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}
.d-flex {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -moz-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

/*  */

.theme--light.v-btn.v-btn--icon {
  color: rgba(0, 0, 0, 0.54);
}

.v-btn--icon.v-size--default {
  height: 36px;
  width: 36px;
}
.v-btn.v-size--default,
.v-btn.v-size--large {
  font-size: 0.875rem;
}
.theme--light.v-btn {
  color: rgba(0, 0, 0, 0.87);
}
.rounded-0 {
  -webkit-border-radius: 0 !important;
  -moz-border-radius: 0 !important;
  border-radius: 0 !important;
}
.d-inline {
  display: inline !important;
}

.v-btn {
  max-width: 100%;
}
.v-btn--round {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
.v-btn--fab,
.v-btn--icon {
  min-height: 0;
  min-width: 0;
  padding: 0;
}
.v-btn {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  -webkit-transition-duration: 0.28s;
  -moz-transition-duration: 0.28s;
  -o-transition-duration: 0.28s;
  transition-duration: 0.28s;
  -webkit-transition-property: opacity, -webkit-box-shadow, -webkit-transform;
  transition-property: opacity, -webkit-box-shadow, -webkit-transform;
  -o-transition-property: box-shadow, opacity, -o-transform;
  -moz-transition-property: box-shadow, transform, opacity, -moz-box-shadow,
    -moz-transform;
  transition-property: box-shadow, transform, opacity;
  transition-property: box-shadow, transform, opacity, -webkit-box-shadow,
    -moz-box-shadow, -webkit-transform, -moz-transform, -o-transform;
  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -moz-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  vertical-align: middle;
  white-space: nowrap;
}

button,
input,
select,
textarea {
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
}
button,
select {
  text-transform: none;
}
button {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
}

/*  */

.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover)
  .v-btn__content {
  opacity: 0.62;
}
.v-btn__content {
  max-width: 100%;
  text-align: center;
  white-space: normal;
}
.v-btn__content {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: inherit;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
}

.v-btn--fab.v-size--default .v-icon,
.v-btn--fab.v-size--small .v-icon,
.v-btn--icon.v-size--default .v-icon,
.v-btn--icon.v-size--small .v-icon {
  height: 20px;
  font-size: 24px;
  width: 24px;
}
.v-btn > .v-btn__content .v-icon {
  color: inherit;
}
.v-icon.v-icon {
  -webkit-box-align: center;
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;

  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  user-select: none;
}

.qty-btn__tf-container {
  position: relative;
}

.qty-btn__tf {
  max-width: 120px !important;
  width: 120px !important;
  border-left: none !important;
}
.v-text-field.v-text-field--enclosed {
  margin: 0;
  padding: 0;
}
.v-text-field.v-input--dense {
  padding-top: 0;
}
.theme--light.v-input,
.theme--light.v-input input,
.theme--light.v-input textarea {
  color: rgba(0, 0, 0, 0.87);
}
.rounded-0 {
  -webkit-border-radius: 0 !important;
  -moz-border-radius: 0 !important;
  border-radius: 0 !important;
}
.v-text-field--outlined,
.v-text-field--solo {
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
.v-text-field {
  padding-top: 12px;
  margin-top: 4px;
}
.v-input {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  font-size: 16px;
  letter-spacing: normal;
  max-width: 100%;
  text-align: left;
}

.v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  min-height: 38px;
}
.v-text-field.v-text-field--solo .v-input__control {
  min-height: 48px;
  padding: 0;
}
.v-text-field .v-input__control,
.v-text-field fieldset {
  color: currentColor;
}
.v-text-field .v-input__control,
.v-text-field .v-input__slot,
.v-text-field fieldset {
  -webkit-border-radius: inherit;
  -moz-border-radius: inherit;
  border-radius: inherit;
}
.v-input__control,
.v-input__icon {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
}
.v-input__control {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: auto;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  min-width: 0;
  width: 100%;
}

.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  padding: 0 12px;
}
.theme--light.v-text-field--solo > .v-input__control > .v-input__slot {
  background: #fff;
}
.qty-btn__tf[data-v-c0617df4] .v-input__slot {
  background-color: rgba(0, 0, 0, 0) !important;
}
.v-text-field > .v-input__control > .v-input__slot {
  cursor: text;
}
.v-input--hide-details > .v-input__control > .v-input__slot {
  margin-bottom: 0;
}
.v-input--dense > .v-input__control > .v-input__slot {
  margin-bottom: 4px;
}
.v-text-field .v-input__control,
.v-text-field .v-input__slot,
.v-text-field fieldset {
  -webkit-border-radius: inherit;
  -moz-border-radius: inherit;
  border-radius: inherit;
}
.v-input__slot {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 8px;
  min-height: inherit;
  position: relative;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  -o-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  -moz-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  -webkit-transition-property: height, min-height;
  -o-transition-property: height, min-height;
  -moz-transition-property: height, min-height;
  transition-property: height, min-height;
  width: 100%;
}

.v-text-field.v-text-field--solo.v-input--dense > .v-input__control {
  min-height: 38px;
}

.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  position: relative;
}
.v-text-field--outlined .v-text-field__slot,
.v-text-field--single-line .v-text-field__slot {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.qty-btn__tf .v-input__slot input {
  text-align: center;
  font-size: 1rem;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.v-text-field.v-text-field--solo .v-input__control input {
  caret-color: auto;
}
.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__prefix,
.v-text-field.v-input--dense:not(.v-text-field--outlined) .v-text-field__suffix,
.v-text-field.v-input--dense:not(.v-text-field--outlined) input {
  padding: 4px 0 2px;
}
.theme--light.v-input,
.theme--light.v-input input,
.theme--light.v-input textarea {
  color: rgba(0, 0, 0, 0.87);
}
.v-text-field input {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  line-height: 20px;
  padding: 8px 0 8px;
  max-width: 100%;
  min-width: 0;
  width: 100%;
}
.v-input input {
  max-height: 32px;
}
button,
input,
select,
textarea {
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
}
input {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}



.disponible{
    font-size: 0.9rem;
}
.pt-2 {
    padding-top: 8px!important;
}
.grey--text {
    color: #9e9e9e!important;
    caret-color: #9e9e9e!important;
}


.pt-4 {
    padding-top: 16px!important;
}



.boton-comprar{
    background-color: rgb(246, 193, 221);
    border-color: rgb(246, 193, 221);
}
.v-btn:not(.v-btn--round).v-size--large {
    height: 44px;
    min-width: 78px;
    padding: 0 19.5555555556px;
}
.theme--light.v-btn.v-btn--has-bg {
    background-color: #f5f5f5;
}
.transition[data-v-3ffcbdeb] {
    -webkit-transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    -o-transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    -moz-transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    -webkit-transition-property: all,visibility;
    -o-transition-property: all,visibility;
    -moz-transition-property: all,visibility;
    transition-property: all,visibility;
    -webkit-transition-duration: .3s,0s;
    -moz-transition-duration: .3s,0s;
    -o-transition-duration: .3s,0s;
    transition-duration: .3s,0s;
    -webkit-transition-timing-function: cubic-bezier(.25,.8,.5,1),ease;
    -moz-transition-timing-function: cubic-bezier(.25,.8,.5,1),ease;
    -o-transition-timing-function: cubic-bezier(.25,.8,.5,1),ease;
    transition-timing-function: cubic-bezier(.25,.8,.5,1),ease;
    -webkit-transition-delay: 0s,0s;
    -moz-transition-delay: 0s,0s;
    -o-transition-delay: 0s,0s;
    transition-delay: 0s,0s;
}
.v-btn[data-v-0c4d3a9b] {
    text-transform: none;
}
.v-btn.v-size--default, .v-btn.v-size--large {
    font-size: .875rem;
}
.theme--light.v-btn {
    color: rgba(0,0,0,.87);
}
.text-uppercase {
    text-transform: uppercase!important;
}
.px-10 {
    padding-right: 40px!important;
    padding-left: 40px!important;
}
.font-weight-black {
    font-weight: 900!important;
}
.white--text {
    color: #fff!important;
    caret-color: #fff!important;
}
.v-btn {
    max-width: 100%;
}
.v-btn--rounded {
    -webkit-border-radius: 28px;
    -moz-border-radius: 28px;
    border-radius: 28px;
}

.v-btn__content {
    max-width: 100%;
    text-align: center;
    white-space: normal;
}
.v-btn__content {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: inherit;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    -moz-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    -webkit-box-pack: inherit;
    -webkit-justify-content: inherit;
    -moz-box-pack: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
    line-height: normal;
    position: relative;
    -webkit-transition: inherit;
    -o-transition: inherit;
    -moz-transition: inherit;
    transition: inherit;
    -webkit-transition-property: opacity;
    -o-transition-property: opacity;
    -moz-transition-property: opacity;
    transition-property: opacity;
}

.v-btn__content .v-icon--left {
    margin-left: -4px;
    margin-right: 8px;
}
.v-btn__content .v-icon.v-icon--left, .v-btn__content .v-icon.v-icon--right {
    font-size: 18px;
    height: 18px;
    width: 18px;
}
.v-btn>.v-btn__content .v-icon {
    color: inherit;
}

.quarter--text {
    color:#461e8c!important;
    caret-color: #461e8c !important;
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
    -webkit-transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    -o-transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    -moz-transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.theme--light.v-icon {
    color: rgba(0,0,0,.54);
}
.v-icon--left {
    margin-right: 8px;
}

.quarter--text {
    color: #461e8c !important;
    caret-color: #461e8c !important;
}
.transition {
    -webkit-transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    -o-transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    -moz-transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    transition: .3s cubic-bezier(.25,.8,.5,1),visibility 0s;
    -webkit-transition-property: all,visibility;
    -o-transition-property: all,visibility;
    -moz-transition-property: all,visibility;
    transition-property: all,visibility;
    -webkit-transition-duration: .3s,0s;
    -moz-transition-duration: .3s,0s;
    -o-transition-duration: .3s,0s;
    transition-duration: .3s,0s;
    -webkit-transition-timing-function: cubic-bezier(.25,.8,.5,1),ease;
    -moz-transition-timing-function: cubic-bezier(.25,.8,.5,1),ease;
    -o-transition-timing-function: cubic-bezier(.25,.8,.5,1),ease;
    transition-timing-function: cubic-bezier(.25,.8,.5,1),ease;
    -webkit-transition-delay: 0s,0s;
    -moz-transition-delay: 0s,0s;
    -o-transition-delay: 0s,0s;
    transition-delay: 0s,0s;
}
.font-1 {
    font-size: 1rem;
    line-height: 1rem;
}
</style>
