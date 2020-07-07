<template>
  <div class="banner">
    <div class="box p-6 mb-4">
      <h2 class="relative text-20 text-center z-10 leading-none uppercase px-16 py-6">
        <span class="text-white text-shadow-black font-abrilfatface">We speak the good</span>
        <hr class="border-t-1 border-white">
        <span class="text-white text-shadow-black font-abrilfatface">food language</span>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtBanner',
  props: {
    siteInfo: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>
