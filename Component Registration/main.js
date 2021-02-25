import ComponentC from './componentC.vue'

var ComponentA = {
    props: ['post'],
    template: `
            <div class="blog-post">
              <p>haha1</p>
            </div>
          `
}
var ComponentB = {
    template: `
            <div class="blog-post">
              <p>haha2</p>
            </div>
          `
}

new Vue({
    el: '#app',
    components: {
        'component-a': ComponentA,
        'component-b': ComponentB,
        'component-c': ComponentC,
    }
})

