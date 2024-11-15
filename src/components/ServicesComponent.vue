<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
// Reactive variable for description visibility
const showDescription = ref(false);
// Toggle for tablet screen sizes
const selectedCard = ref(null); // Stores the title of the selected card

// Function to toggle description based on title
const toggleDescription = (title) => {
  if ($q.screen.gt.xs && $q.screen.lt.md) {
    selectedCard.value = selectedCard.value === title ? null : title;
  }
};

// Toggle for smallest screen sizes (like iPhone SE)
const toggleDescriptionSmallest = (title) => {
  if ($q.screen.width <= 599) {
    selectedCard.value = selectedCard.value === title ? null : title;
  }
};
</script>

<template>
  <div class="flex justify-center q-mt-md">
    <span class="text-h4 text-white text-bold">Our Services</span>
  </div>
  <div class="q-pa-md row-stacked-to-horizontal">
    <div class="row">
      <div class="col-12 col-md">
        <q-card class="my-card">
          <img src="../assets/images/contents/surgery.jpg" />

          <q-card-section class="row flex justify-between">
            <div
              class="text-h6 mall-screen-title"
              :class="{ 'cursor-pointer': $q.screen.width <= 375 }"
              @click="toggleDescriptionSmallest('Dental Surgery')"
            >
              Dental Surgery
            </div>

            <div>
              <q-btn
                class="bg-primary text-white"
                flat
                icon="keyboard_arrow_down"
                v-if="$q.screen.gt.xs && $q.screen.lt.md"
                @click="toggleDescription('Dental Surgery')"
              />
            </div>
          </q-card-section>

          <q-card-section
            class="q-pt-none small-screen-description"
            v-show="!$q.screen.lt.md || selectedCard === 'Dental Surgery'"
          >
            Keep yourself and your loved ones healthy! At Tooth Art Dental
            Clinic, our friendly and experienced staff will make sure you always
            feel comfortable and well-informed. Schedule your Dental Surgery
            today for the whole family and see how our team of qualified
            professionals can get you or your loved ones feeling great.
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md">
        <q-card class="my-card">
          <img src="../assets/images/contents/tooth-extraction.jpg" />

          <q-card-section class="row flex justify-between">
            <div
              class="text-h6 mall-screen-title"
              :class="{ 'cursor-pointer': $q.screen.width <= 375 }"
              @click="toggleDescriptionSmallest('Tooth Extraction')"
            >
              Tooth Extraction
            </div>

            <div>
              <q-btn
                class="bg-primary text-white"
                flat
                icon="keyboard_arrow_down"
                v-if="$q.screen.gt.xs && $q.screen.lt.md"
                @click="toggleDescription('Tooth Extraction')"
              />
            </div>
          </q-card-section>

          <q-card-section
            class="q-pt-none small-screen-description"
            v-show="!$q.screen.lt.md || selectedCard === 'Tooth Extraction'"
          >
            If you’re looking for quality Tooth Extraction, then Tooth Art
            Dental Clinic is the Dental Clinic for you. Our professional team is
            here to guide our patients and their families every step of the way.
            Stop by and schedule an appointment to experience firsthand how our
            Tooth Extraction can help your health today.
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md">
        <q-card class="my-card">
          <img src="../assets/images/contents/Braces.jpg" />

          <q-card-section class="row flex justify-between">
            <div
              class="text-h6 mall-screen-title"
              :class="{ 'cursor-pointer': $q.screen.width <= 375 }"
              @click="toggleDescriptionSmallest('Teeth Braces')"
            >
              Teeth Braces
            </div>

            <div>
              <q-btn
                class="bg-primary text-white"
                flat
                icon="keyboard_arrow_down"
                v-if="$q.screen.gt.xs && $q.screen.lt.md"
                @click="toggleDescription('Teeth Braces')"
              />
            </div>
          </q-card-section>

          <q-card-section
            class="q-pt-none small-screen-description"
            v-show="!$q.screen.lt.md || selectedCard === 'Teeth Braces'"
          >
            At Tooth Art Dental Clinic, scheduling Braces Treatment has become
            simpler than ever before. Our personalized Braces Treatment provides
            patients with the resources they need to get their health on track —
            you’ll leave our clinic well informed and confident that your health
            is in good hands. Get in touch and schedule an appointment at your
            earliest convenience.
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md">
        <q-card class="my-card">
          <img src="../assets/images/contents/whitening.jpg" />

          <q-card-section class="row flex justify-between">
            <div
              class="text-h6 mall-screen-title"
              :class="{ 'cursor-pointer': $q.screen.width <= 375 }"
              @click="toggleDescriptionSmallest('Teeth Whitening')"
            >
              Teeth Whitening
            </div>

            <div>
              <q-btn
                class="bg-primary text-white"
                flat
                icon="keyboard_arrow_down"
                v-if="$q.screen.gt.xs && $q.screen.lt.md"
                @click="toggleDescription('Teeth Whitening')"
              />
            </div>
          </q-card-section>

          <q-card-section
            class="q-pt-none small-screen-description"
            v-show="!$q.screen.lt.md || selectedCard === 'Teeth Whitening'"
          >
            At Tooth Art Dental Clinic, scheduling Teeth Whitening Treatment is
            easier than ever. Our customized Teeth Whitening services give
            patients the tools they need for a brighter smile. You’ll leave our
            clinic feeling informed and confident that your smile is in expert
            hands. Contact us to book an appointment at your convenience.
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.row-stacked-to-horizontal
  .row > div
    padding: 10px 15px
  .row + .row
    margin-top: 1rem
</style>
