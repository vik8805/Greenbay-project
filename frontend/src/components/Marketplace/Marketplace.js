import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Marketplace.css';
import { fetchService } from '../../services'
import Item from './Item';
import { loadItemsAction, errorOnLoadItemsAction } from '../../actions/itemActions';

const Marketplace = () => {
  const { accessToken } = useSelector(state => state.user);
  const { items, loadItemStatus, isFiltered } = useSelector(state => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, [])

  const getItems = async () => {
    try {
      const response = await fetchService.fetchData('item', 'GET', null, accessToken);
      dispatch(loadItemsAction(response))
    } catch (error) {
      console.log(error.message);
      dispatch(errorOnLoadItemsAction(error.message));
    }
  };

  const LoadAllItems = () => {
    return (
      items.map((itemData) => {
        return (
          <Item
            key={itemData.id}
            itemData={itemData}
          />
        );
      })
    );
  };

  const LoadFilteredItems = () => {
    return (
      items.filter(item => item.soldAt === null).map((itemData) => {
        return (
          <Item
            key={itemData.id}
            itemData={itemData}
          />
        );
      })
    );
  };

  return (
    <div>
      <div id="marketplace">
        {loadItemStatus === 'ready' && isFiltered ? <LoadFilteredItems /> : <LoadAllItems />}
      </div>
    </div>
  );
};

export default Marketplace;