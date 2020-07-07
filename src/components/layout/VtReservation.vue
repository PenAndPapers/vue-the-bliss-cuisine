<template>
  <section
    id="reservation"
    class="reservation relative z-10 overflow-hidden bg-cover bg-center bg-black bg-fixed pt-16 pb-24"
  >
    <div class="container relative z-10 w-md block m-auto text-center">
      <h2 class="text-center text-12 text-white font-abrilfatface mb-8 inline-block px-16 border-b-1 border-white">
        Reservation
      </h2>
      <VtReservationForm class="grid grid-flow-row grid-cols-2 gap-4" />
    </div>
  </section>
</template>

<script>
import VtReservationForm from '@common/VtReservationForm'
export default {
  name: 'VtReservation',
  components: {
    VtReservationForm
  }
}
</script>

<style scoped>
.reservation {
  background-image: url('../../assets/images/tables.jpeg');
}
.reservation::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.7;
  background-color: #000;
}
</style>
