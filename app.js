new Vue({
	el:'#app',
	data:{
		name:'rafee',
		isItTrue:true,	
		cars:['toyota','bmw','marceidiz'],	
		animal:{
			name:'franak'
		},
		src:'https://picsum.photos/id/237/200/300',
		alt:'this is a dog',
		link:'https://www.google.com/search?q=google&rlz=1C1CHBF_enBD836BD836&oq=goo&aqs=chrome.0.0i131i433j0i131i433i457j69i60l3j69i65l2j69i60.3471j0j7&sourceid=chrome&ie=UTF-8'
	},
	methods:{
		greeting(){
			return this.name
		},
		greeting1(){
			return this.isItTrue
		}
	}

})