import counting from './vue-counting.vue';
export default counting;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('counting', counting);
}
