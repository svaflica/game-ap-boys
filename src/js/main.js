const personagens = document.querySelectorAll('.character');
const jogador02 = document.querySelector('#alidar');
var exportCharacterCont = 0;


let auxSelecterCharacter = false

personagens.forEach((personagem) => {

    personagem.addEventListener('mouseenter', () => {
        // Passa pelo li selecionado e pega o id dele
        const idSelecionado = personagem.attributes.id.value;

        // Imagem grande do personagem
        const imagemJg1 = document.getElementById('selected__character');
        imagemJg1.src = `src/imagens/${idSelecionado}-big.png`;

        const nameJg1 = document.getElementsByClassName('name__character')[0];
        nameJg1.innerHTML = `<h2 id='${idSelecionado}'>${idSelecionado}</h2>`

        const name_pers = document.getElementsByClassName('name__character')[1];
        const text_span = document.getElementById('hero_descr');

        name_pers.innerText = idSelecionado;
        if (idSelecionado == 'vanya') {
            text_span.innerText = 'Потяшин Иван — российский влиятельный человек в социальных сетях ВКонтакте, Instagram и Twitter. У него 195 подписчиков в «ВКонтакте», 136 подписчиков в Instagram и 1 подписчик на YouTube. Он известен своей веселой и умной командой, а в его постах часто фигурируют его друзья и семья. Также активно занимается спортом, выступает за футбольную команду «Первоуральск», имеет спортивный разряд 2-й категории.';
        }
        else if (idSelecionado == 'german') {
            text_span.innerText = 'Герман Грицай — кандидат юридических наук, доцент кафедры государственного и административного права Санкт-Петербургского государственного университета. Он также активен в социальных сетях, таких как Facebook и ВКонтакте, и имеет аккаунт в Instagram (@ggritsay). Он из Стерлитамака, Россия, и его день рождения 13.12. Он также активно работает в налоговой сфере и писал о принципах ответственности в налоговой сфере.';
        }
        else if (idSelecionado == 'ilya') {
            text_span.innerText = 'Илья Копаничук — выпускник факультета физической химии Санкт-Петербургского государственного университета. В 2016-2019 годах закончил аспирантуру и в настоящее время работает научным сотрудником в группе компьютерного моделирования. Им опубликовано несколько работ по физической химии, ему присвоена ученая степень кандидата химических наук. Он также активен на YouTube, куда загружает видео о своих исследованиях.';
        }
        else if (idSelecionado == 'alidar') {
            text_span.innerText = 'Асваров Алидар – студент МГТУ им. Н. Э. Баумана в Москве, Россия. В настоящее время изучает методологию разработки корпоративных информационных систем Agile. Он также активен в социальных сетях, таких как ВКонтакте, Facebook и Instagram (@alidarasvarov). Им написаны статьи о принципах ответственности в налоговой сфере.';
        }
        else if (idSelecionado == 'andrey') {
            text_span.innerText = 'Андрей Грабовой — российский ученый, инженер и предприниматель. Он является основателем Grabovoi Technology, компании, которая специализируется на разработке технологий для создания новых продуктов и услуг. Доктор физико-математических наук, профессор кафедры интеллектуальных систем Московского физико-технического института. Он также является автором многочисленных научных работ по темам глубокого обучения, байесовской дистилляции и априорного распределения параметров.';
        }
        else if (idSelecionado == 'ildar') {
            text_span.innerText = 'Хабутдинов Ильдар — бизнесмен из Уфы, Россия. Он является генеральным директором ООО «Татель». Он также активен в социальных сетях, таких как ВКонтакте, Facebook и Instagram (@khabutdinov_i). У него 2 подписчика в Instagram, 1 пост в Facebook, и он является членом Федерации легкой атлетики. У него также есть канал на YouTube с одним видео.';
        }
        else if (idSelecionado == 'artyom') {
            text_span.innerText = 'Артем Чащин родом из Асбеста, Россия. Он активен в социальных сетях, таких как ВКонтакте, Facebook, Twitter и TikTok. Он также является игроком футбольной команды «Первоуральск» и имеет спортивный разряд 2-й категории. Ему 15 лет (родился 19 апреля 2007 г.).';
        }
    });
    personagem.addEventListener('mouseout', () => {
        const personagemSelecionado = document.querySelector('.seleted');
        idSelecionado = personagemSelecionado.getAttribute('id');
        const imagemJg1 = document.getElementById('selected__character');
        imagemJg1.src = `src/imagens/${idSelecionado}-big.png`;

        const nameJg1 = document.getElementsByClassName('name__character')[0];
        nameJg1.innerHTML = `<h2 id='${idSelecionado}'>${idSelecionado}</h2>`

        const name_pers = document.getElementsByClassName('name__character')[1];
        const text_span = document.getElementById('hero_descr');

        name_pers.innerText = idSelecionado;
        if (idSelecionado == 'vanya') {
            text_span.innerText = 'Потяшин Иван — российский влиятельный человек в социальных сетях ВКонтакте, Instagram и Twitter. У него 195 подписчиков в «ВКонтакте», 136 подписчиков в Instagram и 1 подписчик на YouTube. Он известен своей веселой и умной командой, а в его постах часто фигурируют его друзья и семья. Также активно занимается спортом, выступает за футбольную команду «Первоуральск», имеет спортивный разряд 2-й категории.';
        }
        else if (idSelecionado == 'german') {
            text_span.innerText = 'Герман Грицай — кандидат юридических наук, доцент кафедры государственного и административного права Санкт-Петербургского государственного университета. Он также активен в социальных сетях, таких как Facebook и ВКонтакте, и имеет аккаунт в Instagram (@ggritsay). Он из Стерлитамака, Россия, и его день рождения 13.12. Он также активно работает в налоговой сфере и писал о принципах ответственности в налоговой сфере.';
        }
        else if (idSelecionado == 'ilya') {
            text_span.innerText = 'Илья Копаничук — выпускник факультета физической химии Санкт-Петербургского государственного университета. В 2016-2019 годах закончил аспирантуру и в настоящее время работает научным сотрудником в группе компьютерного моделирования. Им опубликовано несколько работ по физической химии, ему присвоена ученая степень кандидата химических наук. Он также активен на YouTube, куда загружает видео о своих исследованиях.';
        }
        else if (idSelecionado == 'alidar') {
            text_span.innerText = 'Асваров Алидар – студент МГТУ им. Н. Э. Баумана в Москве, Россия. В настоящее время изучает методологию разработки корпоративных информационных систем Agile. Он также активен в социальных сетях, таких как ВКонтакте, Facebook и Instagram (@alidarasvarov). Им написаны статьи о принципах ответственности в налоговой сфере.';
        }
        else if (idSelecionado == 'andrey') {
            text_span.innerText = 'Андрей Грабовой — российский ученый, инженер и предприниматель. Он является основателем Grabovoi Technology, компании, которая специализируется на разработке технологий для создания новых продуктов и услуг. Доктор физико-математических наук, профессор кафедры интеллектуальных систем Московского физико-технического института. Он также является автором многочисленных научных работ по темам глубокого обучения, байесовской дистилляции и априорного распределения параметров.';
        }
        else if (idSelecionado == 'ildar') {
            text_span.innerText = 'Хабутдинов Ильдар — бизнесмен из Уфы, Россия. Он является генеральным директором ООО «Татель». Он также активен в социальных сетях, таких как ВКонтакте, Facebook и Instagram (@khabutdinov_i). У него 2 подписчика в Instagram, 1 пост в Facebook, и он является членом Федерации легкой атлетики. У него также есть канал на YouTube с одним видео.';
        }
        else if (idSelecionado == 'artyom') {
            text_span.innerText = 'Артем Чащин родом из Асбеста, Россия. Он активен в социальных сетях, таких как ВКонтакте, Facebook, Twitter и TikTok. Он также является игроком футбольной команды «Первоуральск» и имеет спортивный разряд 2-й категории. Ему 15 лет (родился 19 апреля 2007 г.).';
        }
    });
    personagem.addEventListener('click', () => {
        if (!auxSelecterCharacter) {
            // remove a classe 
            const personagemSelecionado = document.querySelector('.seleted');
            personagemSelecionado.classList.remove('seleted')

            // Adiciona nova classe
            personagem.classList.add('seleted');
        } else {
            const personagemSelecionado = document.querySelector('.second-player_seleted');
            personagemSelecionado.classList.remove('second-player_seleted')

            // Adiciona nova classe
            personagem.classList.add('second-player_seleted');
        }

    });
});



// CARD

// Bounce card animation
let sectionCard = document.querySelector('#card__description');
let card = document.querySelector('.card');

window.onmousedown = function (event) {
    if (event.target == sectionCard) {
        card.classList.add('bounce_card');
    }
}

window.onmouseup = function (event) {
    if (event.target == sectionCard) {
        card.classList.remove('bounce_card');
    }
}

let btnConf = document.querySelector('#conf').addEventListener('click', () => {
    // Seleciona o personagem confirmado
    const personagemSelecionado = document.querySelector('.seleted');
    personagemSelecionado.childNodes[1].innerHTML = 'seletecplayer'

    // Variavel auxiliar para selecionar o personagem, para trocar o efeito do azul e vermelho
    auxSelecterCharacter = true;

    // Trocar tag 1P ao confirmar personagem
    const tagPlayer = document.querySelectorAll('.character > .tag');
    tagPlayer.forEach((tag) => {
        tag.innerHTML === 'seletecplayer' ? tag.innerHTML = '1P' : tag.innerHTML = '2P';
    });

    // Mudar a imagem para o segundo personagem
    const imagemJg1 = document.getElementById('selected__character');
    imagemJg1.removeAttribute('id');

    var seletedPlayerOne = document.querySelector('.seleted');
    seletedPlayerOne = seletedPlayerOne.dataset.name;

    if (!seletedPlayerOne) {
        seletedPlayerOne = 'Vanya';
    }


    // Mandar os personagens selecionados para o game 
    if (typeof (Storage) === 'function') {
        localStorage.setItem('PlayerOne', seletedPlayerOne);
    }

    // Redirecionar para a página do jogo
    window.location.href = "src/pages/game_1.html";

});

