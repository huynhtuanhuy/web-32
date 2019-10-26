document.querySelector(".btn-add-row").addEventListener("click", function() {
    const rowLength = document.querySelectorAll('tbody tr').length;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <th scope="row">${rowLength+1}</th>
        <td>
            <input class="form-control" type="number" value="0">
        </td>
        <td>
            <input class="form-control" type="number" value="0">
        </td>
        <td>
            <input class="form-control" type="number" value="0">
        </td>
        <td>
            <input class="form-control" type="number" value="0">
        </td>
    `;

    document.querySelector('tbody').appendChild(newRow);

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