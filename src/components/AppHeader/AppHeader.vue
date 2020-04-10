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
            {{ titlePage }}
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
    return {
      titlePage: "Macabéa"
    };
  },
  methods: {
    open() {
      let openMenu = document.querySelector(".app-header");
      openMenu.classList.add("open");
      let body = document.querySelector('body');
      body.style.overflow = 'hidden'
    },
    
    close() {
      let closeMenu = document.querySelector(".app-header");
      if (closeMenu.classList.contains("open")) {
        closeMenu.classList.remove("open");
        let body = document.querySelector('body');
        body.style.overflow = 'initial'
      }
    }
  },
  watch: {
    $route() {
      this.close();
      this.titlePage = this.$route.name;
    }
  }
};
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: black;
  color: white;
  padding: 0 2rem;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 10;
  .header-logo {
    display: block;
    text-transform: uppercase;
    margin-bottom: 0;
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
      
      margin-bottom: 0;
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
          &:hover {
            color: #009dff;
          }
          &.router-link-exact-active {
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
    opacity: 0.96;
    display: flex;
    flex-direction: column;
    transition: 1s;
    z-index: 100;
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
        justify-content: flex-start;
        align-items: center;
        height: 100vh;
      }
      .menu-content {
        @media (max-width: 992px) {
          flex-direction: column;
          display: flex;
        }

        .menu-content-item {
          @media (max-width: 992px) {
            flex-direction: column;
            margin: 1rem 0;
            padding: 10px 0;
          }
        }
      }
    }
    .close-menu {
      @media (max-width: 992px) {
        display: block;
        z-index: 3;
        margin: 2rem 0 1rem 0;
      }
    }
  }
}
</style>
