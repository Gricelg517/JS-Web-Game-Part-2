function newItem(url) {
    let Item = newImage(url)
    Item.addEventListener('click', () => {
        Item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventoryItem.append(inventoryItem)
    })
    return Item
}