import React,{ Component } from 'react'

class SearchComponent extends Component{
	render () {

		const dataSearch = (e) => {
			let value = e.target.value.toLowerCase();
			const { searchItem } = this.props;
			// const filter = data.filter(user => {
			//   return user.name.toLowerCase().includes(value);
			// });
			// update({
			//   data: filter,
			//   active: 0,
			//   term: value
			// });
			searchItem(value);
		};

		return (
			<div>
		      <input
		        type="text"
		        placeholder="Search people by name..."
		        onChange={dataSearch}
		      />
			</div>
		);
	}
}

export default SearchComponent;