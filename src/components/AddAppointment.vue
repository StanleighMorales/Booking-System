<template>
  <div class="flex justify-center">
    <q-btn icon="calendar_today" label="Book now" @click="showDialog = true" color="primary" />

    <q-dialog v-model="showDialog" persistent>
      <q-card class="q-pa-md flex flex-center" style="width: 600px">
        <q-btn flat round icon="close" @click="closeDialog" class="absolute-top-right" />

        <q-card-section>
          <div class="text-h6">Book an Appointment</div>
        </q-card-section>

        <q-card-section>
          <!-- Services dropdown -->
          <q-select
            v-model="selectedService"
            label="Select Service"
            :options="services"
            outlined
            dense
            @update:model-value="generateTimeSlots"
          />

          <div class="flex flex-center q-gutter-md">
            <q-card class="q-mt-xl">
              <div class="flex justify-center">
                <span class="q-pt-sm">Select Date</span>
              </div>
              <q-card-section>
                <q-date
                  landscape
                  v-model="selectedDate"
                  label="Select Date"
                  outlined
                  dense
                  :options="combinedDateFilter"
                  @update:model-value="generateTimeSlots"
                />
              </q-card-section>
            </q-card>

            <q-card class="q-mt-xl">
              <div class="flex justify-center">
                <span class="q-pa-md">Select Time</span>
              </div>
              <q-card-section>
                <div class="q-gutter-sm flex wrap">
                  <q-btn
                    v-for="time in timeSlots"
                    :key="time"
                    :label="time"
                    flat
                    :color="selectedTime === time ? 'primary' : 'grey-5'"
                    @click="selectedTime = time"
                  />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="negative" @click="closeDialog" />
          <q-btn label="Submit" color="primary" @click="submitForm" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showDialog = ref(false);
const selectedService = ref(null);
const selectedDate = ref(null);
const selectedTime = ref(null);
const timeSlots = ref([]);

// Define clinic hours, excluding 12:00 PM to 12:59 PM
const startHour = 9;
const endHour = 18;

const services = [
  'Consultation',
  'Tooth Extraction',
  'Teeth Braces',
  'Dental Surgery',
  'Teeth Cleaning',
  'Dental Implants',
  'Teeth Whitening'
];

const closeDialog = () => {
  showDialog.value = false;
};

const submitForm = () => {
  if (selectedService.value && selectedDate.value && selectedTime.value) {
    console.log('Service:', selectedService.value);
    console.log('Date:', selectedDate.value);
    console.log('Time:', selectedTime.value);
    closeDialog();
  } else {
    alert('Please fill out all fields.');
  }
};

// Filter for available dates
const enableFutureDates = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedDate = new Date(date);
  return selectedDate >= today;
};

const disableSundays = (date) => {
  const selectedDate = new Date(date);
  return selectedDate.getDay() !== 0;
};

const combinedDateFilter = (date) => {
  return enableFutureDates(date) && disableSundays(date);
};

// Generate time slots, skipping 12:00 PM to 12:59 PM
const generateTimeSlots = () => {
  if (!selectedService.value || !selectedDate.value) {
    timeSlots.value = [];
    return;
  }

  // Determine interval based on selected service
  const isThirtyMinuteService = ['Consultation', 'Teeth Cleaning', 'Teeth Whitening'].includes(selectedService.value);
  const interval = isThirtyMinuteService ? 30 : 60;

  // Set the start and end times for the day
  const slots = [];
  let startTime = new Date(selectedDate.value);
  // Always start at 8:00 AM for the selected date
  startTime.setHours(startHour, 0, 0, 0);
  let endTime = new Date(selectedDate.value);
  endTime.setHours(endHour, 0, 0, 0);

  // Generate time slots based on the interval
  while (startTime < endTime) {
    const hours = startTime.getHours();
    const minutes = startTime.getMinutes();
    const timeLabel = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    // Skip time slots between 12:00 PM and 12:59 PM
    if (hours !== 12) {
      slots.push(timeLabel);
    }

    // Increment by the interval
    startTime.setMinutes(startTime.getMinutes() + interval);
  }

  timeSlots.value = slots;
};
</script>



<style scoped>
.absolute-top-right {
  position: absolute;
  top: 5px;
  right: 5px;
}
.q-pa-md {
  padding: 16px;
}
.q-gutter-sm {
  gap: 8px;
}
</style>
