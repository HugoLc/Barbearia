import InfoCard from "../js/info-card.js";


const infoCardParagrafo = `
    Primeiro projeto realizado baseado em cursos da Alura para
    HTML e CSS. <br><br>Revisei conceitos relacionados a estrutura do HTML e CSS
    em uma página web, e também tratar a responsividade do site utlizando media query.
`
var infoCard = new InfoCard(infoCardParagrafo);

document.addEventListener('click', () => {
    if(infoCard) {infoCard.excluirInfoCard();}
    infoCard = null;    
});