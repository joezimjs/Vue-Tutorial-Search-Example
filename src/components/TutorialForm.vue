<template>
  <form @submit.prevent="emitTutorial">
    <div class="row">
      <FormInput class="col-sm-4" name="title" v-model="formTutorial.title" required>Title</FormInput>
      <FormInput class="col-sm-4" name="url" v-model="formTutorial.url" required>URL</FormInput>
      <FormInput class="col-sm-4" type="date" name="date" v-model="formTutorial.datePublished" required>Date Published</FormInput>
    </div>
    <div class="row">
      <div class="form-group col-sm-6">
        <label for="description">Description</label>
        <textarea v-model="formTutorial.description" name="description" class="form-control" required></textarea>
      </div>
      <div class="form-group col-sm-6">
        <label for="description">Technologies</label>
        <div class="tech-options">
          <label class="tech-option" v-for="option in techOptions">
            <input type="checkbox" class="tech-check" v-model="formTutorial.tech" :value="option">
            <TechLabel class="tech-label" :tech="option" />
          </label>
        </div>
      </div>
    </div>
    <input type="submit" value="Add Tutorial" class="btn btn-primary btn-lg btn-block">
  </form>
</template>

<script>
import FormInput from './FormInput'
import TechLabel from './TechLabel'
import { technologies } from '../data'

export default {
  components: { FormInput, TechLabel },
  model: {
    event: 'submit'
  },
  props: {
    tutorial: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      formTutorial: this.generateTutorial(this.tutorial),
      techOptions: [...Object.keys(technologies)]
    }
  },
  watch: {
    tutorial(value) {
      this.formTutorial = this.generateTutorial(value)
    }
  },
  methods: {
    emitTutorial() {
      this.$emit('submit', this.formTutorial)
    },
    // Generates defaults and strips out any properties we don't want
    generateTutorial({ title='', datePublished='', description='', tech=[], url='' }) {
      return { title, datePublished, description, tech, url }
    }
  }
}
</script>

<style scoped>
.tech-options {
  display: flex;
  flex-flow: row wrap;
}

.tech-option {
  padding: 0 10px;
}

.tech-check, .tech-label {
  vertical-align: middle;
}

.tech-check {
  margin: 0;
}
</style>
