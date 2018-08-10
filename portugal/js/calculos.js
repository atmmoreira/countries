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
            let cotacao = data.EUR.ask;
            $('.cotacao').html(cotacao);

        // Gastos Iniciais
            let gi_euro01 = $('.gi01_euro').text();
            let gi_real01 = gi_euro01  * cotacao;
            $('.gi01_real').html( formata( gi_real01 ) );

            let gi_euro02 = $('.gi02_euro').text();
            let gi_real02 = gi_euro02  * cotacao;
            $('.gi02_real').html( formata( gi_real02 ) );

            let gi_euro03 = $('.gi03_euro').text();
            let gi_real03 = gi_euro03  * cotacao;
            $('.gi03_real').html( formata( gi_real03 ) );

            let gi_euro04 = $('.gi04_euro').text();
            let gi_real04 = gi_euro04  * cotacao;
            $('.gi04_real').html( formata( gi_real04 ) );

            let gi_euro05 = $('.gi05_euro').text();
            let gi_real05 = gi_euro05  * cotacao;
            $('.gi05_real').html( formata( gi_real05 ) );

            let gi_euro06 = $('.gi06_euro').text();
            let gi_real06 = gi_euro06  * cotacao;
            $('.gi06_real').html( formata( gi_real06 ) );

            let totalEuro = Number(gi_euro01) + Number(gi_euro02) + Number(gi_euro03) + Number(gi_euro04) + Number(gi_euro05) + Number(gi_euro06);
            $('.gitotal_euro').html( totalEuro );

            let totalReal = gi_real01 + gi_real02 + gi_real03 + gi_real04 + gi_real05 + gi_real06;
            $('.gitotal_real').html( formata( totalReal ) );
            $('.gastos_iniciais').html( formata( totalReal ) );

        // Gastos Mensais
            let gm_euro01 = $('.gm01_euro').text();
            let gm_real01 = gm_euro01  * cotacao;
            $('.gm01_real').html( formata( gm_real01 ) );

            let gm_euro02 = $('.gm02_euro').text();
            let gm_real02 = gm_euro02  * cotacao;
            $('.gm02_real').html( formata( gm_real02 ) );

            let gm_euro03 = $('.gm03_euro').text();
            let gm_real03 = gm_euro03  * cotacao;
            $('.gm03_real').html( formata( gm_real03 ) );

            let gm_euro04 = $('.gm04_euro').text();
            let gm_real04 = gm_euro04  * cotacao;
            $('.gm04_real').html( formata( gm_real04 ) );

            let gm_euro05 = $('.gm05_euro').text();
            let gm_real05 = gm_euro05  * cotacao;
            $('.gm05_real').html( formata( gm_real05 ) );

            let gm_euro06 = $('.gm06_euro').text();
            let gm_real06 = gm_euro06  * cotacao;
            $('.gm06_real').html( formata( gm_real06 ) );

            let gm_euro07 = $('.gm07_euro').text();
            let gm_real07 = gm_euro07  * cotacao;
            $('.gm07_real').html( formata( gm_real07 ) );

            let totalEuroGm = Number(gm_euro01) + Number(gm_euro02) + Number(gm_euro03) + Number(gm_euro04) + Number(gm_euro05) + Number(gm_euro06) + Number(gm_euro07);
            $('.gmtotal_euro').html( totalEuroGm );
            $('.gastos_mensais').html( formata( totalEuroGm ) );

            let totalRealGm = gm_real01 + gm_real02 + gm_real03 + gm_real04 + gm_real05 + gm_real06 + gm_real07;
            $('.gmtotal_real').html( formata( totalRealGm ) );

    });
});