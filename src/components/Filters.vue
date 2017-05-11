<template>
  <div class="jumbotron">
    <p class="text-success">Use the search box and technology selector to find a tutorial you're looking for.</p>
    <div class="form-group input-group">
      <input type="search" class="form-control input-lg">
      <span class="input-group-btn">
        <button class="btn btn-primary btn-lg" type="button"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
      </span>
    </div>
    <p class="form-group text-center tech-options">
      <label class="radio-inline">
        <input type="radio" name="tech" checked>
        <strong>All</strong>
      </label><br>
      <label class="radio-inline">
        <input type="radio" name="tech">
        <strong>HTML</strong>
      </label>
      <label class="radio-inline">
        <input type="radio" name="tech">
        <strong>CSS</strong>
      </label>
      <label class="radio-inline">
        <input type="radio" name="tech">
        <strong>JavaScript</strong>
      </label>
      <label class="radio-inline">
        <input type="radio" name="tech">
        <strong>Angular</strong>
      </label>
      <label class="radio-inline">
        <input type="radio" name="tech">
        <strong>React</strong>
      </label>
      <label class="radio-inline">
        <input type="radio" name="tech">
        <strong>Vue</strong>
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: 'filters',
}
</script>

<style scoped>
  input[type=radio] {
    height: 21px;
  }
</style>
