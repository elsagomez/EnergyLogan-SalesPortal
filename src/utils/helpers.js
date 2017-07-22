import axios from "axios";

// var baseURL= "https://energy-logan.herokuapp.com"

const helpers={

	getProjects: function(){

		return axios.get("/api/projects/1").then(function(res){

			console.log("RUN GET PROJECTS QUERY HERE!!!");
			console.log(res.data);
			return res.data
		}).catch(function(err){
			console.log(err);
		});

},

	getSurveys: function(){

		return axios.get("https://energy-logan.herokuapp.com/api/projectFix/2").then(function(res){

			console.log("RUN GET SURVEYSSS 2!!!");
			console.log(res.data);
			return res.data
		}).catch(function(err){
			console.log(err);
		});
}
}


export default helpers;