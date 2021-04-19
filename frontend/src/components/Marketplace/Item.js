import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadActualItemAction } from '../../actions/itemActions';

const Item = ({ itemData }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const loadActualItemToStore = async onClick => {
    onClick.preventDefault();
    dispatch(loadActualItemAction(itemData));
    history.push(`/main/itemDetails`);
  };

  return (
    <div className="item_main_box" onClick={loadActualItemToStore}>
      <div className="item_img_box">
        <img src={itemData.imageUrl} alt={itemData.itemName}/>
      </div>
      <div className="item_text_box">
        <p className="item_text_name">{itemData.itemName}</p>
        <p className="item_text_price"><strong>{itemData.price.toLocaleString().split(',').join('.')} ,- HUF</strong></p>
      </div>
    </div>
  );
};

export default Item;