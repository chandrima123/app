
export function ListItem(item, deleteFromList){
  return `
  <li><span>${item.name}</span><button onclick="app.${deleteFromList.name}('${item.id}')">Delete</button></li>
  `
  }