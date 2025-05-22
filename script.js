

/*comentário*/
//obtém o componete do menu do celular (icone)
var celular = document.querySelector('.celular')

//obtém lista
var listaMenu = document.querySelector('.memu ul');

//evento de click no menu
celular.addEventListener('click',function(){
    listaMenu.classList.toggle('monstraMenu');
});
let tamanhoFonte = 16;
function mudarTamanhoFonte(soma){
    //tamanho de fonte = 16 + 1
    //tamanho de fonte = 16 + -1
    tamanhoFonte = tamanhoFonte + soma;
    document.body.style.fontSize = tamanhoFonte + 'px'
}

function toggleContrast(){
    document.body.classList.toggle('high-contrast')
    //personaliza todas seções do site
    document.querySelectorAll('section').forEach(secao =>{
    secao.style.backgroundColor = 'black';
    });
}
    function lerTexto() {
      const text = document.querySelector('main').innerText;
      const utterance  = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      speechSynthesis.speak(utterance);
    }

	function resetAcessibilidade() {
	  document.body.classList.remove('high-contrast', 'grayscale', 'daltonismo');
	  tamanhoFonte = 16;
	  document.body.style.fontSize = tamanhoFonte + 'px';
	  speechSynthesis.cancel();
	}

  function resetAcessibilidade(){
      location.reload();
    }
    // Atalhos de teclado
    document.addEventListener('keydown', function(e) {
      if (e.altKey && e.key === '1') changeFontSize(1);
      if (e.altKey && e.key === '2') changeFontSize(-1);
      if (e.altKey && e.key === '3') toggleContrast();
      if (e.altKey && e.key === '4') toggleGrayscale();
      if (e.altKey && e.key === '5') toggleDaltonismo();
      if (e.altKey && e.key === '6') lerTexto();
    });