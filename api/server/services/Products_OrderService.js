import database from '../src/models'

class Products_OrderService {
  static async findByOrderId(orderId) {
    try {
      return await database.Products_Order.findAll({where:{orderId}})
    } catch (error) {
      throw error
    }
  }
  static async add(orderId, newProducts_Order) {
    try {
      return await database.Products_Order.create({...newProducts_Order, orderId})
    } catch (error) {
      throw error
    }
  }
}

export default Products_OrderService