$(document).ready(function(){
	$(".UltimosMesesJaPassados").each(function(idx, item){
		var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

		var dataAtual = new Date();
		var mesAtual = dataAtual.getMonth();
		var anoAtual = dataAtual.getFullYear();
		var mesIteracao = mesAtual - 11;
		var anoIteracao = anoAtual;
		if(mesIteracao < 0){
			mesIteracao = 12 + mesIteracao;
			anoIteracao--;
		}

		for(var i = 0; i < 12; i++){
			$(item).append("<option value='" + anoIteracao + "-" + (mesIteracao + 1) + "-1'>" + meses[mesIteracao] + "/" + anoIteracao + "</option>");
			mesIteracao++;
			if(mesIteracao > 11){
				mesIteracao = 0;
				anoIteracao++;
			}
		}

		$(item).val(anoAtual + "-" + (mesAtual + 1) + "-1");
		$("#mes").val($(item).val());
		$(item).trigger("change");
	});

	$(".autodata").each(function(idx, item){
		var lookup = $(item).attr("data-lookup");
		if(lookup){
			var isSelect = $(item).prop("tagName") == "SELECT";

			$.get(/lookup/ + lookup, function(data){
				if(isSelect){
					$(item).append("<option value=''>Selecione..</option>");
					for (var i = data.Itens.length - 1; i >= 0; i--) {
						var novo = "<option value='" + data.Itens[i][data.CampoChave] + "'>";
						novo = novo + data.Itens[i][data.CampoDescricao];
						novo = novo + "</option>";

						$(item).append(novo);
					};
				}
			});
		}
	})
});