import HGraph from 'hgraph'

export default {
  install (Vue, options) {
    // console.log('GSI plugin', options.store)
    Vue.component('health-graph', HGraph)

    // 3. inject some component options
    Vue.mixin({
      created () {
      }
    })

    // Perform an action...
    Vue.prototype.$hgraph = function (container, userdata) {
      console.log('$hgraph:', this, container, userdata)
    }
  }
}
