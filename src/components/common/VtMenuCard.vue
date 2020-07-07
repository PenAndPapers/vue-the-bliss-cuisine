<template>
  <div class="menu-card">
    <div
      class="flex items-center py-8 first:border-t-0 border-b-1 border-orange-500 border-dashed cursor-pointer"
      :class="[index === 0 ? 'pt-0' : '']"
      @click="expandMenu"
    >
      <h2 class="flex-1 text-6 text-left text-white font-abrilfatface leading-none capitalize">{{ menu.name }}</h2>
      <span class="font-abrilfatface text-8 text-white leading-none">{{ expandText }}</span>
    </div>
    <div
      class="menu-list bg-gray-1000 last:border-b-1 border-orange-500 border-dashed transition-all duration-500"
      :class="[index === 0 ? '' : 'hidden']">
      <article
        class="text-left first:pt-8 pb-8"
        v-for="(item, index) in menu.items"
        :key="index"
      >
        <div class="flex items-center">
          <i class="fa fa-star text-3 text-white mr-2" v-if="item.best_seller"/>
          <i class="fa fa-star text-3 text-red-600 mr-2" v-if="item.recommended"/>
          <h2 class="text-5 text-white font-abrilfatface flex-1">{{ item.name }}</h2>
          <h2 class="text-5 text-white font-abrilfatface">${{ item.price }}.00</h2>
        </div>
        <hr>
        <p class="text-4 text-white font-light">{{ item.description }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VtMenuCard',
  props: {
    menu: {
      type: Object,
      default: () => {},
      required: true
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      expandText: '+'
    }
  },
  methods: {
    expandMenu () {
      const menu = this.$el.children[1]
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        this.expandText = '-'
      } else {
        menu.classList.add('hidden')
        this.expandText = '+'
      }
    }
  }
}
</script>
