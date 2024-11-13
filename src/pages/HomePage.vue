<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar';

const quasar = useQuasar();
const fontSize = computed(()=> {
  return quasar.screen.lt.md ? '1.3rem' : '0.85rem';
});
defineOptions({
  name: 'HomePage'
});

const slide = ref('style')
const autoplay = ref(true);
</script>

<template>
  <q-page class="flex flex-center min-width: 100%; max-width: 100%; ">
    <div id="parent" class="fit row wrap justify-evenly items-center content-center q-gutter-sm relative-position q-m-md " style="overflow: hidden;">
      <div id="text" class=" rounder-borders" style="overflow: auto; max-width: 35em;">
        <q-card>
          <q-card-section>

            Child #1
            <q-card>
              <q-card-section id="description" class="text-h5">
                <span v-bind:style="fontSize"
                >We strive to remove barriers connected to our society about Dental Health. We want to promote Oral Health awareness that it's a necessity. We want to remove anything that hinders a patient's ability to maintain a healthy smile. Our team is constantly working to discover new ways to break through barriers so that each and everyone of our patients can achieve the smile they truly deserve.
                </span>
              </q-card-section>
            </q-card>
          </q-card-section>
        </q-card>
       </div>
    <div id="image" class=" rounder-borders" style="overflow: auto; min-width: 60em; max-width: 60em; min-height: 38em; max-height: 40em">
        <q-card>
             <q-card-section >
            Child #2
            <div class="q-pa-md">
              <q-carousel
                animated
                v-model="slide"
                navigation
                infinite
                :autoplay="autoplay"
                arrows
                transition-prev="slide-right"
                transition-next="slide-left"
                @mouseenter="autoplay = false"
                @mouseleave="autoplay = true"
                style="min-height: 33em; max-height: 30em"
                class="rounder-borders"
              >
                <q-carousel-slide :name="1" img-src="../assets/images/contents/Screenshot 2024-11-02 125030.png" />
                <q-carousel-slide :name="2" img-src="../assets/images/contents/Screenshot 2024-11-02 125030.png" />
                <q-carousel-slide :name="3" img-src="../assets/images/contents/Screenshot 2024-11-02 125030.png" />
                <q-carousel-slide :name="4" img-src="../assets/images/contents/Screenshot 2024-11-02 125030.png" />
              </q-carousel>
            </div>
        </q-card-section>

      </q-card>
      </div>

    </div>
  </q-page>
  <q-page class="fit bg-primary q-px-md">
    <div class="row">
      <div class="text-h4 text-bold q-px-sm bg-warning"> Our Services</div>


    </div>
    <div class="row q-gutter-md justify-center q-pt-md ">
      <q-card
        style=" min-width: 25em; max-width: 25em; height: 40em; border: solid 1px white">
        <q-img
        src="../assets/images/contents/Screenshot 2024-11-02 125030.png"
        class="rounded-borders"
        style="max-width: 25em; height: 30em;"

      ></q-img>
      <q-card-section class="relative-position">
        <q-card-title class="q-pa-md text-bold">hello card</q-card-title>
          <q-card-section id="description" class="q-px-md q-py-sm a">
            Keep yourself and your loved ones healthy! At Tooth Art Dental Clinic, our friendly and experienced staff will make sure you always feel comfortable and well-informed. Schedule your Dental Surgery today for the whole family and see how our team of qualified professionals can get you or your loved ones feeling great.        </q-card-section>
      </q-card-section>


      </q-card>


    </div>
  </q-page>
</template>




<style scoped>


@media (max-width: 533px) {
  #parent {
    flex-direction: column;
    width: 100%;
  }
  #text, #image{
    width: 100%;
  }
}


</style>
