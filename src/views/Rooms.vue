<template>
    <div class="rooms">
        <div class="section">
            <h1>QUARTOS</h1>
           <div class="container">
                <!-- <Lightbox :thumbnail="images[0]" :images="images" /> -->
                <CardRoom />
           </div>
        </div>
    </div>
</template>

<script>
// import Lightbox from "../components/shared/Lightbox";
import CardRoom from '../components/shared/CardRoom';

export default {
  name: "Rooms",
  components: {
    // Lightbox
    CardRoom
  },
  data() {
    return {
      // images: [
      //   "https://www.fundospaisagens.com/800x600/wallpaper-artistico-de-luar.jpg",
      //   "https://www.fundospaisagens.com/800x600/wallpaper-artistico-de-luar.jpg",
      //   "https://www.fundospaisagens.com/800x600/wallpaper-do-espaco.jpg"
      // ]
    };
  }
};
</script>

<style lang="scss" scoped>
.rooms {
  .container {
    .lightbox {
      img {
        width: 100%;
      }
    }
  }
}
</style>
