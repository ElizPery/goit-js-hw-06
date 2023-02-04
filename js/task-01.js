
const mainList = document.querySelector('#categories');
const itemsMainList = mainList.querySelectorAll('.item')

console.log(`Number of categories: ${itemsMainList.length}`)

const detailsAboutItems = [...itemsMainList].map(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})