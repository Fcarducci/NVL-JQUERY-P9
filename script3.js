//Pregunta 2:

let divs = $("div#container").children("div");

for (let i = 0; i < divs.length; i++) {
	divs.eq(i).attr(
		"class",
		$(divs)
			.eq(i)
			.attr("id")
	);
}

//Pregunta 3:

let cancion = $("p#heroes").html();

let genero = $("p#heroes")
	.parent()
	.attr("class");

let decada = $("p#heroes")
	.parent()
	.parent()
	.attr("class");

console.log("la cancion" +" " +cancion +" " +"pertenece al genero" +" " +genero +" " +"y esta se llevo acabo en los años" +" " +decada
);

//Pregunta 4:

let grupoHeroes = $("p#heroes");

let hermanosHeroes = $(grupoHeroes).nextAll();

for (let i = 0; i < hermanosHeroes.length; i++) {
	console.log(
		hermanosHeroes.eq(i).attr(
			"id",
			$(hermanosHeroes)
				.eq(i)
				.html()
		)
	);
}

//Pregunta 5:

let busqueda = $("#internacional").find("#queen");

if (busqueda !== true) {
	$("#ochenta .internacional").append("<p id=queen>Queen</p>");
}
