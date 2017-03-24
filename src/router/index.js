import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import Hello from '@/components/Hello'
import foo from '@/components/view/foo'
import bar from '@/components/view/bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        header:header,
        body:Hello
      }
    },
    {
      path: '/foo',
      name: 'foo',
      components: {
        header:header,
        body:foo
      }
    },
    {
      path: '/bar',
      name: 'bar',
      components: {
        header:header,
        body:bar
      }
    }
  ]
})
