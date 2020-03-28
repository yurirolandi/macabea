<template>
    <div class="card-room">
            <div class="box">
                <div class="box-content">
                    <div class="foto">
                       <img src="../../assets/img/rooms/1.jpeg" alt="">
                    </div>
                </div>
                <div class="box-content">
                    <div class="texto">
                        <h4>Quarto Coletivo Misto 10 Camas</h4>
                        <p>
                            * VALOR POR PESSOA*. Quarto espaçoso, com banheiro, ventiladores, ar condicionado e armários individuais. Ideal que traga seu cadeado.
                        </p>
                        <p>&#9679; Tamanho: 215 m²</p>
                        <p>&#9679; Camas: 10 Solteiro</p>
                        <div class="text-footer">
                         <font-awesome-icon icon="shower" />
                         <font-awesome-icon icon="snowflake" />
                         <font-awesome-icon icon="wifi" />
                        </div>
                    </div>
                </div>
                <div class="box-content">
                    <div class="info">
                        <p>A partir de</p>
                        <h3>R$ 35</h3>
                        <button disabled="disabled">Mais Informações</button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-room {
  width: 100%;
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #cecece;
    .box-content {
      width: 100%;
      .foto {
        img {
          width: 250px;
          height: 200px;
        }
      }
      .texto {
        color: black;
        p {
          margin: 2px 0;
          text-align: left;
        }
        .text-footer {
          display: flex;
          align-items: left;
          width: 100px;
          justify-content: space-between;
          padding: 10px;
        }
      }
    }
  }
}
</style>
