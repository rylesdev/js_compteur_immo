let loterieScore = 0;
let offreScore = 0;

        function incrementScore(type) {
            if (type === 'loterie') {
                loterieScore++;
                document.getElementById('loterieScore').innerText = 'Score : ' + loterieScore;
            } else if (type === 'offre') {
                offreScore++;
                document.getElementById('offreScore').innerText = 'Score : ' + offreScore;
            }
        }

    var date = new Date();
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    document.getElementById("date").innerHTML = current_date;