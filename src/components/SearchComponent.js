import React,{ Component } from 'react'
import { Input } from 'reactstrap'

class SearchComponent extends Component{
	render () {

		const dataSearch = (e) => {
			let value = e.target.value.toLowerCase();
			const { searchItem } = this.props;
			searchItem(value);
		};

		return (
			<div>
		      <Input type="text" placeholder="Filter people by name..." onChange={dataSearch} />
			</div>
		);
	}
}

export default SearchComponent;