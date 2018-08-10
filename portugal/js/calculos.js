 $(document).ready(function(){

    var url = "https://economia.awesomeapi.com.br/json/all";

    $.getJSON( url, function( data ) {

        // Formatação Número Real
            function formata(num) {
                var p = num.toFixed(2).split(".");
                return "" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
                    return  num + (i && !(i % 3) ? "." : "") + acc;
                }, "") + "," + p[1];
            }

        // Cotação Dollar CAD
            var cotacao = data.EUR.ask;
            $('.info').html( cotacao );

        // Gastos Iniciais
            var gi0 = $('.label').find('.gi_cad0').text();
            var gi_calc0 = gi0 * cotacao;
            $('.gi_r0').html( formata( gi_calc0 ) );

            var gi1 = $('.label').find('.gi_cad1').text();
            var gi_calc1 = gi1 * cotacao;
            $('.gi_r1').html( formata( gi_calc1 ) );

            var gi2 = $('.label').find('.gi_cad2').text();
            var gi_calc2 = gi2 * cotacao;
            $('.gi_r2').html( formata( gi_calc2 ) );

            var gi3 = $('.label').find('.gi_cad3').text();
            var gi_calc3 = gi3 * cotacao;
            $('.gi_r3').html( formata( gi_calc3 ) );

            var gi4 = $('.label').find('.gi_cad4').text();
            var gi_calc4 = gi4 * cotacao;
            $('.gi_r4').html( formata( gi_calc4 ) );

            var total_gi = gi_calc0 + gi_calc1 + gi_calc2 + gi_calc3 + gi_calc4;
            $('.gi_rtotal').html( formata( total_gi ) );

        // Diversos
            var cc0 = $('.label').find('.cc_cad0').text();
            var cc_calc0 = cc0 * cotacao;
            $('.cc_r0').html( formata( cc_calc0 ) );

            var cc1 = $('.label').find('.cc_cad1').text();
            var cc_calc1 = cc1 * cotacao;
            $('.cc_r1').html( formata( cc_calc1 ) );

            var cc2 = $('.label').find('.cc_cad2').text();
            var cc_calc2 = cc2 * cotacao;
            $('.cc_r2').html( formata( cc_calc2 ) );

            var cc3 = $('.label').find('.cc_cad3').text();
            var cc_calc3 = cc3 * cotacao;
            $('.cc_r3').html( formata( cc_calc3 ) );

            var cc4 = $('.label').find('.cc_cad4').text();
            var cc_calc4 = cc4 * cotacao;
            $('.cc_r4').html( formata( cc_calc4 ) );

            var total_cc = cc_calc0 + cc_calc1 + cc_calc2 + cc_calc3 + cc_calc4;
            $('.cc_rtotal').html( formata( total_cc ) );

        // Gastos Mensais
            var mr0 = $('.label').find('.mr_cad0').text();
            var mr_calc0 = mr0 * cotacao;
            $('.mr_r0').html( formata( mr_calc0 ) );

            var mr1 = $('.label').find('.mr_cad1').text();
            var mr_calc1 = mr1 * cotacao;
            $('.mr_r1').html( formata( mr_calc1 ) );

            var mr2 = $('.label').find('.mr_cad2').text();
            var mr_calc2 = mr2 * cotacao;
            $('.mr_r2').html( formata( mr_calc2 ) );

            var mr3 = $('.label').find('.mr_cad3').text();
            var mr_calc3 = mr3 * cotacao;
            $('.mr_r3').html( formata( mr_calc3 ) );

            var mr4 = $('.label').find('.mr_cad4').text();
            var mr_calc4 = mr4 * cotacao;
            $('.mr_r4').html( formata( mr_calc4 ) );

            var mr5 = $('.label').find('.mr_cad5').text();
            var mr_calc5 = mr5 * cotacao;
            $('.mr_r5').html( formata( mr_calc5 ) );

            var mr6 = $('.label').find('.mr_cad6').text();
            var mr_calc6 = mr6 * cotacao;
            $('.mr_r6').html( formata( mr_calc6 ) );

            var total_mr = mr_calc0 + mr_calc1 + mr_calc2 + mr_calc3 + mr_calc4 + mr_calc5 + mr_calc6;
            $('.mr_rtotal').html( formata( total_mr ) );

        // Total Mensal
            var somaMensal = total_mr;
            var tm = somaMensal / cotacao;
            $('.gastosMensais').html( formata( tm ) );

        // Total de Valores em Reais
            var total = total_gi + total_cc;
            $('.totalGastos').html( formata( total ) );

    });

});