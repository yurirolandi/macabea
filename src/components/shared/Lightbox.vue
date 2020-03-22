<template>
    <div class="lightbox">
        <a href="#" @click.prevent="show" class="w-full">
          <img class="w-64" :src="thumbnail">
      </a>
      <div class="lightbox-open" v-if="visible" @click="hide">
          <div class="close-light" @click.stop="hide">&times;</div>
          <div class="flex">
              <div class="arrow"
                   @click.stop="prev"
                   :class="{'invisible': ! hasPrev()}">
                 <font-awesome-icon icon="arrow-left"  />  
              </div>
              <div class="lightbox-image">
                  <img :src="images[index]">
              </div>
              <div class="arrow"
                   @click.stop="next"
                   :class="{'invisible': ! hasNext()}">
                  <font-awesome-icon icon="arrow-right"  />                 
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Lightbox",
  props: {
    thumbnail: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      index: 0
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.lightbox {
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%
  }
  .lightbox-open {
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 50;
    width: 100%;
    height: calc(100vh + 30vh);
    .close-light {
      position: absolute;
      top: 20%;
      right: 25%;
      color: white;
      font-size: 2.5rem;
      cursor: pointer;
      font-weight: bold;
      @media (max-width: 992px) {
        top: 13%;
        right: 5%;
      }
      @media (max-width: 414px) {
        top: 27%;
        right: 5%;
      }
      @media (max-width: 375px) {
        top: 28%;
        right: 5%;
      }
      @media (max-width: 320px) {
        top: 26%;
        right: 5%;
      }
    }
    .flex {
      display: flex;
      align-items: center;
      .arrow {
        cursor: pointer;
        color: white;
        font-size: 1.5rem;
        margin: 0 10px;
      }
      .lightbox-image {
        img {
          width: 100%;
        }
      }
    }
  }
  .close {
    color: white;
    cursor: pointer;
  }
}
</style>
