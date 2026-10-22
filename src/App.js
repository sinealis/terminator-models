import { Component } from "react";
import Header from "./components/Header";
import Searchbox from "./components/Searchbox";
import ProductList from "./components/ProductList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ items: users }));
  }
  render() {
    const filteredItems = this.state.items.filter((item) => {
      return item.username
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <Header />
        <Searchbox searchChange={this.onSearchChange} />
        <ProductList items={filteredItems} />
      </div>
    );
  }
}
export default App;
