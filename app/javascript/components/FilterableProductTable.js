import React from 'react';
import { render } from 'react-dom';
import SearchBar from '../components/SearchBar.js'
import ProductTable from '../components/ProductTable.js'

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div className="jumbotron">
      	<SearchBar 
      		filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
      	/>
      	<ProductTable 
      		products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
      	/>
      </div>
    );
  }
}