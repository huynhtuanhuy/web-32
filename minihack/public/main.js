document.querySelector(".btn-add-row").addEventListener("click", function() {
    const rowLength = document.querySelectorAll('tbody tr').length;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <th scope="row">${rowLength+1}</th>
        <td>
            <input data-col="0" data-row="${rowLength}" class="form-control score-input" type="number" value="0">
        </td>
        <td>
            <input data-col="1" data-row="${rowLength}" class="form-control score-input" type="number" value="0">
        </td>
        <td>
            <input data-col="2" data-row="${rowLength}" class="form-control score-input" type="number" value="0">
        </td>
        <td>
            <input data-col="3" data-row="${rowLength}" class="form-control score-input" type="number" value="0">
        </td>
    `;

    document.querySelector('tbody').appendChild(newRow);

    addEvent();

    fetch(
        "/add-new-row",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                gameId: window.location.pathname.split("/")[2],
            }),
        }
    ).then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
});

function addEvent() {
    for (let i = 0; i < document.querySelectorAll(".score-input").length; i++) {
        const element = document.querySelectorAll(".score-input")[i];
        element.oninput = function(event) {
            console.log("input");
            const row = event.target.dataset.row;
            const col = event.target.dataset.col;
            const value = event.target.value;
    
            let totalPlayerScore = 0;
    
            for (let j = 0; j < document.querySelectorAll(`.score-input[data-col="${col}"]`).length; j++) {
                const score = document.querySelectorAll(`.score-input[data-col="${col}"]`)[j].value;
                totalPlayerScore += Number(score);
            }
    
            document.querySelector(`.player-total-score-${col}`).innerText = totalPlayerScore;
            
            fetch(
                "/update-score",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        gameId: window.location.pathname.split("/")[2],
                        col: col,
                        row: row,
                        value: value,
                    }),
                }
            ).then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
}

addEvent();