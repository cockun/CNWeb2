import AsyncStorage from '@react-native-community/async-storage';

const CART = 'CART';

export class Cart {
  static addToCart = async (item) => {
    let cart = await AsyncStorage.getItem(CART);
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }

    let itemCart = cart.find((i) => i.id === item.id);
    if (itemCart) {
      itemCart.quantity += item.quantity;
    } else {
      cart.push(item);
    }
    await AsyncStorage.setItem(CART, JSON.stringify(cart));
    return cart;
  };
  static clearCart = async () => {
    AsyncStorage.removeItem(CART);
  };
  static getCart = async () => {
    let cart = await AsyncStorage.getItem(CART);
    if (cart !== null) {
      return (cart = JSON.parse(cart));
    } else {
      return (cart = []);
    }
  };
  static updateCart = async (item) => {
    let cart = await AsyncStorage.getItem(CART);
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }

    let itemCart = cart.find((i) => i.id === item.id);
    if (itemCart) {
      itemCart.quantity = item.quantity;
    }

    await AsyncStorage.setItem(CART, JSON.stringify(cart));
    return cart;
  };
  static clearCart = async () => {
    AsyncStorage.removeItem(CART);
  };
  static deleteCartItem = async (item) => {
    let cart = await AsyncStorage.getItem(CART);
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }
    let itemCart = cart.find((i) => i.id === item.id);
    if (itemCart) {
      cart.splice(cart.indexOf(itemCart), 1);
    }
    await AsyncStorage.setItem(CART, JSON.stringify(cart));
    return cart;
  };
}
