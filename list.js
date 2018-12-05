import { ListItem } from './listItem.js'
export function List(items, deleteFromList){
  return `
  <ul>
    ${items.map(item => ListItem(item, deleteFromList)).join('')}
    </ul>
  `
}