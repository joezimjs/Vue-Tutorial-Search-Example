<template>
  <div class="col-sm-6">
    <h4><a :href="item.url">{{ item.title }}</a></h4>
    <p>{{ item.description }}</p>
    <p>
      <template v-for="tech in item.tech">
        <span :class="'label ' + tech.toLowerCase()">{{ tech }}</span>&nbsp;
      </template>
    </p>
  </div>
</template>

<script>
export default {
  name: 'tutorial',
  props: ['item']
}
</script>

<style scoped>
  .vue {
    background-color: #41b883;
  }
  .angular {
    background-color: #dd0031;
  }
  .react {
    background-color: #06c4f9;
  }
  .javascript {
    background-color: #eed94c;
  }
  .css {
    background-color: #1571b2;
  }
  .html {
    background-color: #e44a24;
  }
</style>
