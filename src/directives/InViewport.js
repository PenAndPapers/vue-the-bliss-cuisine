import Vue from 'vue'

var offSet = 20
var screenH = window.innerHeight
var elems = []
var showContent = function () {
  elems.forEach(item => {
    if (screenH - offSet >= item.$el.getBoundingClientRect().top && !item.$el.classList.contains(item.$binding.value)) {
      item.$el.classList.add(item.$binding.value)
    }
  })
}

Vue.directive('in-viewport', {
  bind (el, binding) {
    elems.push({
      $el: el,
      $binding: binding
    })
    setTimeout(() => { showContent() }, 300)
    window.addEventListener('scroll', showContent)
  },
  unbind (el, binding) {
    window.removeEventListener('scroll', showContent)
  }
})
