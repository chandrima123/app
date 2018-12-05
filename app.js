import { addElementForm } from './addElementForm.js'
import { List } from './list.js'

export class App {
  constructor(id){
    this.rootElement = document.getElementById(id)
    this.state = {
     items: []
    }
  }

  setState(state){
    this.state = state;
    this.refresh()
  }

  async componentDidMount(){
    let data = await fetch('/app/items.json')
    let items = await data.json()
    this.setState({ items: [ ...items ] })
  }

  addToList() {
    let item = {
      id: +new Date()
    }
    item.name = document.getElementById('item').value
    this.setState( { items: [ ...this.state.items, item ] })
  }

  deleteFromList(idToDelete) {
    let newList = this.state.items.filter( e => e.id !== parseInt(idToDelete))
    this.setState({ items: [...newList] })
  }

  refresh(){
    this.rootElement.children[2].innerHTML = List(this.state.items, this.deleteFromList)
  }

  render() {
    this.rootElement.innerHTML = `
    <h1>My shopping list</h1>

    <div>
      ${addElementForm(this.addToList)}
    </div>

    ${List(this.state.items, this.deleteFromList)}

    `
  }
}