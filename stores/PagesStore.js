import { ref } from "vue";

export const usePagesStore = defineStore("pagesStore", {
  state() {
    const items = ref([]);

    return {
      items
    };
  },
  actions: {
    updateStateFromLocalStorage() {
      const itemsValue = JSON.parse(localStorage.getItem("items"));
      console.log('itemsValue', itemsValue)
      itemsValue ? this.items = itemsValue : this.items = null
    },

    setBanners(itemsValue) {
      localStorage.setItem("items", JSON.stringify(itemsValue));
      this.items = itemsValue;
    },

    clear() {
      localStorage.removeItem("items");
      localStorage.removeItem("user");
      localStorage.removeItem("is_logged");
      this.items = "";
    },
  },
});

