<template>
  <div>
    <h1>{{ titulo }}</h1>
    <table>
        <thead>
            <tr>
                <td>Nome</td>
                <td>Cidade</td>
                <td>Estado</td>
                <td>Situação</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for='escola of escolas' :key='escola.cod'>
                <td>{{ escola.nome }}</td>
                <td>{{ escola.cidade }}</td>
                <td>{{ escola.estado }}</td>
                <td>{{ escola.situacaoFuncionamento }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>

import School from '../../../services/schools';

export default {
  data () {
    return {
      titulo : 'Lista de escolas',
      escolas : []
    }
  },
  mounted(){
      School.listar().then(resposta => {
          this.escolas = resposta.data[1]
      })
  }
}
</script>

<style>

</style>