<template>
  <div class="q-pa-md example-row-stacked-to-horizontal">
    <div class="flex justify-center q-mb-md">
      <span class="text-h4 text-bold text-white">About</span>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
        <div>
          <div class="column" style="height: 250px">
            <div class="col-auto q-ma-md">
              <q-card class="bg-red">
                <q-card-section>
                  <q-card-title>
                    <div class="text-h5 text-bold text-primary">Map</div>
                  </q-card-title>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <q-card>
          <q-card-section>
            <div class="flex justify-center">
              <span class="text-h5 text-bold text-primary">Our Mission</span>
            </div>
            <div>
              <span>
                <p>
                  Our clinic's mission is to provide our patients with a dental
                  experience that will promote a lifelong relationship built on
                  trust, confidence, quality of work, and exceptional patient
                  care.
                </p>
                <p>
                  We strive to remove barriers connected to our society about
                  Dental Health. We want to promote Oral Health awareness that
                  it's a necessity.
                </p>
                <p>
                  We want to remove anything that hinders a patient's ability to
                  maintain a healthy smile. Our team is constantly working to
                  discover new ways to break through barriers so that each and
                  everyone of our patients can achieve the smile they truly
                  deserve.
                </p>
              </span>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <div class="col-4">
          <q-img
            src="../assets/images/contents/Dental Insurance.webp"
            :ratio="0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass">
.example-row-stacked-to-horizontal
  .row > div
    padding: 10px 15px
    background: rgba(#999,.15)
    border: 1px solid rgba(#999,.2)
  .row + .row
    margin-top: 1rem

.example-column-variable-height
  .column
    background: rgba(#aa0, .1)
  .column > div
    padding: 10px 15px
    background: rgba(#999, .15)
    border: 1px solid rgba(#999, .2)
  .column + .column
    margin-top: 1rem
</style>
