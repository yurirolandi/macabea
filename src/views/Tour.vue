<template>
    <div class="tour">
       <div class="section">
            <h1 class="title">PASSEIOS <span /></h1>

            <div class="container">
                <div class="box">
                    <p class="text">
                     O Macabéa Hostel se preocupa em ajudar seus hóspedes a ter uma experiência completa em Paraty, por isso temos parcerias com agências de passeios para te ajudar a conhecer Paraty  e fazer a sua viagem ainda mais inesquecível!
                </p>
                     <p class="text">
                        Confira abaixo os passeios que você pode desfrutar em Paraty!
                     </p>
                    <p class="text">
                         Para saber mais informações, valores e disponibilidade, entre em contato!
                     </p>    
                </div>
            </div>

            <div class="container">
                <b-card-group deck>
                    <b-card data-aos="fade-down" class="m-2" title="Caiaque e Stand Up">
                    <b-card-text align="justify">
                            Venha explorar a baía de Paraty, através de um passeio guiado de Kaiak e/ou stand up. Remar por lugares longe do tumulto e próximo à natureza, em praias de areia branca, manguezal e ilhas tropicais.
                            </b-card-text>
                    </b-card>

                    <b-card data-aos="fade-down" class="m-2" title="Jeep Tour">
                    <b-card-text align="justify">
                                Quedas d’água deslumbrantes, piscinas naturais e muito verde aguardam vocês em um delicioso passeio pelo antigo caminho do Ouro. Roteiro pelas cachoeiras: Pedra Branca, Usina, Tobogã e Tarzan; Alambiques Pedra Branca e Engenho do Ouro – degustação de cachaça e doces. Visita guiada pelos Alambiques.
                            </b-card-text>
                    </b-card>

                    <b-card data-aos="fade-down" class="m-2" title="Tour da Cidade">
                   <b-card-text align="justify">
                                    O passeio consiste em uma caminhada pelo Centro Histórico da cidade acompanhado por um guia que contará lendas e histórias de séculos passados, passando pelas 04 igrejas, museu, Casa da Cultura, antigos sobrados e ateliês.
                                </b-card-text>
                    </b-card>
                </b-card-group>


                <b-card-group deck>
                    <b-card data-aos="fade-down" class="m-2" title="Passeio de Barco">
                    <b-card-text align="justify">
                                Venham conhecer a baía de Paraty e seus encantos, em um passeio pelas paradisíacas ilhas, o barco conta com restaurante a bordo, mesa de frutas inclusa. Roteiro com 4 paradas: Ilha do mantimento, Ilha comprida do Norte, Jurumim, Lagoa Azul e Malvão.
                            </b-card-text>
                    </b-card>

                    <b-card data-aos="fade-down" class="m-2" title="Caip Boat">
                    <b-card-text align="justify">
                                Venha se divertir em um Passeio de barco diferente. Você irá conhecer lugares incríveis. Uma festa em alto mar, gente bonita, caipirinha grátis, música e roteiros exclusivos.
                            </b-card-text>
                    </b-card>

                    <b-card data-aos="fade-down" class="m-2" title="Mergulho">
                    <b-card-text align="justify">
                             O mergulho em Paraty é realizado sob a supervisão de um profissional credenciado onde pessoas que não têm o curso podem experimentar a sensação de realizar um mergulho equipado, até uma profundidade máxima de 6 metros, a um preço acessível.
                             </b-card-text>
                    </b-card>
                </b-card-group>


                <b-card-group deck>
                    <b-card data-aos="fade-down" class="m-2" title="Aluguel de Bikes">
                    <b-card-text align="justify">
                                Várias bikes importadas, sendo Gary Fisher, TrekK e Schwinntemos. Opções de roteiros: Centro Histórico, Mata Atlântica, Cachoeiras, Caminho do Ouro, praias, você escolhe!
                            </b-card-text>
                    </b-card>

                    <b-card data-aos="fade-down" class="m-2" title="Observação de Aves">
                    <b-card-text align="justify">
                                Em Paraty temos um Parque Ecológico dedicado à observação de aves, onde já foram identificadas mais de 170 espécies. Localizado a 10 minutos do Centro Histórico de Paraty, o parque conta com uma torre de 5m de altura, binóculos, identificação da fauna, mirantes, guia bilingue e transporte privativo.
                            </b-card-text>
                    </b-card>

                    <b-card data-aos="fade-down" class="m-2" title="Slackline">
                    <b-card-text align="justify">
                                Aprenda andar de slackline! Um esporte motivacional, em que o objetivo é se manter em pé sobre uma fita e atravessá-la sem cair e, depois, talvez até arriscar algumas posições ou manobras mais radicais. Venha treinar seu equilíbrio, esvaziar a mente de todo o caos e relaxar.
                            </b-card-text>
                    </b-card>
                </b-card-group>
            </div>

    </div>
</div>
    
</template>

<script>
export default {
  name: "Tour"
};
</script>

<style lang="scss" scoped>
.tour {
  .section {
    .container {
      .box {
        .text {
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>
