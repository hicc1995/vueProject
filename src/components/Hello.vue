<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="newItem" v-on:keyup.enter="addItem">
    <ul>
      <li v-for="item in items" :class="{ fished: item.state }" v-on:click="change(item)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'To do list',
      items: [
        { label: 'Foo', state: true },
        { label: 'Bar', state: false }
      ],
      newItem: ''
    }
  },
  methods: {
    change: function (event) {
      event.state = !(event.state)
    },
    addItem () {
      this.items.push({
        label: this.newItem,
        state: false
      })
      this.newItem = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.fished{
  color: red;
  text-decoration: underline;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
