import React from 'react';
import RowAlternator from '../src/RowAlternator';

export default React.createClass({
  render() {
    return (
      <div className="row">
        <div>
          <span className='text-center'>
            <h3>Total Results: {this.props.searchCount}</h3>
          </span>
          <table className="table table-stripped">
            <thead>
              <tr>
                <th></th>
                <th><h3><a href="#" onClick={this.props._sortByTitle}>Title</a></h3></th>
                <th><h3>Author</h3></th>
                <th><h3>No. of Editions</h3></th>
              </tr>
            </thead>
            <RowAlternator firstColor="white" secondColor="lightgrey">
              {this.props.children}
            </RowAlternator>
          </table>
        </div>
      </div>
    );
  }
});
