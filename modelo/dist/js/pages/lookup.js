$(document).ready(function(){
	$(".autodata").each(function(idx, item){
		var lookup = $(item).attr("data-lookup");
		if(lookup){
			var isSelect = $(item).prop("tagName") == "SELECT";

			$.get(/lookup/ + lookup, function(data){
				if(isSelect){
					$(item).append("<option value=''>Selecione..</option>");
					for (var i = data.itens.length - 1; i >= 0; i--) {
						var novo = "<option value='" + data.itens[i][data.CampoChave] + "'>";
						novo = novo + data.ObterDescricao(data.itens[i]) + data.itens[i][data.CampoDescricao];
						novo = novo + "</option>";
					};
				}
			});
		}
	})
});