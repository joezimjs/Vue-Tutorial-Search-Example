<template>
  <div class="col-sm-6">
    <h4><a :href="item.url">{{ item.title }}</a></h4>
    <p>{{ item.description }}</p>
    <p>
      <template v-for="tech in item.tech">
        <span :class="'label ' + tech">{{ mapTech(tech) }}</span>&nbsp;
      </template>
    </p>
  </div>
</template>

<script>
import { technologies } from '../data'

export default {
  name: 'tutorial',
  props: ['item'],
  methods: {
    mapTech: tech => technologies[tech] || ''
  }
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
  .js {
    background-color: #eed94c;
  }
  .css {
    background-color: #1571b2;
  }
  .html {
    background-color: #e44a24;
  }
</style>
