<template>
<div class="app-form">
    <div class="container">
       
      <b-row>     
        <b-col>          
           <form action="POST">
                <input class="form-input" type="text" placeholder="Nome">
                <p class="for-error">Nome inválido</p>

                <input class="form-input" type="tel" maxlength="15" placeholder="Telefone">
                <p class="for-error">Telefone inválido</p>

                <input class="form-input" type="email" placeholder="Email">
                <p class="for-error">Email inválido</p>

                <textarea class="text-area" name="" id="" cols="33" rows="6"></textarea>
                <button class="btn-send">Enviar</button>
            </form>
        </b-col>   
        <b-col>
          <ul class="box-info">
              <li>E-mail: macabea.me@gmail.com</li>
              <li>Telefone: (24) 3371-9484</li>
          </ul>       
            <ul class="social-media">
              <li>
                <a href="https://www.instagram.com/macabeahostel/?hl=pt-br" target="blank">
                  <img class="social-link" src="../../assets/svg/instagram.svg" >
                </a>
              </li>
              <li>
                  <a href="https://www.facebook.com/macabeahostel/?ref=aymt_homepage_panel" target="blank">
                      <img class="social-link" src="../../assets/svg/facebook.svg" >
                  </a>
              </li>
              <li>
                <a href="https://www.tripadvisor.com.br/Hotel_Review-g303503-d10632273-Reviews-Macabea_Hostel_Pousada-Paraty_State_of_Rio_de_Janeiro.html" target="blank">
                  <img class="social-link" src="../../assets/svg/tripadvisor.svg" >
                </a>
              </li>
            </ul>    

            <img src="../../assets/img/rooms/mapa.jpg" class="mapa" alt="Macabéa">
              <div class="btn-ver">
                <a target="blank" href="https://www.google.com/maps/place/Macab%C3%A9a+hostel+e+Pousada/@-23.21948,-44.716125,13.99z/data=!4m8!3m7!1s0x0:0x93a9ac904ce144da!5m2!4m1!1i2!8m2!3d-23.2191057!4d-44.7147621?hl=pt-BR">
                  Ver mais
                </a>
              </div>
        </b-col>

      </b-row>
     
    </div>
</div>

</template>

<script>
export default {
  name: "AppForm",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.app-form {
  form {
    p {
      text-align: left;
      margin: 0.4rem;
      color: #c0392b;
      opacity: 0;
      transition: 0.3s ease;
    }
    .form-input {
      padding: 5px;
      width: 100%;
      &:focus {
        outline: none !important;
        border: 2px solid #3d9ce97c;
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    .text-area {
      padding: 0.3rem;
      width: 100%;
      &:focus {
        outline: none !important;
        border: 1px solid #3d9ce97c;
      }
    }
    .btn-send {
      display: block;
      padding: 0.6rem;
      border: none;
      margin: 0.6rem auto;
      color: #fff;
      background-color: black;
      &:hover {
        background-color: rgba(0, 0, 0, 0.76);
      }
    }
  }
  .container .box-info {
    list-style: none;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
  .btn-ver {
    display: block;
    padding: 0.6rem;
    border: none;
    margin: 0.6rem auto;
    color: #fff;
    background-color: black;
    max-width: 100px;
    a{
      color: #fff;
      text-decoration: none;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.76);
    }
  }
  .social-media {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    li {
      margin: 0 0.5rem;
      a {
        .social-link {
          height: 26px;
        }
      }
    }
  }

  .mapa {
    width: 100%;
    margin: 0.8rem 0;
  }
}
</style>

