import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function PriceWork(name, maxHours, price){
    this.name = name;
    this.maxHours = maxHours;
    this.price = price;
    this.grossProfit = maxHours * price;
}

const oishi = new PriceWork("Restaurant work",22,11);
const carWash = new PriceWork("POS",17,11);


const Init = function(props){

        return <div>
            <h1>Job to complete: {props.name}</h1>
            <h1>Maximum number of hours: {props.maxHours} hr</h1>
            <h1>Value: ${props.price}</h1>
            <h1>Profit: ${props.grossProfit}</h1>
        </div>

}

let totalProfit = oishi.grossProfit + carWash.grossProfit

const table = (
    <div>
        <Init name = {carWash.name} maxHours = {carWash.maxHours}  />
        <hr/>
        {Init(oishi)}
        <hr/>
        <h1>Gross Profit: {totalProfit}</h1>
        <h1>Monthly Gross: ${totalProfit*4}</h1>
    </div>
);
//const element = (
//    <div>
//        <h1>Job to complete: {oishi.name}</h1>
//        <h1>Maximum number of hours: {oishi.maxHours} hr</h1>
//        <h1>Value: ${oishi.price}</h1>
//        <h1>Profit: ${oishi.grossProfit}</h1>
//    </div>
//)

ReactDOM.render(table, document.getElementById('root'));
registerServiceWorker();
