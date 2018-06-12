<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Component Demo</p>
    <mt-accordion
      title="Title"
      :initialExpandedItem="0"
      :items="demoItems">
      <template slot-scope="demoItems">
        {{ demoItems.item.text }}
      </template>
    </mt-accordion>
    <br />
    <p>Example 0 Accordion with HTML items</p>
    <mt-accordion
      title="HTML"
      :items="textItems">
      <template slot-scope="textItems">
        <button type="button">{{ textItems.item.buttonName }}</button>
        <input type="text" :placeholder="textItems.item.buttonName" />
      </template>
    </mt-accordion>
    <br />
    <p>Example 1 Accordion with links items</p>
    <mt-accordion
      title="Link"
      :initialExpandedItem="2"
      :items="linkItems">
      <template slot-scope="linkItems">
        <a 
          :href="linkItems.item.linkUrl"
          class="mt-accordion__vue-link--color-green">
          {{ linkItems.item.linkName }}</a>
      </template>
    </mt-accordion>
    <br />
    <p>Example 2 Accordion with components items</p>
    <mt-accordion
      title="Component"
      :items="messageItems">
      <template slot-scope="messageItems">
        <hello-world :msg="messageItems.item.message" />
      </template>
    </mt-accordion>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MtAccordion from './components/mt-accordion.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    MtAccordion
  },
  data () {
    return {
      demoItems: [{
        label: 'Label',
        text: 'Snackwave post-ironic gastropub poutine. Artisan pinterest mixtape aesthetic godard, vaporware kickstarter edison bulb mumblecore +1 irony cloud bread adaptogen. Microdosing flannel PBR&B 8-bit brunch adaptogen. Bushwick adaptogen polaroid organic ennui.'
      }, {
        label: 'Label',
        text: 'Snackwave post-ironic gastropub poutine. Artisan pinterest mixtape aesthetic godard, vaporware kickstarter edison bulb mumblecore +1 irony cloud bread adaptogen. Microdosing flannel PBR&B 8-bit brunch adaptogen. Bushwick adaptogen polaroid organic ennui.'
      }, {
        label: 'Label',
        text: 'Snackwave post-ironic gastropub poutine. Artisan pinterest mixtape aesthetic godard, vaporware kickstarter edison bulb mumblecore +1 irony cloud bread adaptogen. Microdosing flannel PBR&B 8-bit brunch adaptogen. Bushwick adaptogen polaroid organic ennui.'
      }, {
        label: 'Label',
        text: 'Snackwave post-ironic gastropub poutine. Artisan pinterest mixtape aesthetic godard, vaporware kickstarter edison bulb mumblecore +1 irony cloud bread adaptogen. Microdosing flannel PBR&B 8-bit brunch adaptogen. Bushwick adaptogen polaroid organic ennui.'
      }],
      textItems: [{
        buttonName: 'button 1'
      }, {
        buttonName: 'button 2'
      }, {
        buttonName: 'button 3'
      }],
      linkItems: [{
        linkUrl: 'https://router.vuejs.org/',
        linkName: 'vue-router'
      }, {
        linkUrl: 'https://vuex.vuejs.org/',
        linkName: 'vuex'
      }, {
        linkUrl: 'https://github.com/vuejs/vue-devtools#vue-devtools',
        linkName: 'vue-devtools'
      }, {
        linkUrl: 'https://vue-loader.vuejs.org/',
        linkName: 'vue-loader'
      }, {
        linkUrl: 'https://github.com/vuejs/awesome-vue',
        linkName: 'awesome-vue'
      }],
      messageItems: [{
        message: 'Welcome to Your First Vue.js App'
      }, {
        message: 'Welcome to Your Second Vue.js App'
      }]
    }
  }
}
</script>

<style>
#app {
  margin: 0px 49px;
}
.mt-accordion__vue-link--color-green {
  color: #42b983;
}
</style>
