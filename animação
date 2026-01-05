(function () {
    function initHomeAnime() {
        if (typeof anime !== 'function') return;

        // Só roda se existir algum dos alvos
        const hasDots =
            document.querySelector('#Criatividade') ||
            document.querySelector('#Inovacao') ||
            document.querySelector('#Negocios') ||
            document.querySelector('#Producao') ||
            document.querySelector('#BemEstar') ||
            document.querySelector('#EnsinoRegular');

        const hasPoly =
            document.querySelector('.polymorph-left') ||
            document.querySelector('.polymorph-right');

        if (!hasDots && !hasPoly) return;

        // ============ DOTS ============
        if (document.querySelector('#Criatividade')) {
            anime({
                targets: '#Criatividade',
                translateX: [
                    { value: 70, duration: 1250 },
                    { value: 88, duration: 1250 },
                    { value: 60, duration: 1250 },
                    { value: 0, duration: 1250 },
                ],
                translateY: [
                    { value: -75, duration: 1250 },
                    { value: -32, duration: 1250 },
                    { value: 0, duration: 1250 },
                ],
                easing: 'easeOutQuad',
                direction: 'alternate',
                loop: true
            });
        }

        if (document.querySelector('#Inovacao')) {
            anime({
                targets: '#Inovacao',
                translateX: [
                    { value: -70, duration: 1250 },
                    { value: -125, duration: 1250 },
                    { value: -35, duration: 1250 },
                    { value: 0, duration: 1250 },
                ],
                translateY: [
                    { value: 70, duration: 1250 },
                    { value: 13, duration: 1250 },
                    { value: 10, duration: 1250 },
                    { value: 0, duration: 1250 },
                ],
                easing: 'easeOutQuad',
                direction: 'alternate',
                loop: true
            });
        }

        if (document.querySelector('#Negocios')) {
            anime({
                targets: '#Negocios',
                translateX: [
                    { value: -75, duration: 1250 },
                    { value: -30, duration: 1250 },
                    { value: 35, duration: 1250 },
                    { value: 0, duration: 1250 },
                ],
                translateY: [
                    { value: 0, duration: 1250 },
                    { value: 30, duration: 1250 },
                    { value: 0, duration: 1250 },
                    { value: 0, duration: 1250 },
                ],
                easing: 'easeOutQuad',
                direction: 'alternate',
                loop: true
            });
        }

        if (document.querySelector('#Producao')) {
            anime({
                targets: '#Producao',
                translateX: [
                    { value: 65, duration: 1750 },
                    { value: -40, duration: 1750 },
                    { value: -75, duration: 1750 },
                    { value: 0, duration: 1750 },
                ],
                translateY: [
                    { value: -2, duration: 1750 },
                    { value: -30, duration: 1750 },
                    { value: 0, duration: 1750 },
                    { value: 0, duration: 1750 },
                ],
                easing: 'easeOutQuad',
                direction: 'alternate',
                loop: true
            });
        }

        if (document.querySelector('#BemEstar')) {
            anime({
                targets: '#BemEstar',
                translateX: [
                    { value: -40, duration: 1750 },
                    { value: -30, duration: 1750 },
                    { value: -75, duration: 1750 },
                    { value: 0, duration: 1750 },
                ],
                translateY: [
                    { value: -25, duration: 1750 },
                    { value: 3, duration: 1750 },
                    { value: 30, duration: 1750 },
                    { value: 0, duration: 1750 },
                ],
                easing: 'easeOutQuad',
                direction: 'alternate',
                loop: true
            });
        }

        if (document.querySelector('#EnsinoRegular')) {
            anime({
                targets: '#EnsinoRegular',
                translateX: [
                    { value: -25, duration: 1750 },
                    { value: -108, duration: 1750 },
                    { value: -70, duration: 1750 },
                    { value: 0, duration: 1750 },
                ],
                translateY: [
                    { value: -65, duration: 1750 },
                    { value: -18, duration: 1750 },
                    { value: -65, duration: 1750 },
                    { value: 0, duration: 1750 },
                ],
                easing: 'easeOutQuad',
                direction: 'alternate',
                loop: true
            });
        }

        // ============ POLÍGONOS ============
        if (document.querySelector('.polymorph-left')) {
            anime({
                targets: '.polymorph-left',
                points: [
                    { value: '75,197 592,76 893,477 367,526' },
                    { value: '93,239 533,24 844,430 405,559' },
                    { value: '65,271 626,24 873,374 474,526' },
                    { value: '10,274 660,9 934,382 434,526' },
                ],
                easing: 'easeOutQuad',
                duration: 5000,
                direction: 'alternate',
                loop: true
            });
        }

        if (document.querySelector('.polymorph-right')) {
            anime({
                targets: '.polymorph-right',
                points: [
                    { value: '554,346 845,76 982,304 939,511' },
                    { value: '450,318 845,76 995,334 861,559' },
                    { value: '418,349 927,50 949,364 899,511' },
                    { value: '494,348 848,32 1026,331 966,573' },
                ],
                easing: 'easeOutQuad',
                duration: 7000,
                direction: 'alternate',
                loop: true
            });
        }
    }

    // funciona mesmo se o script for carregado depois do DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHomeAnime);
    } else {
        initHomeAnime();
    }
})();
