import Stock from './Stock';
import { STOCKS } from './MockStocks';

class StocksService {
	  stocks = STOCKS;

	  getStocks() {
        return this.stocks;
    };

    removeStock = id => {
        this.stocks = this.stocks.filter(stock => stock.id !== id);
    };

    addStock = stock => {
        this.stocks.push(new Stock(stock));
    }
}

export default new StocksService();