window.onload = function() {
	loadModules();
}

function loadModules() {
	var moduleContainer = document.getElementById("modules");

	// cloning single module template
	var tmpl = document.getElementById("moduleTemplate");
	var module = tmpl.content.cloneNode(true)

	//inserting correct values for module
	module.querySelector(".medName").innerHTML = "aminophen";
	module.querySelector(".rate").innerHTML = "3.2" + "ml/hr";
	module.querySelector(".dosage").innerHTML = "2.8" + "mcg/kg/hr";
	module.querySelector(".status").innerHTML = "no alerts";
	module.querySelector(".vtbi").innerHTML = "83.1" + "ml";

	moduleContainer.appendChild(module);
}