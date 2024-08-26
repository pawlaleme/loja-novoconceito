document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o Splide.js
    new Splide('#image-carousel', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        breakpoints: {
            640: {
                perPage: 1,
            },
            768: {
                perPage: 2,
            },
        },
    }).mount();


    // Função para enviar mensagem para o WhatsApp
    window.sendToWhatsApp = function () {
        var name = document.getElementById("name")?.value || '';
        var email = document.getElementById("email")?.value || '';
        var message = document.getElementById("message")?.value || '';

        // Formata o texto com quebras de linha
        var text = `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`;
        var whatsappNumber = "5515997764058"; // Insira o número de WhatsApp desejado aqui, com o código do país

        // Codifica o texto para a URL
        var url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        console.log('URL:', url); // Verifica a URL
        window.open(url, '_blank');
    };

    // Intercepta o envio do formulário
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        window.sendToWhatsApp(); // Chama a função para enviar o WhatsApp
    });

    // Funcionalidade do Modal
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    if (modalImage && modal) {
        // Adiciona um listener para abrir o modal quando uma imagem com a classe 'zoom-image' é clicada
        document.querySelectorAll('.zoom-image').forEach(image => {
            image.addEventListener('click', () => {
                modalImage.src = image.src;
                modal.classList.remove('hidden');
            }, { passive: true });
        });

        // Adiciona um listener para fechar o modal quando o botão de fechar é clicado
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.classList.add('hidden');
            }, { passive: true });
        }

        // Adiciona um listener para fechar o modal quando clicar fora da imagem no modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        }, { passive: true });
    }
});
