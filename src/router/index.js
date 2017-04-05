import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import Hello from '@/components/Hello'
import foo from '@/components/view/foo'
import bar from '@/components/view/bar'
import std from '@/components/view/std'
import allCourse from '@/components/view/allCourse'
import myCourse from '@/components/view/myCourse'
import personal from '@/components/view/personal'
import teach from '@/components/view/teach'
import coursePlan from '@/components/view/coursePlan'
import publishInfo from '@/components/view/publishInfo'
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
        {
          path: 'myCourse',
          component: myCourse
        },
        {
          path: 'personal',
          component: personal
        },
        // {
        //   path: 'classSchedule',
        //   component: classSchedule
        // }
      ]
    },
    {
      path: '/teach', components: {content:teach},
      children: [
        {
          path: 'coursePlan',
          component: coursePlan,
        },
        {
          path: 'publishInfo',
          component: publishInfo,
        }
      ]
    }
  ]
})
