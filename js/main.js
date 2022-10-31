var entradaNumero = document.querySelector(".tela__number");
var tela = document.querySelector("#tela");
var telaImg = document.querySelector("#tela__img");


    function inserir(num) {
      entradaNumero.value += num;
      if(entradaNumero.value == 6) {
        setTimeout(() => {
	        telaImg.src = './img/cruzeiro.png';
	        entradaNumero.style.display = "none"
        }, 1000);
        
      } else if(entradaNumero.value == 1) {
        setTimeout(() => {
          telaImg.src = './img/atleticomg.png';
          entradaNumero.style.display = "none";
        }, 1000);
      } else {
        setTimeout(() => {
          
          telaImg.src = './img/votonulo.png'; 
        }, 1000);
      }
      let audio = new Audio('./sons/beep.mp3');
      audio.play();
    }
    
    function corrigir () {
      entradaNumero.value = '';
      telaImg.src = '';
      entradaNumero.style.display = "block"
      let audio = new Audio('./sons/beep.mp3');
      audio.play();
    }

    function confirmar () {
      if (entradaNumero.value == '') {
        
        telaImg.src = './img/digitenumero.png'
      
      } else {
          let audio = new Audio('./sons/fim.mp3');
          audio.play();
          setTimeout(() => {
            telaImg.src = '';
            entradaNumero.style.display = "block";
            entradaNumero.value = '';
          }, 1000);
        }
    }

    function votarBranco() {
      telaImg.src = './img/votobranco.png'
      entradaNumero.style.display = "none";
      entradaNumero.value = -1;
      let audio = new Audio('./sons/beep.mp3');
      audio.play();
    }

    var cruzeiro = 0;
    var atletico = 0;
    var branco = 0;
    var nulo = 0;
    var confirma = document.querySelector('.confirma');
    var resCru = document.querySelector('.res__cru');
    var resAtl = document.querySelector('.res__atl');
    var brancos = document.querySelector('.branco__res');
    var nuloRes = document.querySelector('.nulo__res');
    var resultadoFinal = document.querySelector('.resultado__final');

    function contaVoto () {
        if (entradaNumero.value == 6) {
          cruzeiro = cruzeiro + 1.3;
        }if(entradaNumero.value == 1) {
          atletico = atletico + .8;
        }if(entradaNumero.value == -1) {
          branco ++;
        } if((entradaNumero.value != 6) && (entradaNumero.value != 1) && (entradaNumero.value != '') &&  (entradaNumero.value >= 0)){
          nulo ++;
        }    
    }
    confirma.addEventListener('click', contaVoto);

    var boletimBtn = document.querySelector('.imprime__boletim');
    var resultadoBoletim = document.querySelector('.resultado');
    function printBoletim() {
      resultadoBoletim.classList.add("resultado__block");
      cruzeiro = Math.round(cruzeiro);
      resCru.innerHTML = `<p>Cruzeiro teve ${cruzeiro} votos</p>`;
      atletico = Math.round(atletico);
      resAtl.innerHTML = `<p>atleticomg teve ${atletico} votos`;
      brancos.innerHTML = `<p>Votos brancos ${branco}</p>`;
      nuloRes.innerHTML = `Votos nulos ${nulo}`
      if(atletico > cruzeiro) {
        resultadoFinal.innerHTML = 'Atletico é o maior de minas';
      }if(cruzeiro > atletico) {
        resultadoFinal.innerHTML = 'Cruzeiro é o maior de Minas!!!!!!!!!';
      }if (cruzeiro == atletico) {
        resultadoFinal.innerHTML = 'Empate.';
      }
    }
    boletimBtn.addEventListener('click', printBoletim);