<template>
  <div class="wrapper">
    <div id="app" class="ui container">
  <div class="cover">
    <div class="ui center aligned header">
      <img class="ui small circular image" src="http://realcombatmedia.com/wp-content/uploads/2014/04/Bruce-Lee-UFC-Square.jpg">
      <h2 class="ui inverted header">
        Bruce Lee
      </h2>    
      <button class="ui inverted button" v-on:click="toggleCategory()"><i class="tag icon"></i> Category</button>
    </div>
  </div>
  <div class="category" v-if="toggleCat" transition="expand">
    <button class="ui inverted button">Standard</button>
    <button class="ui inverted red button">Red</button>
    <button class="ui inverted orange button">Orange</button>
  </div>
  <div class="content">
    color by <a target="_blank" href="http://www.colourlovers.com/palette/4337314/Possum_and_Taters">palette</a>
    <br/>
    image by <a target="_blank" href="http://realcombatmedia.com/2014/04/ea-history-bruce-lee-steps-octagon-time-ea-sports-ufc-launching-june-17/">Bruce Lee</a>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name:'',
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper{}
</style>