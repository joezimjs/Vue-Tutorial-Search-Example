<template>
  <div class="loading-overlay-container">
    <slot></slot>
    <div class="overlay" v-if="isLoading">
      <div class="loader">
        <svg version="1.1" class="loader-spinner" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
          <path fill="#fff" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"></path>
        </svg>
        <span class="loader-text">{{ loadingText }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    isLoading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: 'Loading'
    }
  }
}
</script>
<style scoped>
.loading-overlay-container {
  position: relative;
}

.overlay {
  background: rgba(0,0,0,.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: white;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  background: rgba(0,0,0,.5);
  padding: 20px;
  border-radius: 5px;
}

.loader-text {
  vertical-align: middle;
  font-size: 20px;
  text-transform: uppercase;
}

.loader-spinner {
  vertical-align: middle;
  animation: spinner 0.6s linear infinite;
}

@keyframes spinner {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
</style>
