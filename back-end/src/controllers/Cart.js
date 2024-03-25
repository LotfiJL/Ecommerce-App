const Cart = require("../models/cart");

// verify unique cart per user
exports.addTocart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    try {
      // const prod = req.body.cartItems.product;

      // const productExist = cart.cartItems.find((c) => c.product == prod);

      // if (productExist) {
      //   await Cart.findByIdAndUpdate(
      //     { user: req.user._id, "cartItems.product": prod },
      //     {
      //       $set: {
      //         ...req.body.cartItems,
      //         quantity: productExist.quantity + req.body.cartItems.quantity,
      //       },
      //     }
      //   );
      // } else {
      const updatedCart = await Cart.findOneAndUpdate(
        { user: req.user._id },
        { $push: { cartItems: req.body.cartItems } }
      );
      return res.status(201).json({ cart: updatedCart });
    } catch (error) {
      return res.status(400).json({ error });
    }
  } else {
    //Kaaba jdida
    const newCart = new Cart({
      user: req.user._id,
      cartItems: [req.body.cartItems],
    });

    try {
      const savedCart = await newCart.save();
      return res.status(201).json({ cart: savedCart });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
};
