<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { computed } from "@vue/reactivity";
import { reactive } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
const papa = reactive({
  // data: JSON.parse(localStorage.getItem("todos") || "[]"),
  // {
  data: [
    {
      id: "",
      tanggal: "",
      nomorHp: "085234932112",
      nominal: 42000,
      catatan: "saya lunas",
    },
  ],
  provider: null,
  nomorHp: null,
  nominal: null,
  catatan: null,
  form: null,
  selected: null,
  mode: "add",
  search: null,
});

function createTodo() {
  if (papa.mode === "add") {
    papa.data.unshift({
      id: Math.random(),
      tanggal: new Date().toISOString(),
      provider: papa.provider,
      nomorHp: papa.nomorHp,
      nominal: papa.nominal,
      catatan: papa.catatan,
    });
    papa.provider = null;
    papa.nomorHp = null;
    papa.nominal = null;
    papa.catatan = null;
  } else {
    const index = todos.findIndex((o) => o.id === selected.value.id);
    papa.provider = null;
    papa.nomorHp = null;
    papa.nominal = null;
    papa.catatan = null;
  }
}

const filteredPapa = computed(() => {
  return papa.data;
});
// watchEffect(() => {
//   localStorage.setItem("todos", JSON.stringify(todo.data));
//   console.log(todo.data);
// });
function delPapa(index) {
  papa.data.splice(index, 1);
}
</script>

<template>
  <div class="container p-2">
    <h1>💕HALO MAMA</h1>
    <p>Beli pulsa</p>
    <div class="d-flex gap-5">
      <div class="sidebar col-md-4 border p-4 rounded-3 border-dark">
        <h4 class="mb-4 pb-3 border-bottom">📲Beli Pulsa</h4>
        <form @submit.prevent="createTodo">
          <div class="mb-3">
            <span class="text-uppercase d-block mb-2">Provider</span>
            <select
              class="form-select"
              v-model="papa.provider"
              aria-label="Default select example"
            >
              <option selected>Masukkan Provider</option>
              <option value="TELKOMSEL">Telkomsel</option>
              <option value="IM3">IM3</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label text-uppercase"
              >Nomor HP</label
            >
            <input
              v-model="papa.nomorHp"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Masukkan No HP"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlInput1"
              class="form-label text-uppercase"
              >Nominal</label
            >
            <input
              v-model="papa.nominal"
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Masukkan Nominal Pulsa"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label text-uppercase"
              placeholder="Masukkkan Catatan"
              >CATATAN</label
            >
            <textarea
              v-model="papa.catatan"
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button class="btn btn-primary" type="submit">
            <!-- {{ todo.mode === "add" ? "Simpan" : "Edit" }-->
            save
          </button>
        </form>
      </div>
      <div class="table-container col-md-8">
        <div class="select-custom d-flex gap-3 align-items-center mb-3">
          <div class="col-md-3">
            <input
              type="search"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Cari"
            />
          </div>
          <div class="col-md-3">
            <select class="form-select" aria-label="Default select example">
              <option selected>Filter By Provider</option>
              <option value="1">TELKOMSEL</option>
              <option value="2">XL</option>
              <option value="3">IM3</option>
            </select>
          </div>
          <div class="col-md-3">
            <select
              class="form-select col-md-3"
              aria-label="Default select example"
            >
              <option selected>Filter By Status</option>
              <option value="1">SUCCES</option>
              <option value="2">PENDING</option>
              <option value="3">CANCELLED</option>
            </select>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Provider</th>
              <th scope="col">Nomor Hp</th>
              <th scope="col">Nominal</th>
              <th scope="col">Status</th>
              <th scope="col">Catatan</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filteredPapa" :key="item.id">
              <td>{{ item.tanggal }}</td>
              <td>{{ item.provider }}</td>
              <td>{{ item.nomorHp }}</td>
              <td>{{ item.nominal }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.catatan }}</td>
              <td>
                <button type="button" class="btn btn-succes mx-1">✏</button>
                <button
                  type="button"
                  @click="delPapa(index)"
                  class="btn btn-danger"
                >
                  🗑
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
