<template>
    <div class="rooms">
        <div class="section">
            <h1>QUARTOS</h1>
           <div class="container">                
                <CardRoom />
           </div>
        </div>
    </div>
</template>

<script>
import CardRoom from '../components/shared/CardRoom';

export default {
  name: "Rooms",
  components: {
    CardRoom
  },
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
