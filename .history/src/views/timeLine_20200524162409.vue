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

.cover{
  padding-top: 50px;
  padding-bottom: 50px;
  background: #FF4945;
}

.category {
  background: #2E292C;
  height: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.content{
  padding-top:20px;
  padding-bottom: 20px;
}

/* TRANSITION */
/* always present */
.expand-transition {
  transition: all 0.5s ease;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  opacity: 0;
}
</style>