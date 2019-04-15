import Stock from './Stock';
import { STOCKS } from './MockStocks';

export default class StocksService {
    stocks = [];

    constructor() {
        this.stocks = STOCKS;
    }

    getStocks = () => {
        return this.stocks;
    };

    removeStock = id => {
        this.stock = this.stocks.filter(stock => stock.id !== id);
    };

    addStock = stock => {
        this.stocks.push(new Stock(stock));
    }

}
