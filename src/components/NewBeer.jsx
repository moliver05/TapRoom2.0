import React from 'react';
import PropTypes from 'prop-types';


function NewBeer(props) {

  var styles = {
    color: 'white',
    border: '2px solid orange'
  };

  let _name = null;
  let _price = null;
  let _type = null;
  let _remaining = null;

  function handleAddNewBeer(event) {
    event.preventDefault();
    props.addBeer({
      name: _name.value,
      type: _type.value,
      price: _price.value,
      remaining: _remaining.value
    });
    _name.value = '';
    _type.value = '';
    _price.value = '';
    _remaining.value = '';
  }

  return (
    <div style={styles}>
      <h2>Add New Beer:</h2>
      <form onSubmit={handleAddNewBeer}>
        <label>Name</label><input
          type='text'
          placeholder='product name'
          ref={(input) => { _name = input; }} />
        <br />
        <hr />

        <label>Type</label>
        <input
          type='text'
          placeholder='ipa, cider, etc..'
          ref={(input) => { _type = input; }} />
        <br />
        <hr />

        <label>Price</label>
        <input
          type='text'
          placeholder='$$'
          ref={(input) => { _price = input; }} />
        <br />
        <hr />

        <label>Remaining</label>
        <input
          type='number'
          placeholder='Stocks'
          ref={(input) => { _remaining = input; }} />
        <br />
        <hr />
        <button className="btn btn-success" type='submit'>ADD</button>
      </form>
    </div>
  );
}
NewBeer.propTypes = {
  addBeer: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  remaining: PropTypes.number,
};

export default NewBeer;