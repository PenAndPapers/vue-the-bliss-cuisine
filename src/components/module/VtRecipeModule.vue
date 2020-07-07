<template>
  <section class="recipe-module relative pt-16 pb-32">
    <div class="container w-xxl block m-auto text-center">
      <h2 class="text-center text-12 text-orange-500 font-abrilfatface leading-none mb-16 inline-block px-16 border-b-1 border-orange-500">Our Latest</h2>
      <VtRecipeCard
        v-for="(recipe, index) in recipes"
        :key="index"
        :recipe="recipe"
        :class="[(index % 2) ? 'flex-row-reverse' : '']"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import VtRecipeCard from '@common/VtRecipeCard'
export default {
  name: 'VtRecipeModule',
  components: {
    VtRecipeCard
  },
  computed: {
    ...mapState({
      recipes: state => state.Recipe.recipes
    })
  },
  mounted () {
    this.$store.dispatch('Recipe/getRecipes')
  }
}
</script>
