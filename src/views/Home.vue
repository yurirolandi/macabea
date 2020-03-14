<template>
  <div class="home">
   <div class="section">
     <h1 class="title">
     MACABÉA HOSTEL & POUSADA
     <span />
   </h1>

   <div class="container">
      <div class="box-img">
        <img src="../assets/img/rooms/macabea.jpg" alt="">
      </div>
      <div class="box-text">        
        Nosso hostel e pousada em Paraty é o lugar ideal para relaxar, fazer amigos e se divertir. Oferecemos conforto, segurança e facilidades. Seja para você que está mochilando, viajando sozinho, com amigos ou com amigos estamos à disposição para dar as melhores dicas do que fazer para aproveitar o melhor de Paraty. A poucos passos do hostel você encontrará  uma vida noturna, com várias opções de restaurantes e bares, supermercado, praia, centro de informações turísticas e terminal rodoviário. Paraty é uma cidade pequena, histórica e inesquecível.
      </div>
   </div>

   <div class="container">    
        <h1 class="title">
           NOSSOS DIFERENCIAIS
         <span />
        </h1> 
     <div class="card-content">
        <Card cardText="Ar-Condicionado" cardIcon="snowflake" />
        <Card cardText="Café da manhã" cardIcon="mug-hot" />
        <Card cardText="Atendimento 24h" cardIcon="clock" />
        <Card cardText="Wi-Fi" cardIcon="wifi" />     
  
        <Card cardText="Roupa de cama" cardIcon="bed" />
        <Card cardText="Cozinha coletiva" cardIcon="utensils" />
        <Card cardText="Bar" cardIcon="glass-cheers" />
        <Card cardText="televisão" cardIcon="tv" />
     </div>
   </div>

   <div class="container">
     <b-card bg-variant="dark" text-variant="white" title="POLÍTICAS:">
      <b-card-text>
        <b-row>
          <b-col>CHECK-IN 13 HORAS</b-col>
          <b-col>CHECK-OUT 11 HORAS</b-col>
       </b-row>
      </b-card-text>
      <b-card-text>
        Cancelamento gratuito e reembolso até 5 dias antes da chegada.
      </b-card-text>
    </b-card>
   </div>

   <div class="container">
    <h1 class="title">
      PARCEIROS
     <span />
   </h1>

   <div class="box">
      <h4 class="subtitle">Nós te ajudamos a ter uma experiência completa em Paraty!</h4>
      <b-row>
        <b-col>
            <img class="box-img" src="../assets/img/rooms/experiencia.jpg" alt="">
          <h3 class="title">EXPERIÊNCIAS<span /></h3>
          <p>
            Nossa equipe está preparada para marcar com você um encontro. Venha ter experiências conosco. Oferecemos, com agendamento, um dia de slackline na praia. Um trabalho que integra experiências corporais, como alongamentos e yoga. Marque também sua nova tatoo, o tatuador Juan Andres cuidará de todos os detalhes, garantindo segurança e qualidade no procedimento.
          </p>
        </b-col>
        <b-col>
            <img class="box-img" src="../assets/img/rooms/passeios.jpg" alt="">
          <h3 class="title">PASSEIOS<span /></h3>
          <p>
            Um dia completo de aventura e descanso. Agendamos passeios de escuna pelas ilhas e praias paradisíacas da baía de Paraty; Jeep Tour pelas principais cachoeiras e alambique, onde poderá degustar e apreciar a fabricação de cachaça. Aluguel de bicicletas. Passeios de kaiak, stand up, cavalo,mergulho,observação de pássaros, city tour e muito mais. 
          </p>
        </b-col>
      </b-row>
   </div>

   </div>
   </div>
  </div>
</template>

<script>
import Card from "../components/shared/Card";
export default {
  name: "Home",
  props: ["cardText", "cardIcon"],
  components: { Card }
};
</script>

<style lang="scss" scoped>
.home {
  .title {
    span {
      display: block;
      height: 1px;
      width: 100px;
      margin: 0 auto;
      background-color: #2c3e50;
    }
  }

  .subtitle{
    margin: 20px 0 30px 0;
  }

  .section {
    .box-text {
      max-width: 456px;
      text-align: justify;
      margin: 30px auto;
    }

    .card-content {
      display: flex;
      align-content: center;
      flex-wrap: wrap;
      padding: 30px;
      justify-content: space-around;
      max-width: 1050px;
    }

    .box{
      p{
        text-align: justify;
        font-size: 1.2rem;
        margin: 20px;
      }

      .box-img{
        margin: 20px 0;
      }
    }
  }
}
</style>

