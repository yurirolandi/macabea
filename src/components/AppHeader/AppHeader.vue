<template>
    <div class="app-header">   
          <div class="menu">
            <font-awesome-icon icon="times" @click="close" class="close-menu" />
            <ul class="menu-content">
                <li class="menu-content-item"><router-link to="/">INÍCIO</router-link></li>
                <li class="menu-content-item"><router-link to="/tour">PASSEIOS</router-link></li>
                <li class="menu-content-item"><router-link to="/package">PACOTES</router-link></li>
                <li class="menu-content-item"><router-link to="/rooms">QUARTOS</router-link></li>
                <li class="menu-content-item"><router-link to="/contact">CONTATO</router-link></li>
            </ul>
        </div>     
        <h2 class="header-logo">
            Macabéa
        </h2>      
        <div class="app-header-hamburg">
            <font-awesome-icon icon="bars"  @click="open" class="show-menu" />
        </div>
    </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {
    open() {
      let openMenu = document.querySelector(".app-header");
      openMenu.classList.add("open");
    },

    close() {
      let closeMenu = document.querySelector(".app-header");
      if (closeMenu.classList.contains("open")) {
        closeMenu.classList.remove("open");
      }
    }
  },
  watch: {
    $route() {
      this.close();
    }
  }
};
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  height: 100px;
  background-color: black;
  color: white;
  padding: 0 2rem;
  align-items: center;
  .header-logo{
    display: block;
  }

  @media (max-width: 992px) {
    height: 70px;
  }

  .app-header-hamburg {
    display: none;
    .show-menu {
      font-size: 30px;
      transition: 0.4s;
      cursor: pointer;
      display: block;
    }

    @media (max-width: 992px) {
      display: block;
      z-index: 3;
    }
  }

  .menu {
    .menu-content {
      list-style: none;
      display: flex;
      @media (max-width: 992px) {
        display: none;
      }

      .menu-content-item {
        margin: 0 0.5rem;
        transition: 0.4s;
        cursor: pointer;
        a {
          text-decoration: none;
          color: white;
          &:hover,
          &:active {
            color: #009dff;
          }
        }
      }
    }
    .close-menu {
      font-size: 30px;
      transition: 0.4s;
      cursor: pointer;
      display: none;
    }
  }

  &.open {
    height: 100vh;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    transition: 1s;
    .show-menu {
      display: none;
    }
    .header-logo {
      display: none;
    }
    .menu {
      @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 2rem 0;
      }
      .menu-content {
        @media (max-width: 992px) {
          flex-direction: column;
          display: flex;
        }

        .menu-content-item {
          @media (max-width: 992px) {
            flex-direction: column;
            margin: 1.5rem 0;
            padding: 10px 0;
          }
        }
      }
    }
    .close-menu {
      @media (max-width: 992px) {
        display: block;
        z-index: 3;
        margin: 2rem 0;
      }
    }
  }
}
</style>
