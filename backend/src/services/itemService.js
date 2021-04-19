import { validationService } from '../services';
import { itemRepository, userRepository } from '../repository'

export const itemService = {
  async createItem(itemName, description, price, imageUrl, userId) {
    await validationService.itemNameChecker(itemName);
    await validationService.descriptionChecker(description);
    await validationService.priceChecker(price);
    await validationService.imageUrlChecker(imageUrl);
    await validationService.userIdChecker(userId);
    await itemRepository.createItem([itemName, description, price, imageUrl, userId])
  },

  async getItems() {
    const results = await itemRepository.getItems();
    return results;
  },

  async buyItem(itemId, buyerId) {
    await validationService.userIdChecker(buyerId);
    await validationService.itemIdChecker(itemId);
    const item = await itemRepository.getItemById([itemId]);
    if (!item) {
      throw {
        message: `Item doesn't exist!`,
        status: 400,
      };
    }
    const { price, soldAt, userId: sellerId } = item;
    if (buyerId === sellerId) {
      throw {
        message: `You can't buy your own items!`,
        status: 400,
      };
    }
    await validationService.soldAtChecker(soldAt);
    const { currencyAccount: currencyAccountOfBuyer, userName: buyerName } = await userRepository.selectUserById([buyerId]);
    const { currencyAccount: currencyAccountOfSeller } = await userRepository.selectUserById([sellerId]);
    await validationService.purchaseChecker(price, currencyAccountOfBuyer);
    const newSoldAt = new Date();
    await itemRepository.updateItemAfterPurchaseById([newSoldAt, buyerName, itemId]);
    const newCurrencyAccountOfBuyer = currencyAccountOfBuyer - price;
    const newCurrencyAccountOfSeller = currencyAccountOfSeller + price;
    await userRepository.updateCurrencyAccountOfUserById([newCurrencyAccountOfBuyer, buyerId]);
    await userRepository.updateCurrencyAccountOfUserById([newCurrencyAccountOfSeller, sellerId]);
    return { newCurrencyAccountOfBuyer };
  },
};