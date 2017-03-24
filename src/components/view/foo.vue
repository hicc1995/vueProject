<template>
	<div>
		<table-control></table-control>
	</div>
</template>

<script>

var tableControl = require('../tableControl.vue')

module.exports = {
	name: 'foo',
  components: {
    'table-control': tableControl
  }
}
</script>
