<template>
	<div class="SearchPage">
		<button @click="handleReturn()">返回</button>
		<Search></Search>
		我是搜索页
		<div class="testa"></div>
		<div class="testb"></div>
	</div>
	
</template>
<script>
	import Search from '.././components/Search.vue'
	export default {
		name:"SearchPage",
		components:{
			Search
		},
		methods:{
			handleReturn(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped lang="less">
	@width: 200px;
	@height: 200px;
	@bgColor: yellowgreen;
	@margin-top: 20px;
	.border(@borderWidth){
		border: unit(@borderWidth,px) solid;
	}
	.testa{
		width: @width;
		height: @height;
		background: @bgColor;
		margin-top: @margin-top;
		.border(2);
	}
	.testb{
		width: @width;
		height: @height;
		background: @bgColor;
		margin-top: @margin-top;
		.border(5);
	}
</style>
