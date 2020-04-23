<template>
    <div class="slide">
        <img v-bind:src="slide.src" >
    </div>
</template>

<script>
export default {
  name: "Slide",
  data() {
    return {};
  },
  props: ["slide"]
};
</script>

<style lang="scss" scoped>
.slide {
  img{
    width: 100%;
  }
}
</style>

