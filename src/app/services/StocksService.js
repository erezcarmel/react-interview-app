import Stock from './Stock';
import { STOCKS } from './MockStocks';

export class StocksService {
    static stocks = STOCKS;

    static getStocks = () => {
        return StocksService.stocks;
    };

    static removeStock = id => {
        StocksService.stock = StocksService.stocks.filter(stock => stock.id !== id);
    };

    static addStock = stock => {
        StocksService.stocks.push(new Stock(stock));
        console.log(StocksService.stocks);
    }
}
