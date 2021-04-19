export const validationService = {
  userIdChecker(userId) {
    if (!userId) {
      throw {
        message: 'User Id has been not defined',
        status: 500,
      };
    };
    if (isNaN(userId)) {
      throw {
        message: 'User Id must be a number',
        status: 500,
      };
    };
  },

  itemIdChecker(itemId) {
    if (!itemId) {
      throw {
        message: 'Item Id has been not defined',
        status: 500,
      };
    };
    if (isNaN(itemId)) {
      throw {
        message: 'Item Id must be a number',
        status: 500,
      };
    };
  },

  itemNameChecker(itemName) {
    if (!itemName) {
      throw {
        message: `Item's name is required!`,
        status: 400,
      };
    }
  },

  descriptionChecker(description) {
    if (!description) {
      throw {
        message: `Item's description is required!`,
        status: 400,
      };
    }
  },

  priceChecker(price) {
    if (!price) {
      throw {
        message: `Item's price is required!`,
        status: 400,
      };
    }
    if (isNaN(price)) {
      throw {
        message: `Item's price must be a number!`,
        status: 400,
      };
    }
  },

  purchaseChecker(price, currencyAccount) {
    if (price > currencyAccount) {
      throw {
        message: `You don't have enough money on your account to purchase this item!`,
        status: 400,
      };
    }
  },

  imageUrlChecker(imageUrl) {
    if (!imageUrl) {
      throw {
        message: `Item's image Url is required!`,
        status: 400,
      };
    }
  },

  soldAtChecker(soldAt) {
    if (soldAt !== null) {
      throw {
        message: `Item is already sold!`,
        status: 400,
      };
    }
  },

};