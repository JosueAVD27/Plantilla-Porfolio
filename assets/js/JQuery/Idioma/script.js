/**
* Configuraciones de Idioma
*/

$(document).ready(function () {
    var idiomaActual = "inglés";

    $("#switch-idioma").change(function () {
        if ($(this).is(":checked")) {
            idiomaActual = "español";
        } else {
            idiomaActual = "inglés";
        }
        traducirElementos(idiomaActual);
    });

    function cambiarSwitch(idioma) {
        if (idioma === "inglés") {
            $("#switch-idioma").prop("checked", false);
        } else {
            $("#switch-idioma").prop("checked", true);
        }
    }

    function traducirElementos(idioma) {
        $.getJSON("./assets/js/JQuery/Idioma/archivo.json", function (data) {

            /* 
             * Navegacion
            **/
            //About
            var direccion = data.acercaDeDireccion[idioma];
            $("#acercaDeDireccion").attr("data-page", direccion);
            //Resume
            var direccion1 = data.resumeDireccion[idioma];
            $("#resumeDireccion").attr("data-page", direccion1);
            //Porfolio
            var direccion2 = data.portfolioDireccion[idioma];
            $("#portfolioDireccion").attr("data-page", direccion2);
            //Blog
            var direccion3 = data.blogDireccion[idioma];
            $("#blogDireccion").attr("data-page", direccion3);
            //Contact
            var direccion4 = data.contactDireccion[idioma];
            $("#contactDireccion").attr("data-page", direccion4);

            /* 
             * Pagina About
            **/
            $("#sobreMi").text(data.sobreMi[idioma]);
            $("#acercaDe").text(data.acercaDe[idioma]);
            $("#acercaTexto1").text(data.acercaTexto1[idioma]);
            $("#acercaTexto2").text(data.acercaTexto2[idioma]);
            $("#acercaTexto3").text(data.acercaTexto3[idioma]);

            $("#desempeños").text(data.desempeños[idioma]);
            $("#desempeño1").text(data.desempeño1[idioma]);
            $("#desempeño1Texto").text(data.desempeño1Texto[idioma]);
            $("#desempeño2").text(data.desempeño2[idioma]);
            $("#desempeño2Texto").text(data.desempeño2Texto[idioma]);
            $("#desempeño3").text(data.desempeño3[idioma]);
            $("#desempeño3Texto").text(data.desempeño3Texto[idioma]);
            $("#desempeño4").text(data.desempeño4[idioma]);
            $("#desempeño4Texto").text(data.desempeño4Texto[idioma]);
            $("#desempeño5").text(data.desempeño5[idioma]);
            $("#desempeño5Texto").text(data.desempeño5Texto[idioma]);
            $("#desempeño6").text(data.desempeño6[idioma]);
            $("#desempeño6Texto").text(data.desempeño6Texto[idioma]);

            $("#testimonios").text(data.testimonios[idioma]);

            $("#clientes").text(data.clientes[idioma]);



            /* 
             * Pagina Resume
            **/
            $("#resume").text(data.resume[idioma]);
            $("#curriculum").text(data.curriculum[idioma]);

            $("#education").text(data.education[idioma]);
            $("#univesity").text(data.univesity[idioma]);
            $("#highScohol").text(data.highScohol[idioma]);
            $("#scohol").text(data.scohol[idioma]);
            $("#fechaUniversity").text(data.fechaUniversity[idioma]);
            $("#textEducation1").text(data.textEducation1[idioma]);
            $("#textEducation2").text(data.textEducation2[idioma]);
            $("#textEducation3").text(data.textEducation3[idioma]);

            $("#experience").text(data.experience[idioma]);
            $("#publicist_title").text(data.publicist_title[idioma]);
            $("#especialist_title").text(data.especialist_title[idioma]);
            $("#tecnico_title").text(data.tecnico_title[idioma]);
            $("#assistant_title").text(data.assistant_title[idioma]);
            $("#fechaExperience").text(data.fechaExperience[idioma]);
            $("#textExperience1_1").text(data.textExperience1_1[idioma]);
            $("#textExperience1_2").text(data.textExperience1_2[idioma]);
            $("#textExperience2_1_1").text(data.textExperience2_1_1[idioma]);
            $("#textExperience2_1_2").text(data.textExperience2_1_2[idioma]);
            $("#textExperience2_2_1").text(data.textExperience2_2_1[idioma]);
            $("#textExperience2_2_2").text(data.textExperience2_2_2[idioma]);
            $("#textExperience3_1").text(data.textExperience3_1[idioma]);
            $("#textExperience3_2").text(data.textExperience3_2[idioma]);
            $("#textExperience4_1").text(data.textExperience4_1[idioma]);
            $("#textExperience4_2").text(data.textExperience4_2[idioma]);

            $("#misCompetencias").text(data.misCompetencias[idioma]);
            $("#webDesing").text(data.webDesing[idioma]);
            $("#webDevelopment").text(data.webDevelopment[idioma]);
            $("#graphcDesing").text(data.graphcDesing[idioma]);
            $("#digitalMarketing").text(data.digitalMarketing[idioma]);
            $("#tresDModeling").text(data.tresDModeling[idioma]);

            $("#fontend").text(data.fontend[idioma]);
            $("#backend").text(data.backend[idioma]);
            $("#databases").text(data.databases[idioma]);


            /* 
             * Pagina Portfolio
            **/
            $("#portfolio").text(data.portfolio[idioma]);



            /* 
             * Pagina Blog
            **/
            $("#blog").text(data.blog[idioma]);



            /* 
             * Pagina Contact
            **/
            $("#contact").text(data.contact[idioma]);
            $("#contacto").text(data.contacto[idioma]);

            //Form
            $("#formContact").text(data.formContact[idioma]);

            var placeholderName = data.formName[idioma];
            $("#formName").attr("placeholder", placeholderName);

            var placeholderMail = data.formMail[idioma];
            $("#formMail").attr("placeholder", placeholderMail);

            var placeholderMessage = data.formMessage[idioma];
            $("#formMessage").attr("placeholder", placeholderMessage);

            $("#formBtn").text(data.formBtn[idioma]);

            /* 
             * Informacion general
            **/
            $("#btnVerContacto").text(data.btnVerContacto[idioma]);
            $("#habilidades").text(data.habilidades[idioma]);
            $("#curriculum").text(data.curriculum[idioma]);
            $("#descargar").text(data.descargar[idioma]);
            $("#correo").text(data.correo[idioma]);
            $("#cumple").text(data.cumple[idioma]);
            $("#cumpleFecha").text(data.cumpleFecha[idioma]);
            $("#telefono").text(data.telefono[idioma]);
            $("#ubicacion").text(data.ubicacion[idioma]);
            /* 
             * General config
            **/
            $("#titulo").text(data.titulo[idioma]);
            $("#switch").text(idioma === "inglés" ? "EN" : "ES");
            cambiarSwitch(idioma);
        });
    }

    traducirElementos(idiomaActual);
});