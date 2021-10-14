<template>
  <component :is="type"
             class="button"
             :to="to ? to : null"
  >
    <span v-if="text" v-text="text" :class="{ 'text-transparent' : loading }" />
  </component>
</template>
<script>
export default {
  name: "SButton",
  computed: {
    type() {
      if ( this.to ) return "router-link"
      else if ( this.href ) return "a"
      return "button"
    }
  },

  props: {
    to: { type: String },
    href: { type: String },
    icon: { type: String },
    text: { type: String },
    size: { type: String },
    color: { type: String },
    loading: { type: Boolean, default: false }
  }
}
</script>
