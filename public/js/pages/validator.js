function tratarCampoInvalido(obj){
	if(obj.value == ''){
		obj.setCustomValidity("Campo Obrigatório");
		if($(obj).closest(".tab-pane").length > 0){
			$("a[href=#" + $(obj).closest(".tab-pane").attr("id") + "]").click();
		}
	}
	else{
		obj.setCustomValidity('');
	}
}

$(document).ready(function(){
	$("[required]").attr("oninvalid", "tratarCampoInvalido(this);");
	$("[required]").attr("oninput", "this.setCustomValidity('');");
});