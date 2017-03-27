import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import Hello from '@/components/Hello'
import foo from '@/components/view/foo'
import bar from '@/components/view/bar'
import std from '@/components/view/std'
import allCourse from '@/components/view/allCourse'

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
    },
    {
      path: '/std', components: {content:std},
      children: [
        {
          path: 'allCourse',
          component: allCourse,
        },
        // {
        //   path: 'myCourse',
        //   components: myCourse
        // },
        // {
        //   path: 'classSchedule',
        //   components: classSchedule
        // }
      ]
    }
  ]
})
