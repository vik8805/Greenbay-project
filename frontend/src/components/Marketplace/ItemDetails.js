import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchService } from '../../services'
import { unloadActualItemAction, errorOnLoadItemsAction } from '../../actions/itemActions';
import { updateCurrencyAccountOfUserAction } from '../../actions/userActions';

const ItemDetails = () => {
  const { id, itemName, description, imageUrl, price, soldAt, buyerName, userName } = useSelector(state => state.item.actualItem);
  const { accessToken } = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const { newCurrencyAccountOfBuyer } = await fetchService.fetchData('item', 'PUT', { id }, accessToken);
      history.push(`/main/marketplace`);
      dispatch(unloadActualItemAction());
      dispatch(updateCurrencyAccountOfUserAction(newCurrencyAccountOfBuyer));
    } catch (error) {
      console.log(error.message);
      dispatch(errorOnLoadItemsAction(error.message));
    }
  };

  return (
    <div id="itemDetails">
      <div id="itemDetails-img-box">
        <img src={imageUrl} alt={itemName}/>
      </div>
      <div id="itemDetails-text-box">
        <div>
          <p><strong>{itemName}</strong></p>
          <p><strong>Description:</strong><br />{description}</p>
          <p><strong>Price:</strong><br />{price.toLocaleString().split(',').join('.')} ,- HUF</p>
          <p><strong>Seller:</strong><br />{userName}</p>
        </div>
        {buyerName ?
          <div>
            <p><strong>Sold at:</strong><br />{soldAt}</p>
            <p><strong>Buyer:</strong><br />{buyerName}</p>
          </div>
        :
          <button onClick={handleClick}>
            BUY!
          </button>
        }
      </div>
    </div>
  );
};

export default ItemDetails;