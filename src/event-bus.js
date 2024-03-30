import { reactive } from 'vue';

// Create a reactive event bus object
const eventBus = reactive({
  events: {},
  $on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  $off(event) {
    if (this.events[event]) {
      delete this.events[event];
    }
  },
  $emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(...args));
    }
  }
});

// Export the event bus
export default eventBus;
