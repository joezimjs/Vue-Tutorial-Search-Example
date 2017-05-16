<template>
  <div class="pagination-component">
    <ul v-show="totalPages > 1" class="pagination">
      <li :class="'page-item ' + allowedPageClass(page - 1)">
        <a class="page-link" href="javascript:void(0)" @click="prev">&lt;</a>
      </li>

      <li :class="'page-item ' + activeClass(pageNum)" v-for="pageNum in totalPages">
        <a class="page-link" href="javascript:void(0)" @click="setPage(pageNum)">{{ pageNum }}</a>
      </li>

      <li :class="'page-item ' + allowedPageClass(page + 1)">
        <a class="page-link" href="javascript:void(0)" @click="next">&gt;</a>
      </li>
    </ul>

    <p v-show="parseInt(records)">{{count}}</p>
  </div>
</template>

<script>
import range from '../utilities/range'

export default {
  props: {
    records: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: false,
      default: 10
    },
    countText: {
      type: String,
      required: false,
      default: 'Showing {from} to {to} of {count} records|{count} records|One record'
    },
    currentPage: {
      type: Number,
      required: false,
      default: 1
    }
  },
  model: {
    prop: 'currentPage',
    event: 'page-change'
  },
  data: function() {
    return { page: this.currentPage }
  },
  watch: {
    currentPage: function(val) {
      this.page = val
    }
  },
  computed: {
    totalPages: function() {
      return this.records ? Math.ceil(this.records / this.perPage) : 1
    },
    count: function() {

      let from = ((this.page - 1) * this.perPage) + 1
      let to = this.page == (this.totalPages) ? this.records : from + this.perPage - 1
      let parts = this.countText.split('|')
      let i = this.records == 1 ? 2 : this.totalPages == 1 ? 1 : 0

      return parts[i].replace('{count}', this.records)
        .replace('{from}', from)
        .replace('{to}', to)
    }
  },
  methods: {
    setPage: function(page) {
      if (this.allowedPage(page)) {
        this.page = page
        this.$emit('page-change', page)
      }
    },
    next: function() {
      return this.setPage(this.page + 1)
    },
    prev: function() {
      return this.setPage(this.page - 1)
    },
    allowedPage: function(page) {
      return page >= 1 && page <= this.totalPages
    },
    allowedPageClass: function(page) {
      return this.allowedPage(page) ? '' : 'disabled'
    },
    activeClass: function(page) {
      return this.page == page ? 'active' : ''
    }
  }
}
</script>

<style scoped>
  .pagination-component {
    text-align: center;
  }
</style>