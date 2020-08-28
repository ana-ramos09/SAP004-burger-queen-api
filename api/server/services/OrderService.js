import database from '../src/models'
import Products_OrderService from './Products_OrderService'

class OrderService {
  static async all() {
    try {
      const orders = await database.Order.findAll()
      const new_orders = await Promise.all(orders.map(async order => {
          order.items = await Products_OrderService.findByOrderId(order.id)
          return order
        })
      )
      return new_orders
    } catch (error) {
      throw error
    }
  }

  static async getById(id) {
    try {
      return database.Order.findOne()
      where: { id: Number(id) }
    } catch (error) {
      throw error
    }
  }

  static async addOrder(newOrder) {
    try {
      return database.Order.create(newOrder)
    } catch (error) {
      throw error
    }
  }
}

export default OrderService