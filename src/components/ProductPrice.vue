<template>
  <div class="row">
    <div class="col col-12">
      <div style="position: relative;">
    <div class="grey--text" >
      <del>{{ priceData.pvPrice.basePrice }}</del>
    </div>
    
    <div class="d-flex align-center" >
      <span data-v-f1b57014 class="text-no-wrap font-8">
        <span class="mr-1">$</span>
        {{ priceData.pvPrice.price }}
        <sup>41</sup>
      </span>
      <span class="ml-2 red--text font-weight-bold font-1">{{ priceData.pvPrice.discountPct }}%OFF</span>
    </div>

    <div class="d-flex align-center py-1">
      <i aria-hidden="true" class="v-icon notranslate mr-2 mdi mdi-check theme--light" >
      </i>
      <span>{{ priceData.stock.availability }}</span>
    </div>

    <div class="d-flex align-center mt-2">
      <i class="v-icon notranslate mr-2 mdi mdi-credit-card theme--light">
      </i>
      "Hasta 18 cuotas sin interes"
    </div>
    
    <div>
      <QuantityProducts/>
    </div>


    <div>
      <AdicionalInfo/>
    </div>


  </div>
  </div>
  </div>
</template>

<script>

import QuantityProducts from "./QuantityProducts.vue"
import AdicionalInfo from "./AdicionalInfo.vue";

export default {
  components : {QuantityProducts, AdicionalInfo},
  props: {
    priceData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.row+.row {
    margin-top: 12px;
}
.col-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -moz-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.col {
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
}
.grey--text {
    color: #9e9e9e!important;
    caret-color: #9e9e9e!important;
}
.align-center {
    -webkit-box-align: center!important;
    -webkit-align-items: center!important;
    -moz-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
}
.text-no-wrap {
    white-space: nowrap!important;
}
span {
    line-height: 1;
}
.font-8 {
    font-size: 2rem;
    line-height: 2.4rem;
}
.ml-2 {
    margin-left: 8px!important;
}
.font-weight-bold {
    font-weight: 700!important;
}
.red--text {
    color: #f44336!important;
    caret-color: #f44336!important;
}

.font-1 {
    font-size: 1rem;
    line-height: 1rem;
}
.py-1 {
    padding-top: 4px!important;
    padding-bottom: 4px!important;
}
.align-center {
    -webkit-box-align: center!important;
    -webkit-align-items: center!important;
    -moz-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
}
.d-flex {
    display: -webkit-box!important;
    display: -webkit-flex!important;
    display: -moz-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
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

}
.theme--light.v-icon {
    color: rgba(0,0,0,.54);
}
.mr-2 {
    margin-right: 8px!important;
}
.mt-2 {
    margin-top: 8px!important;
}
.align-center {
    -webkit-box-align: center!important;
    -webkit-align-items: center!important;
    -moz-box-align: center!important;
    -ms-flex-align: center!important;
    align-items: center!important;
}
.d-flex {
    display: -webkit-box!important;
    display: -webkit-flex!important;
    display: -moz-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
}



</style>
