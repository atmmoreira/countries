 $(document).ready(function(){

    const url = "https://economia.awesomeapi.com.br/json/all";

    $.getJSON( url, function( data ) {

        // Formatação Número Real
            function formata(num) {
                let p = num.toFixed(2).split(".");
                return "" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
                    return  num + (i && !(i % 3) ? "." : "") + acc;
                }, "") + "," + p[1];
            }

        // Cotação Dollar CAD
            let cotacao = data.CAD.ask;
            $('.cotacao').html(cotacao);

        // Gastos Iniciais
            let gi_cad01 = $('.gi01_cad').text();
            let gi_real01 = gi_cad01  * cotacao;
            $('.gi01_real').html( formata( gi_real01 ) );

            let gi_cad02 = $('.gi02_cad').text();
            let gi_real02 = gi_cad02  * cotacao;
            $('.gi02_real').html( formata( gi_real02 ) );

            let gi_cad03 = $('.gi03_cad').text();
            let gi_real03 = gi_cad03  * cotacao;
            $('.gi03_real').html( formata( gi_real03 ) );

            let gi_cad04 = $('.gi04_cad').text();
            let gi_real04 = gi_cad04  * cotacao;
            $('.gi04_real').html( formata( gi_real04 ) );

            let gi_cad05 = $('.gi05_cad').text();
            let gi_real05 = gi_cad05  * cotacao;
            $('.gi05_real').html( formata( gi_real05 ) );

            let gi_cad06 = $('.gi06_cad').text();
            let gi_real06 = gi_cad06  * cotacao;
            $('.gi06_real').html( formata( gi_real06 ) );

            let gi_cad07 = $('.gi07_cad').text();
            let gi_real07 = gi_cad07  * cotacao;
            $('.gi07_real').html( formata( gi_real07 ) );

            let gi_cad08 = $('.gi08_cad').text();
            let gi_real08 = gi_cad08  * cotacao;
            $('.gi08_real').html( formata( gi_real08 ) );

            let gi_cad09 = $('.gi09_cad').text();
            let gi_real09 = gi_cad09  * cotacao;
            $('.gi09_real').html( formata( gi_real09 ) );

            let totalcad = Number(gi_cad01) + Number(gi_cad02) + Number(gi_cad03) + Number(gi_cad04)
            + Number(gi_cad05) + Number(gi_cad06) + Number(gi_cad07) + Number(gi_cad08) + Number(gi_cad09);
            $('.gitotal_cad').html( totalcad );

            let totalReal = gi_real01 + gi_real02 + gi_real03 + gi_real04 + gi_real05 + gi_real06 + gi_real07 + gi_real08 + gi_real09;
            $('.gitotal_real').html( formata( totalReal ) );
            $('.gastos_iniciais').html( formata( totalReal ) );

        // Gastos Mensais
            let gm_cad01 = $('.gm01_cad').text();
            let gm_real01 = gm_cad01  * cotacao;
            $('.gm01_real').html( formata( gm_real01 ) );

            let gm_cad02 = $('.gm02_cad').text();
            let gm_real02 = gm_cad02  * cotacao;
            $('.gm02_real').html( formata( gm_real02 ) );

            let gm_cad03 = $('.gm03_cad').text();
            let gm_real03 = gm_cad03  * cotacao;
            $('.gm03_real').html( formata( gm_real03 ) );

            let gm_cad04 = $('.gm04_cad').text();
            let gm_real04 = gm_cad04  * cotacao;
            $('.gm04_real').html( formata( gm_real04 ) );

            let gm_cad05 = $('.gm05_cad').text();
            let gm_real05 = gm_cad05  * cotacao;
            $('.gm05_real').html( formata( gm_real05 ) );

            let gm_cad06 = $('.gm06_cad').text();
            let gm_real06 = gm_cad06  * cotacao;
            $('.gm06_real').html( formata( gm_real06 ) );

            let gm_cad07 = $('.gm07_cad').text();
            let gm_real07 = gm_cad07  * cotacao;
            $('.gm07_real').html( formata( gm_real07 ) );

            let gm_cad08 = $('.gm08_cad').text();
            let gm_real08 = gm_cad08  * cotacao;
            $('.gm08_real').html( formata( gm_real08 ) );

            let totalcadGm = Number(gm_cad01) + Number(gm_cad02) + Number(gm_cad03) + Number(gm_cad04) + Number(gm_cad05) + Number(gm_cad06) + Number(gm_cad07) + Number(gm_cad08);
            $('.gmtotal_cad').html( totalcadGm );
            $('.gastos_mensais').html( formata( totalcadGm ) );

            let totalRealGm = gm_real01 + gm_real02 + gm_real03 + gm_real04 + gm_real05 + gm_real06 + gm_real07 + gm_real08;
            $('.gmtotal_real').html( formata( totalRealGm ) );

    });
});