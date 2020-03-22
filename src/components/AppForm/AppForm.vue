<template>
<div class="app-form"> 

  <div class="container">   
      <b-row>
        <b-col sm="6" class="mb-5">       
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label class="form-title">Nome:</label>
                <input type="text" class="form-control" v-model.trim="$v.form.name.$model"
                :class="{
                  'is-invalid' :$v.form.name.$error,
                  'is-valid' :!$v.form.name.$invalid
                }">
                <div class="valid-feedback">Nome válido!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.form.name.required">Nome precisa ser preenchido!</span>
                  <span v-if="!$v.form.name.minLength">Nome precisa ter no minimo {{$v.form.name.$params.minLength.min}} caracteres!</span>
                </div>
              </div>


              <div class="form-group">
                <label class="form-title">Email:</label>
                <input type="email" class="form-control" v-model.trim.lazy="$v.form.email.$model"
                :class="{
                  'is-invalid':$v.form.email.$error,
                  'is-valid':!$v.form.email.$invalid
                }">
                <div class="valid-feedback">E-mail válido!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.form.email.required">E-mail precisa ser preenchido!</span>
                </div>
              </div>

               <div class="form-group">
                <label class="form-title">Telefone:</label>
                <input 
                  placeholder="Ex: (xx) xxxx-xxxxx"
                  type="number" 
                  class="form-control"
                  v-model.number.lazy="$v.form.phone.$model"
                  :class="{
                    'is-invalid':$v.form.phone.$error,
                    'is-valid':!$v.form.phone.$invalid
                  }">
                <div class="valid-feedback">Numero de telefone válido!</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.form.phone.required">Numero de telefone precisa ser preenchido!</span>
                  <span v-if="!$v.form.phone.numeric">
                    Digite um numero válido
                  </span>
                </div>
              </div>



              <div class="form-group">     
                <textarea cols="30"
                class="form-control"
                v-model.trim.lazy="$v.form.text.$model" 
                :class="{
                  'is-invalid' :$v.form.text.$error,
                  'is-valid' :!$v.form.text.$invalid
                }"
                rows="10" />
                <div class="invalid-feedback">
                  <span v-if="!$v.form.text.required">Escreva a sua sugestão!</span>
                  <span v-if="!$v.form.text.minLength">Mensagem deve ter no minimo {{$v.form.text.$params.minLength.min}} caracteres!</span>
                </div>
              </div>

            <button @click="submitForm"
              type="submit" 
              id="show-modal"               
              class="btn-send">
              Enviar 
              {{ submitstatus }}
            </button>           

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
import { required, minLength, email, numeric } from "vuelidate/lib/validators";

export default {
  name: "AppForm",
  props: ['modalHeader', 'modalText', 'modalFooter'],
  data() {
    return {
      showModal: false,
      form: {
        name: "",
        email: "",
        phone: "",
        text: ""
      },
      submitstatus: null
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      text: {
        required,
        minLength: minLength(5)
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        numeric,
        minLength: minLength(11)
      }
    }
  },
  methods: {
    submitForm() {
      this.$v.form.$touch();
      this.$v.form.$invalid
        ? (this.submitstatus = "ERRO")
        : (this.submitstatus = "ENVIADO");

      this.$http.post("form.json", this.form)
        .then(res => {
          this.form.name = "";
          this.form.email = "";
          this.form.text = "";
          this.form.phone = "";
          console.log(res)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.app-form {
  form {
    .form-control {
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    .form-title {
      text-align: left;
      display: block;
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
    cursor: pointer;
    a {
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

