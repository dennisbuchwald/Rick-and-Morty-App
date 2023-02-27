
// Erstelle eine Referenz zur Suchleiste
const searchButton = document.querySelector('.search-bar__button');



// Exportiere die searchButton-Referenz
export function searchButton(){
// Erstelle den Event-Listener
searchButton.addEventListener('click', function(event) {
  // Verhindere das Standardverhalten des Submit-Ereignisses (Seite neuladen)
    event.preventDefault();
    const searchForm = document.querySelector('.search-bar');
    searchForm.submit();

    console.log("Funktioniert")
});
}
