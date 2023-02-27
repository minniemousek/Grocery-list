import { Component } from "react";
import check from './checked.png'

export class GroceryList extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            groceryList: []
        }
    }
    
    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if(input === "") {
            alert("Please enter an item!")
        } else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput:""});
        }
    }

    crossedWord(event) {
        const listItem = event.target;
        listItem.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type="text"
                    placeholder="What do you want to buy today?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className="container">
                    <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>
                <div className="container">
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                            <img src={check} width="25px" alt="check mark"/>
                            {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="container">
                <button className="delete" onClick={() => this.deleteItem()}>Delete</button>
                </div>
                </form>
            </div>
        )
    }
} 