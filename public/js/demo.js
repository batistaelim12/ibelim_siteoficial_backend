var my_skins = ["skin-blue", "skin-black", "skin-red", "skin-yellow", "skin-purple", "skin-green"];
$(function () {
  /* For demo purposes */
  var demo = $("<div />").css({
    position: "fixed",
    top: "70px",
    right: "0",
    background: "#fff",
    "border-radius": "5px 0px 0px 5px",
    padding: "10px 15px",
    "font-size": "16px",
    "z-index": "99999",
    cursor: "pointer",
    color: "#3c8dbc",
    "box-shadow": "0 1px 3px rgba(0,0,0,0.1)"
  }).html("<i class='fa fa-gear'></i>").addClass("no-print");

  var demo_settings = $("<div />").css({
    "padding": "10px",
    position: "fixed",
    top: "70px",
    right: "-250px",
    background: "#fff",
    border: "0px solid #ddd",
    "width": "250px",
    "z-index": "99999",
    "box-shadow": "0 1px 3px rgba(0,0,0,0.1)"
  }).addClass("no-print");
  var skins_list = $("<ul />", {"class": 'list-unstyled'});
  var skin_blue =
          $("<li />", {style: "float:left; width: 50%; padding: 5px;"})
          .append("<a href='#' onclick='change_skin(\"skin-blue\")' style='display: block; box-shadow: -1px 1px 2px rgba(0,0,0,0.0);' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 10px; background: #367fa9;'></span><span class='bg-light-blue' style='display:block; width: 80%; float: left; height: 10px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 40px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;'></span></div>"
                  + "<p class='text-center'>Skin Blue</p>"
                  + "</a>");
  skins_list.append(skin_blue);
  var skin_black =
          $("<li />", {style: "float:left; width: 50%; padding: 5px;"})
          .append("<a href='#' onclick='change_skin(\"skin-black\")' style='display: block; box-shadow: -1px 1px 2px rgba(0,0,0,0.0);' class='clearfix full-opacity-hover'>"
                  + "<div style='box-shadow: 0 0 2px rgba(0,0,0,0.1)' class='clearfix'><span style='display:block; width: 20%; float: left; height: 10px; background: #fefefe;'></span><span style='display:block; width: 80%; float: left; height: 10px; background: #fefefe;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 40px; background: #222;'></span><span style='display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;'></span></div>"
                  + "<p class='text-center'>Skin Black</p>"
                  + "</a>");
  skins_list.append(skin_black);
  var skin_purple =
          $("<li />", {style: "float:left; width: 50%; padding: 5px;"})
          .append("<a href='#' onclick='change_skin(\"skin-purple\")' style='display: block; box-shadow: -1px 1px 2px rgba(0,0,0,0.0);' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 10px;' class='bg-purple-active'></span><span class='bg-purple' style='display:block; width: 80%; float: left; height: 10px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 40px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;'></span></div>"
                  + "<p class='text-center'>Skin Purple</p>"
                  + "</a>");
  skins_list.append(skin_purple);
  var skin_green =
          $("<li />", {style: "float:left; width: 50%; padding: 5px;"})
          .append("<a href='#' onclick='change_skin(\"skin-green\")' style='display: block; box-shadow: -1px 1px 2px rgba(0,0,0,0.0);' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 10px;' class='bg-green-active'></span><span class='bg-green' style='display:block; width: 80%; float: left; height: 10px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 40px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;'></span></div>"
                  + "<p class='text-center'>Skin Green</p>"
                  + "</a>");
  skins_list.append(skin_green);
    var skin_red =
          $("<li />", {style: "float:left; width: 50%; padding: 5px;"})
          .append("<a href='#' onclick='change_skin(\"skin-red\")' style='display: block; box-shadow: -1px 1px 2px rgba(0,0,0,0.0);' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 10px;' class='bg-red-active'></span><span class='bg-red' style='display:block; width: 80%; float: left; height: 10px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 40px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;'></span></div>"
                  + "<p class='text-center'>Skin Red</p>"
                  + "</a>");
  skins_list.append(skin_red);
    var skin_yellow =
          $("<li />", {style: "float:left; width: 50%; padding: 5px;"})
          .append("<a href='#' onclick='change_skin(\"skin-yellow\")' style='display: block; box-shadow: -1px 1px 2px rgba(0,0,0,0.0);' class='clearfix full-opacity-hover'>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 10px;' class='bg-yellow-active'></span><span class='bg-yellow' style='display:block; width: 80%; float: left; height: 10px;'></span></div>"
                  + "<div><span style='display:block; width: 20%; float: left; height: 40px; background: #222d32;'></span><span style='display:block; width: 80%; float: left; height: 40px; background: #f4f5f7;'></span></div>"
                  + "<p class='text-center'>Skin Yellow</p>"
                  + "</a>");
  skins_list.append(skin_yellow);

  demo_settings.append("<h4 class='text-light-blue' style='margin: 0 0 5px 0; border-bottom: 1px solid #ddd; padding-bottom: 15px;'>Skins</h4>");
  demo_settings.append(skins_list);

  demo.click(function () {
    if (!$(this).hasClass("open")) {
      $(this).animate({"right": "250px"});
      demo_settings.animate({"right": "0"});
      $(this).addClass("open");
    } else {
      $(this).animate({"right": "0"});
      demo_settings.animate({"right": "-250px"});
      $(this).removeClass("open");
    }
  });

  $("body").append(demo);
  $("body").append(demo_settings);

  setup();
});

function change_layout(cls) {
  $("body").toggleClass(cls);
  $.AdminLTE.layout.fixSidebar();  
}
function change_skin(cls) {  
  $.each(my_skins, function (i) {
    $("body").removeClass(my_skins[i]);
  });

  $("body").addClass(cls);
  store('skin', cls);
  return false;
}
function store(name, val) {
  if (typeof (Storage) !== "undefined") {
    localStorage.setItem(name, val);
  } else {
    alert('Please use a modern browser to properly view this template!');
  }
}
function get(name) {
  if (typeof (Storage) !== "undefined") {
    return localStorage.getItem(name);
  } else {
    alert('Please use a modern browser to properly view this template!');
  }
}

function setup() {
  var tmp = get('skin');
  if (tmp && $.inArray(tmp, my_skins))
    change_skin(tmp);
}

$(document).ready(function () {
    $(".deleteButton").click(function (e) {
        e.preventDefault();
        bootbox.dialog({
            message: "Você tem certeza?",
            title: "Confirmação Exclusão",
            buttons: {
                success: {
                    label: "Não",
                    className: "btn-success",
                    callback: function () {
                        
                    }
                },
                danger: {
                    label: "Sim",
                    className: "btn-danger",
                    callback: function () {
                        $(e.currentTarget).closest('form').submit();
                    }
                }
            }
        });
    });
    $('input[type="text"]').setMask({selectCharsOnFocus: true});
    $("input[alt='phone9']").setMask("(99) 9999-99999").focusout(function(){
        var phone, element;
        element = $(this);
        element.unsetMask();
        phone = element.val().replace(/\D/g, '');
        if(phone.length > 10) {
            element.setMask("(99) 99999-9999");
        } else {
            element.setMask("(99) 9999-99999");
        }
    }).trigger('focusout');

    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR'
    });
    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {

        //Nova variável com valor do campo "cep".
        var cep = $(this).val();

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{5}-?[0-9]{3}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...")
                $("#bairro").val("...")
                $("#cidade").val("...")
                $("#uf").val("...")

                //Consulta o webservice viacep.com.br/
                $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#numero_endereco").focus();
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
});

