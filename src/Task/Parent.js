import React, { Component } from 'react'
import Child from './Child'

let mobiles = [{
  id:"001",
  name :"oneplus11",
  price : 56999,
  isPurchased: true},
  {
  id:"002",
  name : "Vivi Y100",
  price : 24999,
  isPurchased: false},
  {
  id:"003",
  name : "Redmi 10",
  price : 56999,
  isPurchased : true},
  {
  id:"004",
  name : "iphone 13",
  price : 62990,
  isPurchased : false},
  {
  id:"005",
  name : "Nokia",
  price : 12000,
  isPurchased : true},
  {
  id:"006",
  name : "Poco M4",
  price : 13999,
  isPurchased : true}];

export class Parent extends Component {
  render() {
    return (
      <div>
      <Child s={mobiles}/>        
      </div>
    )
  }
}

export default Parent