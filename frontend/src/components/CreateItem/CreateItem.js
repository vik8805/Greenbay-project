import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './CreateItem.css';
import { fetchService } from '../../services'
import { errorOnLoadItemsAction, unloadErrorItemsAction } from '../../actions/itemActions';

const CreateItem = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const history = useHistory();
  const { accessToken } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async submitEvent => {
    submitEvent.preventDefault();
    try {
      const response = await fetchService.fetchData('item', 'POST', { itemName, description, price, imageUrl }, accessToken);
      console.log(response.message);
      history.push(`/main/marketplace`);
    } catch (error) {
      console.log(error.message);
      dispatch(errorOnLoadItemsAction(error.message));
    }
  };

  return (
    <div>
      <h1>Create Sellable Item</h1>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Item name"
            value={itemName}
            onChange={changeEvent => {
              setItemName(changeEvent.target.value);
              dispatch(unloadErrorItemsAction());
            }}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={changeEvent => {
              setDescription(changeEvent.target.value);
              dispatch(unloadErrorItemsAction());
            }}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={changeEvent => {
              setPrice(changeEvent.target.value);
              dispatch(unloadErrorItemsAction());
            }}
          />
          <input
            type="text"
            placeholder="Image Url"
            value={imageUrl}
            onChange={changeEvent => {
              setImageUrl(changeEvent.target.value);
              dispatch(unloadErrorItemsAction());
            }}
          />
          <button type="submit">
            CREATE ITEM
          </button>
        </form>
    </div>
  );
};

export default CreateItem;
