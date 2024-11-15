<script setup>
import { computed, ref } from "vue";
import { useQuasar } from "quasar";

const quasar = useQuasar();
const fontSize = computed(() => {
  return quasar.screen.lt.md ? "1.3rem" : "0.85rem";
});
defineOptions({
  name: "HomePage",
});
//Home page image slider
const slide = ref("style");
const autoplay = ref(true);

const $q = useQuasar();

// Form data
const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const submitting = ref(false);

const onSubmit = async () => {
  submitting.value = true;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message
    $q.notify({
      type: "positive",
      message: "Thank you for your message. We will get back to you soon!",
    });

    // Reset form
    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } catch (error) {
    $q.notify({
      type: "negative",
      message: "Something went wrong. Please try again.",
    });
  } finally {
    submitting.value = false;
  }
};
</script>

<template>
  <q-page id="home" class="flex flex-center">
    <div class="q-pa-md row-stacked-to-horizontal">
      <div class="row">
        <div class="col-12 col-md-4">
          <q-card flat class="transparent">
            <q-card-section>
              <q-card-title class="text-h3 text-bold text-white">
                Welcome to Tooth Art Dental Clinic
              </q-card-title>
              <q-card>
                <q-card-section id="description" class="text-h5 q-ma-sm">
                  <span v-bind:style="fontSize"
                    >We strive to remove barriers connected to our society about
                    Dental Health. We want to promote Oral Health awareness that
                    it's a necessity. We want to remove anything that hinders a
                    patient's ability to maintain a healthy smile. Our team is
                    constantly working to discover new ways to break through
                    barriers so that each and everyone of our patients can
                    achieve the smile they truly deserve.
                  </span>
                  <div class="flex justify-end q-my-sm">
                    <router-view name="bookAppointment" />
                  </div>
                </q-card-section>
              </q-card>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-8">
          <div class="q-pa-md">
            <q-carousel
              class="wrap"
              style="height: 50em; border: solid 1px white"
              animated
              v-model="slide"
              arrows
              navigation
              infinite
              :autoplay="autoplay"
              
            >
              <q-carousel-slide
                :name="1"
                img-src="../assets/images/contents/01.jpg"
              />
              <q-carousel-slide
                :name="2"
                img-src="../assets/images/contents/02.jpg"
              />
              <q-carousel-slide
                :name="3"
                img-src="../assets/images/contents/03.jpg"
              />
              <q-carousel-slide
                :name="4"
                img-src="../assets/images/contents/04.jpg"
              />
              <q-carousel-slide
                :name="5"
                img-src="../assets/images/contents/05.jpg"
              />
            </q-carousel>
          </div>
        </div>
      </div>
    </div>
  </q-page>

  <q-page id="service" class="fit bg-primary q-pa-md">
    <router-view name="services" />
  </q-page>

  <!-- about section -->

  <q-page id="about" class="q-pa-md">
    <router-view name="about" />
  </q-page>

  <!-- interactive map section -->
  <q-page class="bg-primary flex flex-center min-width: 100%; max-width: 100%;">
    <router-view />
  </q-page>
  <!-- contact section -->
  <q-page
    id="contact"
    class="flex flex-center row min-width: 100%; max-width: 100%;"
  >
    <div>
      <q-card>
        <q-card-section class="q-pb-none">
          <div class="text-bold">Come and Visit Us</div>
          <div class="text-primary">
            A.C Cortes cor, B.B Cabahug Street Guizo Mandaue City
          </div>
        </q-card-section>
        <q-card-section>
          <q-list bordered separator class="col-12">
            <q-item clickable v-ripple>
              <q-item-section class="flex justify-center"
                >Monday: 9:00am - 5:00pm</q-item-section
              >
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Tuesday: 9:00am - 5:00pm</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Wednesday: 9:00am - 5:00pm</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Thursday: 9:00am - 5:00pm</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Friday: 9:00am - 5:00pm</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
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
              :rules="[(val) => !!val || 'Name is required']"
            />

            <q-input
              filled
              v-model="email"
              label="Email *"
              type="email"
              :rules="[
                (val) => !!val || 'Email is required',
                (val) => /^[^@]+@[^@]+\.[^@]+$/.test(val) || 'Invalid email',
              ]"
            />
            <q-input
              filled
              v-model="contact"
              label="Contact Number *"
              mask="+63##########"
              rules="[ 
    (val) => !!val || 'Contact number is required',
    (val) => val.length === 13 || 'Contact number must be 10 digits (e.g., +639123456789)',
  ]"
              type="tel"
              hint="Format: +639XXXXXXXXX"
              placeholder="Enter your number"
            />

            <q-input
              filled
              v-model="subject"
              label="Subject *"
              :rules="[(val) => !!val || 'Subject is required']"
            />

            <q-input
              filled
              v-model="message"
              label="Message *"
              type="textarea"
              :rules="[(val) => !!val || 'Message is required']"
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
  #text,
  #image {
    width: 100%;
  }
  .my-card {
    width: 100%;
    max-width: 250px;
  }
}
@media (max-width: 375px) {
  .small-screen-title {
    font-size: 16px !important; /* smaller title size */
  }

  .small-screen-description {
    font-size: 14px !important; /* smaller description size */
  }
}
</style>

<style lang="sass">
.example-row-stacked-to-horizontal
  .row > div
    padding: 10px 15px
    background: rgba(#999,.15)
    border: 1px solid rgba(#999,.2)
  .row + .row
    margin-top: 1rem
</style>
