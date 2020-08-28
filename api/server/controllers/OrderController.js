import Util from './utils.js'
import OrderService from '../services/OrderService'
import Products_OrderService from '../services/Products_OrderService'

const util = new Util()

class OrderController {
  static async getAllOrders(req, res) {
    const products = await OrderService.all();
    util.setSuccess(200, 'Orders retrieved', {id:1})
    return util.send(res)
  }

  static async add(req, res) {
    if ((typeof req.body.is_active !=='boolean' )|| !req.body.table || !req.body.client_name) {
      util.setError(400, 'Please provide complete informations')
      return util.send(res)
    }
    const newOrder = req.body;
    try {
      const createdOrder = await OrderService.add(newOrder);
      util.setSuccess(201, 'Order Added!', createdOrder)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async getItemsById(req, res) {
    const { id } = req.params;
    const items = await Products_OrderService.findByOrderId();
    util.setSuccess(200, 'Items retrieved!', items)
    return util.send(res)
  }

  static async createItem(req, res) {
    const { id } = req.params;
    const item = await Products_OrderService.add(id, req.body);
    util.setSuccess(200, 'Item retrieved!', item)
    return util.send(res)
  }

  static async allItems () {
    return []
  }

  static async updateOrder(req, res) {
    const updatedOrder = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please insert a valid numeric value')
      return util.send(res)
    }
    const newOrder = req.body
    try {
      const updateOrder = await OrderService.updateOrder(id, updatedOrder);
      if (!updateOrder) {
        util.setError(400, `Could not find any order with the id: ${id}`)
      } else {
        util.setSuccess(201, 'Order Updated!', updateOrder)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async getById(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please insert a valid numeric value')
      return util.send(res)
    }

    try {
      const singleOrder = await OrderService.getById(id);

      if (!singleProduct) {
        util.setError(404, `Cannot find Order with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found Order', singleOrder)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteOrder(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const orderToDelete = await OrderService.deleteOrder(id);

      if (productToDelete) {
        util.setSuccess(200, 'Order deleted')
      } else {
        util.setError(404, `Order with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default OrderController