(function () {
    function initIngresso() {
        
        const dyn = document.getElementById('ftIngressoDyn');
        if (!dyn) return;

        const data = {
            fundamental1: [
                "Vagas exclusivas a moradores de Barueri",
                "Para candidatos com 6 anos completos ou a completar, conforme data estabelecida em edital"
            ],
            basica: [
                "Vagas exclusivas a moradores de Barueri",
                "Sujeito à disponibilidade de vagas remanescentes"
            ],
            tecnica: [
                "Vagas abertas ao público geral",
                "Forma concomitante: para alunos cursando a 2ª ou 3ª série do Ensino Médio, conforme data estabelecida em edital",
                "Forma subsequente: para alunos que já concluíram o Ensino Médio"
            ],
            reserva: [
                "Destinado exclusivamente aos alunos dos 9º anos do Ensino Fundamental da FIEB e da Rede Municipal de Educação de Barueri"
            ]
        };

        const titles = {
            fundamental1: '1º Ano – Ensino Fundamental',
            basica: window.innerWidth <= 769
                ? 'Educação Básica Ensino Fundamental –<br>2º ao 9º ano Ensino Médio – 1ª a 3ª série'
                : 'Educação Básica Ensino Fundamental - 2° ao 9° ano Ensino Médio - 1ª a 3ª série',
            tecnica: 'Educação Técnica (Modular)',
            reserva: 'Reserva de Vagas'
        };

        const order = ['fundamental1', 'basica', 'tecnica', 'reserva'];
        let currentKey = 'fundamental1';

        const menu = document.getElementById('ftIngressoMenu');
        const prevBtn = document.querySelector('.ft-ingresso-arrow.prev');
        const nextBtn = document.querySelector('.ft-ingresso-arrow.next');
        const swipeArea = document.querySelector('.ft-ingresso-right');

        function setActiveIngresso(key) {
            if (!data[key]) return;

            // calcula direção ANTES de atualizar currentKey
            const oldKey = currentKey;
            const oldIndex = order.indexOf(oldKey);
            const newIndex = order.indexOf(key);
            const direction = newIndex > oldIndex ? 1 : (newIndex < oldIndex ? -1 : 0);

            // animação de saída
            dyn.classList.remove('is-enter');
            dyn.classList.remove('is-exit-left', 'is-exit-right');
            if (direction > 0) dyn.classList.add('is-exit-left');
            else if (direction < 0) dyn.classList.add('is-exit-right');

            // atualiza estado
            currentKey = key;

            // atualiza título (mobile)
            const mobileTitle = document.querySelector('.ft-ingresso-slide-header .ft-ingresso-slide-title');
            if (mobileTitle && titles[key]) {
                mobileTitle.innerHTML = titles[key];
            }

            // atualiza menu (desktop)
            if (menu) {
                menu.querySelectorAll('li[data-key]').forEach(li => {
                    li.classList.toggle('active', li.getAttribute('data-key') === key);
                });
            }

            // troca conteúdo depois de um pequeno delay (para a saída aparecer)
            window.setTimeout(() => {
                dyn.innerHTML = data[key].map(t => `<p>${t}</p>`).join('');

                // animação de entrada
                dyn.classList.remove('is-exit-left', 'is-exit-right');
                dyn.classList.add('is-enter');
            }, 200);
        }


        function goNext() {
            const i = order.indexOf(currentKey);
            setActiveIngresso(order[(i + 1) % order.length]);
        }

        function goPrev() {
            const i = order.indexOf(currentKey);
            setActiveIngresso(order[(i - 1 + order.length) % order.length]);
        }

        // Menu desktop
        if (menu) {
            menu.addEventListener('click', function (e) {
                const li = e.target.closest('li[data-key]');
                if (!li) return;
                setActiveIngresso(li.getAttribute('data-key'));
            });
        }

        // Setas mobile
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', goPrev);
            nextBtn.addEventListener('click', goNext);
        }

        // Swipe mobile
        let startX = 0;
        if (swipeArea) {
            swipeArea.addEventListener('touchstart', e => {
                startX = e.changedTouches[0].screenX;
            }, { passive: true });

            swipeArea.addEventListener('touchend', e => {
                const delta = e.changedTouches[0].screenX - startX;
                if (Math.abs(delta) < 50) return;
                delta > 0 ? goPrev() : goNext();
            }, { passive: true });
        }

        // Inicial
        setActiveIngresso(currentKey);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initIngresso);
    } else {
        initIngresso();
    }
})();
