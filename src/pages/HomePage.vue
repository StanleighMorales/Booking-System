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
//Home page image slider
const slide = ref('style')
const autoplay = ref(true);

const $q = useQuasar()

// Form data
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const submitting = ref(false)

const onSubmit = async () => {
  submitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Show success message
    $q.notify({
      type: 'positive',
      message: 'Thank you for your message. We will get back to you soon!'
    })

    // Reset form
    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Something went wrong. Please try again.'
    })
  } finally {
    submitting.value = false
  }
}


</script>

<template>
  <q-page class="flex flex-center min-width: 100%; max-width: 100%; ">
    <div id="parent" class="fit row wrap justify-evenly items-center content-center q-gutter-sm relative-position q-m-md " style="overflow: hidden;">
      <div id="text" class=" rounder-borders" style="overflow: auto; max-width: 35em;">
        <q-card
        flat
        class="transparent">
          <q-card-section>
            <q-card-title
              class="text-h3 text-bold text-white "
            >
              Welcome to Tooth Art Dental Clinic
            </q-card-title>
            <q-card>
              <q-card-section id="description" class="text-h5 q-ma-sm">
                <span v-bind:style="fontSize"
                >We strive to remove barriers connected to our society about Dental Health. We want to promote Oral Health awareness that it's a necessity. We want to remove anything that hinders a patient's ability to maintain a healthy smile. Our team is constantly working to discover new ways to break through barriers so that each and everyone of our patients can achieve the smile they truly deserve.
                </span>
                <div class="flex justify-end q-my-sm">
                  <router-view name="bookAppointment" />
                </div>
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
  <q-page id="service" class="fit bg-primary q-pa-md ">
    <div class="row">
      <div class=" full-width text-h4 text-bold q-px-sm text-white flex justify-center">
        <div>Our Services</div>
      </div>


    </div>
    <div class="row q-gutter-md justify-evenly q-pt-md ">
      <!-- service-images -->
      <q-card
        style=" min-width: 33em; max-width: 33em; height: 45em; border: solid 1px white">
        <q-img
          src="../assets/images/contents/surgery.jpg"
          class="rounded-borders"
          style="max-width: 35em; height: 30em;"

        />
      <!-- Dental Surgery -->
      <q-card-section class="relative-position">
        <q-card-title class="q-pa-md text-bold">Dental Surgery</q-card-title>
          <q-card-section id="description" class="q-px-md q-py-sm a">
            Keep yourself and your loved ones healthy! At Tooth Art Dental Clinic, our friendly and experienced staff will make sure you always feel comfortable and well-informed. Schedule your Dental Surgery today for the whole family and see how our team of qualified professionals can get you or your loved ones feeling great.        </q-card-section>
      </q-card-section>
      </q-card>
      <q-card
        style=" min-width: 33em; max-width: 33em; height: 45em; border: solid 1px white">
        <q-img
          src="../assets/images/contents/tooth-extraction.jpg"
          class="rounded-borders"
          style="max-width: 35em; height: 30em;"

        />
      <!-- Tooth Extraction -->
      <q-card-section class="relative-position">
        <q-card-title class="q-pa-md text-bold">Tooth Extraction</q-card-title>
          <q-card-section id="description" class="q-px-md q-py-sm a">
            If you’re looking for quality Tooth Extraction, then Tooth Art Dental Clinic is the Dental Clinic for you. Our professional team is here to guide our patients and their families every step of the way. Stop by and schedule an appointment to experience firsthand how our Tooth Extraction can help your health today.          </q-card-section>
      </q-card-section>
      </q-card>
      <!-- Brace Treatment -->
      <q-card
        style=" min-width: 33em; max-width: 33em; height: 45em; border: solid 1px white">
        <q-img
          src="../assets/images/contents/Braces.jpg"
          class="rounded-borders"
          style="max-width: 35em; height: 30em;"

      />
      <q-card-section class="relative-position">
        <q-card-title class="q-pa-md text-bold">Braces Treatment</q-card-title>
          <q-card-section id="description" class="q-px-md q-py-sm a">
            At Tooth Art Dental Clinic, scheduling Braces Treatment has become simpler than ever before. Our personalized Braces Treatment provide patients with the resources they need to get their health on track — you’ll leave our clinic well informed and confident that your health is in good hands. Get in touch and schedule an appointment at your earliest convenience.            </q-card-section>
          </q-card-section>
      </q-card>
    </div>
  </q-page>
  <!-- about section -->
  <q-page id="about" class=" bg-grey q-pa-md">
    <div class="row">
      <div class="col">
        <q-card>
          class 1
        </q-card>
      </div>
      <div class="col">
        <q-card>
          class 2
        </q-card>
      </div>
    </div>
</q-page>

<!-- interactive map section -->
<q-page class="flex flex-center min-width: 100%; max-width: 100%; ">
  <router-view />
</q-page>
<!-- contact section -->
<q-page id="contact" class="flex flex-center row min-width: 100%; max-width: 100%; ">
      <div>
        <q-card>
          <q-card-section class="q-pb-none">
          <div class="text-bold">
            Come and Visit Us
          </div>
          <div class="text-primary">
            A.C Cortes cor, B.B Cabahug Street Guizo Mandaue City
          </div>

          </q-card-section>
          <q-card-section>
            <q-list bordered separator  class="col-12">
              <q-item clickable v-ripple  >
                <q-item-section class="flex justify-center">Monday: 9:00am - 5:00pm</q-item-section>
              </q-item>
              <q-item clickable v-ripple  >
                <q-item-section>Tuesday: 9:00am - 5:00pm</q-item-section>
              </q-item>
              <q-item clickable v-ripple  >
                <q-item-section>Wednesday: 9:00am - 5:00pm</q-item-section>
              </q-item>
              <q-item clickable v-ripple  >
                <q-item-section>Thursday: 9:00am - 5:00pm</q-item-section>
              </q-item>
              <q-item clickable v-ripple  >
                <q-item-section>Friday: 9:00am - 5:00pm</q-item-section>
              </q-item>
              <q-item clickable v-ripple  >
                <q-item-section>Saturday: 9:00am - 5:00pm</q-item-section>
              </q-item>

            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-md" style="max-width: 400px; width: 100%">

        <q-card class="q-pa-lg">
          <q-card-section>
            <div class="text-h4 text-center q-mb-lg">Contact Us</div>
            <q-form @submit.prevent="onSubmit" class="q-gutter-md">
              <q-input
                filled
                v-model="name"
                label="Your Name *"
                :rules="[val => !!val || 'Name is required']"
              />

              <q-input
                filled
                v-model="email"
                label="Email *"
                type="email"
                :rules="[val => !!val || 'Email is required', val => /^[^@]+@[^@]+\.[^@]+$/.test(val) || 'Invalid email']"
              />

              <q-input
                filled
                v-model="subject"
                label="Subject *"
                :rules="[val => !!val || 'Subject is required']"
              />

              <q-input
                filled
                v-model="message"
                label="Message *"
                type="textarea"
                :rules="[val => !!val || 'Message is required']"
              />

              <div class="flex justify-center q-mt-lg">
                <q-btn
                  :loading="submitting"
                  type="submit"
                  color="primary"
                  label="Send Message"
                />
              </div>
            </q-form>
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
