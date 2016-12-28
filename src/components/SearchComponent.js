import React,{ Component } from 'react'
import { Input } from 'reactstrap'

class SearchComponent extends Component{
	render () {

		const dataSearch = (e) => {
			let value = e.target.value.toLowerCase();
			const { searchNote } = this.props;
			searchNote(value);
		};

		return (
			<div>
		      <Input type="text" placeholder="Filter notes..." onChange={dataSearch} />
			</div>
		);
	}
}

export default SearchComponent;