<template>
  <q-page>
    <div id="q-app" style="min-height: 100vh">
      <div class="q-pa-md">
        <q-input
          v-model="filter"
          label="Search"
          filled
          dark
          color="white"
          class="q-mb-md bg-primary text-black rounded-borders"
          @input="applyFilter"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-table
          flat
          bordered
          title="All Users"
          :rows="filteredRows"
          :columns="columns"
          row-key="name"
          dark
          class="bg-primary text-black"
          color="white"
        ></q-table>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";

const filter = ref(""); // For search input

const columns = [
  {
    name: "email",
    required: true,
    label: "User Email",
    align: "left",
    field: (row) => row.email,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "user_id",
    align: "center",
    label: "User ID",
    field: "user_id",
    sortable: true,
  },
  { name: "user_name", label: "Name", field: "user_name", sortable: true },
  { name: "sex", label: "Sex", field: "sex", sortable: true },
  { name: "contact", label: "Contact No.", field: "contact" },
  { name: "birthdate", label: "Birth Date", field: "birthday", sortable: true },
];

const rows = [
  {
    email: "Neil_Batak@gmail.com",
    user_id: 1,
    user_name: "Neil Batak",
    sex: "Male",
    contact: "1234567890",
    birthday: "1990-01-01",
  },
  {
    email: "John_Doe@gmail.com",
    user_id: 2,
    user_name: "John Doe",
    sex: "Male",
    contact: "1234567890",
    birthday: "1990-01-03",
  },
  {
    email: "Jane_Smith@gmail.com",
    user_id: 3,
    user_name: "Jane Smith",
    sex: "Female",
    contact: "1234567890",
    birthday: "1990-01-02",
  },
  {
    email: "John_Doe@gmail.com",
    user_id: 4,
    user_name: "John Doe",
    sex: "Male",
    contact: "1234567890",
    birthday: "1990-01-05",
  },
];

const filteredRows = computed(() => {
  if (!filter.value) return rows;
  const search = filter.value.toLowerCase();
  return rows.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search)
    )
  );
});

function applyFilter() {
  // Trigger reactivity if needed
}
</script>
