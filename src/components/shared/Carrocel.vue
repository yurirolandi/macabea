<template>
<!-- eslint-disable-next-line vue/max-attributes-per-line -->
<!-- eslint-disable -->
<div class="teste">
  <div class="slides">
    <transition-group 
      name="slide"
      mode="out-in"
      enter-class="slide-in"
      leave-class="slide-out"
      enter-active-class="animated slide-in-active"
      leave-active-class="animated slide-out-active">    
    
      <div class="testango" v-if="index == active" v-for="index in slides" :key="index">        
          Slide {{ index }}      
      </div>
    </transition-group>
  </div>
 <div class="box-arrow">
    <span class="prev" @click="move(-1)">
     <font-awesome-icon icon="arrow-left" />
  </span>
  
  <span class="next" @click="move(1)">
   <font-awesome-icon icon="arrow-right" />
  </span>
 </div>
  <ul class="dots">
    <li v-for="(dot, index) in slides" :class="{ active: ++index === active }" @click="jump(index)" :key="dot" />
  </ul>
</div>
</template>

<script>
export default {
  name: "teste",
  data() {
    return {
      slides: 3,
      active: 1
    };
  },
  methods: {
    move(amount) {
      let newActive;
      const newIndex = this.active + amount;
      if (newIndex > this.slides) newActive = 1;
      if (newIndex === 0) newActive = this.slides;
      this.active = newActive || newIndex;
    },
    jump(index) {
      this.active = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.teste {
  .box-arrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .prev,
    .next {
      width: 50px;
      height: 50px;
      border: 2px solid black;
      color: black;
      border-radius: 50%;
      cursor: pointer;
      line-height: 48px;
      text-align: center;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      @media (max-width: 720px) {
        width: 30px;
        height: 30px;
        line-height: 28px;
      }

      &:hover {
        background: black;
        color: #fff;
        transform: scale(1.2);
      }

      &:active {
        transform: translate(0, 3px) scale(1.2);
      }
    }
  }

  .dots {
    display: block;
    width: 100%;
    text-align: center;
    bottom: 20px;

    li {
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background: black;
      opacity: 0.2;
      display: inline-block;
      margin: 0 3px;
      cursor: pointer;
      transition: opacity 0.4s ease-in-out,
        width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &.active {
        width: 22px;
        opacity: 1;
      }
    }
  }

  .slides {
    font-size: 40px;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    @media (min-width: 600px) {
      font-size: 80px;
    }

    @media (min-width: 900px) {
      font-size: 140px;
    }

    .animated {
      transition: all 400ms;
      position: absolute;
      transform: translate(-50%, -50%);
    }

    .slide-in {
      opacity: 0;
      transform: translate(-40%, -50%);
    }

    .slide-in-active {
      transition-delay: 150ms;
    }

    .slide-out {
      opacity: 1;
    }

    .slide-out-active {
      opacity: 0;
      transform: translate(-60%, -50%);
    }
  }

}
</style>
