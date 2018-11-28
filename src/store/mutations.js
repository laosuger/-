import state from './state.js'
export default{
	add(state){
		state.count++
	},
	reduce(state){
		state.start--
	}
}