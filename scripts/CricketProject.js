function resetScore(){
    let scoreStr=localStorage.getItem('Score'); 
    score=scoreStr ? JSON.parse(scoreStr) : {
        win:0,
        lost:0,
        tie:0,
    };
    score.displayScore= function(){
        return `Won: ${score.win}     Draw: ${score.tie}     Lost: ${score.lost}`
    }
}
resetScore();

function generateComputerChoice() {
    let rand=Math.round(Math.random()*3);
    if (rand>=0 && rand<=1) {
        return 'Bat';
    } else if (rand>1 && rand<=2) {
        return 'Ball';
    } else {
        return 'Stumps';
    }
}

function getResult(user,comp) {
    if (user==='Bat') {
        if (comp==='Bat') {
            score.tie++;
            return `IT'S A DRAW!!!`;
        } else if (comp==='Ball') {
            score.win++;
            return 'YOU HAVE WON!!!';
        } else if (comp==='Stumps') {
            score.lost++;
            return `YOU HAVE LOST!!!`;
        }
    } else if (user==='Ball') {
        if (comp==='Bat') {
            score.lost++;
            return `YOU HAVE LOST!!!`;
        } else if (comp==='Ball') {
            score.tie++;
            return `IT'S A DRAW!!!`;
        } else if (comp==='Stumps') {
            score.win++;
            return 'YOU HAVE WON!!!';
        }
    } else {
        if (comp==='Bat') {
            score.win++;
            return `YOU HAVE WON!!!`;
        } else if (comp==='Ball') {
            score.lost++;
            return 'YOU HAVE LOST!!!';
        } else if (comp==='Stumps') {
            score.tie++;
            return `IT'S A DRAW!!!`;
        }
    }
}

function showResult(userMove,computerMove,result) {
    localStorage.setItem('Score',JSON.stringify(score));
    alert(
`You chose ${userMove}
Computer has chosen ${computerMove}

${result}
        
${score.displayScore()}`);
}
