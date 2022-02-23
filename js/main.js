/** 
 * Skapa ett textfält och en knapp 'Fetch data'.
 * I textfältet skall man kunna ange ett nummer, 
 * som är antal ord som man vill hämta från https://codexplained.se/lorem_json_array.php?numberOfWords= värdet från textfältet
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * https://codexplained.se/lorem_json_array.php?numberOfWords=3
 * https://codexplained.se/lorem_json_array.php?numberOfWords=10
 *
 * Datan skall läggas in i en tabell <table></table>, med 2 kolumner:
 * - Kolumn 1 skall ha rubriken 'Number of words', och innehålla nummret som angavs
 * - Kolumn 2 skall ha rubriken 'Result', och innehålla datan. Datan är en array med ord, där varje ord skall visas i en egen listItem <li>
 * 
 * Varje anrop skall hämta och placera datan i en ny rad, i tabellen
 * 
 * Skall ungefär se ut på följande sätt:
 * |-----------------|-----------|
 * | Number of words | Result    |
 * |-----------------|-----------|
 * |        2        |   .wer    |
 * |                 |   .sfd    |
 * |-----------------|-----------|
 * |        3        |   .wer    |
 * |                 |   .sfd    |
 * |                 |   .ert    |
 * |-----------------|-----------|
 */


 const fetchBtn = document.getElementById('fetchBtn');
 const input = document.getElementById('input');
 const tableBody = document.querySelector('#table tbody');
 
 fetchBtn.addEventListener('click', fetchData)
 
 async function fetchData() {
     try {
         const response = await fetch('https://codexplained.se/lorem_json_array.php?numberOfWords=' + input.value)
 
         if (!response.ok) {
             throw new Error('Something went wrong with the server');
         }
 
         const words = await response.json();
         console.log(words);
 
         let listItemsHTML = ''
         for(let word of words) {
             listItemsHTML += `<li>${word}</li>`;
         }
         console.log(listItemsHTML);
         
        tableBody.innerHTML += `
            <tr>
                <td>${input.value}</td>
                <td>
                    <ul>
                        ${listItemsHTML}
                    </ul>
                </td>
            </tr>
        `;
     } catch(error) {
         console.log(error);
     }
 }