<template>
    <div class="app-footer">
        <div class="container">   
            <b-row>        
                <b-col>
                    <h4 class="title">Macabéa Hostel & Pousada</h4>
                     <ul class="box-info">
                        <li>Rua Dom João VI 505 Jabaquara</li>
                        <li>Paraty - Rio de Janeiro</li>
                    </ul> 
                </b-col>

                <b-col>
                    <ul class="box-info">
                        <li>Em caso de dúvidas, entre em contato:</li>
                        <li>E-mail: macabea.me@gmail.com</li>
                        <li>Telefone: (24) 99214-6355</li>
                    </ul>       
                    <ul class="social-media">
                        <li>
                            <a href="https://www.instagram.com/macabeahostel/?hl=pt-br" target="blank">
                                <img class="social-link" src="../../assets/svg/instagram-square-brands.svg" >
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/macabeahostel/?ref=aymt_homepage_panel" target="blank">
                                <img class="social-link" src="../../assets/svg/facebook-square-brands.svg" >
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tripadvisor.com.br/Hotel_Review-g303503-d10632273-Reviews-Macabea_Hostel_Pousada-Paraty_State_of_Rio_de_Janeiro.html" target="blank">
                                <img class="social-link" src="../../assets/svg/tripadvisor-brands.svg" >
                            </a>
                        </li>
                    </ul>           
                </b-col>
            </b-row>            
    </div>
 </div>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style lang="scss" scoped>
.app-footer {
  background-color: black;
  color: white;
  padding: 20px;

  .box-info {
    list-style: none;
    li {
      margin: 0.5rem 0;
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
}
</style>
