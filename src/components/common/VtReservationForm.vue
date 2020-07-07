<template>
  <form class="reservation-form" @submit.stop.prevent="() => { return false }">
    <div class="form-group">
      <label for="" class="block text-white text-left text-5 font-light">Name <span class="text-6 text-red-600">*</span></label>
      <input type="text" placeholder="John Doe" class="w-full h-16 p-4 text-5 font-light" required >
    </div>
    <div class="form-group">
      <label for="" class="block text-white text-left text-5 font-light">Email or phone <span class="text-6 text-red-600">*</span></label>
      <input type="text" placeholder="johndoe@mail.com" class="w-full h-16 p-4 text-5 font-light" required >
    </div>
    <div class="form-group">
      <label for="" class="block text-white text-left text-5 font-light">Date and time <span class="text-6 text-red-600">*</span></label>
      <input type="text" placeholder="12/24/2020 03:30 PM" class="w-full h-16 p-4 text-5 font-light" required>
    </div>
    <div class="form-group">
      <label for="" class="block text-white text-left text-5 font-light">Number of guests <span class="text-6 text-red-600">*</span></label>
      <input type="text" placeholder="5" class="w-full h-16 p-4 text-5 font-light" required>
    </div>
    <div class="form-group col-span-2 mt-3">
      <button class="w-1/2 h-16 p-4 leading-none text-5 text-white font-normal border-2 border-white hover:bg-black trasition-all duration-250">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'VtReservationForm'
}
</script>
