import React, { Component } from 'react';
import './App.css';
import { StocksService } from "./services/StocksService";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        stocks: [],
        newStock: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const stocks = StocksService.getStocks();
    this.setState({ stocks });
  }

  removeStock = id => {
      StocksService.removeStock(id);
  };

  addStock = event => {
    const { newStock } = this.state;
    event.preventDefault();
    StocksService.addStock(newStock);
  };

  handleChange(event) {
      const { target: { value, name } } = event;
      this.setState({
          newStock: {
              ...this.state.newStock,
              [name]: value
          }
      });
  }

  render() {
    const { stocks } = this.state;
    return (
      <div className="App">
          <header>Broker View</header>

          <table>
              <tbody>
                { stocks.map(stock =>
                  <tr key={stock.id}>
                      <td className="stock-name">{stock.name}</td>
                      <td className="stock-value">{stock.value}</td>
                      <td className="stock-remove">
                          <button onClick={() => this.removeStock(stock.id)}>X</button>
                      </td>
                  </tr>
                )}
              </tbody>
          </table>

          <form className="add-form">
            <div className="form-field">
              <label>Stock id</label>
              <input type="text" name="id" onChange={this.handleChange}/>
            </div>
            <div className="form-field">
              <label>Stock name</label>
              <input type="text" name="name" onChange={this.handleChange}/>
            </div>
            <div className="form-field">
              <label>Stock value</label>
              <input type="number" name="value" onChange={this.handleChange}/>
            </div>
            <button type="button" onClick={this.addStock}>Add</button>
          </form>
      </div>
    );
  }
}

export default App;
