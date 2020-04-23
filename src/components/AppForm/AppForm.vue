<template>
<div class="app-form"> 

  <div class="container">   
    <Modal v-if="show" modalFoooter="OK">
      <h1 slot="header">Mensagem:</h1>
      <h3 slot="body" 
        :class="{
          'is-erro' : this.submitstatus === 'ERRO',
          'is-valid' : this.submitstatus === 'ENVIADO'
        }">
        {{ submitstatus }}
      </h3>
      <div slot="footer">
        <button class="btn-ver" @click="show = false">OK</button>
      </div>
    </Modal>

      <b-row>
        <b-col class="mb-5 mr-5">       
            <form>
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
            </button>           

            </form>
        </b-col>   

        <b-col>
          <ul class="box-info">
              <li>E-mail: macabea.me@gmail.com</li>
              <li>Telefone: (24) 99214-6355</li>
          </ul>       
            <ul class="social-media mb-5">
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
            
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6622020382056!2d-44.71691088539264!3d-23.218978054921703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9d6d240f8b1a71%3A0x93a9ac904ce144da!2sMacab%C3%A9a%20hostel%20e%20Pousada!5e0!3m2!1spt-BR!2sbr!4v1569877828747!5m2!1spt-BR!2sbr" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          
        </b-col>
      </b-row>
   </div>
</div>
</template>

<script>
import { required, minLength, email, numeric } from "vuelidate/lib/validators";
import Modal from "../shared/Modal";
export default {
  name: "AppForm",
  props: ["modalHeader", "modalText", "modalFooter"],
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      form: {
        name: "",
        email: "",
        phone: "",
        text: ""
      },
      submitstatus: null,
      show: false
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
    submitForm(evt) {
      evt.preventDefault();

      this.$v.form.$touch();
      if (this.$v.form.$invalid) {
        this.submitstatus = "ERRO";
        this.show = true;
      } else {
        this.submitstatus = "ENVIADO";

        this.$http
          .post("form.json", this.form)
          // eslint-disable-next-line
          .then(res => {
            this.form.name = "";
            this.form.email = "";
            this.form.text = "";
            this.form.phone = "";
            this.show = true;
          });
      }
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
  h3.is-erro {
    color: red;
  }
  h3.is-valid {
    color: green;
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

