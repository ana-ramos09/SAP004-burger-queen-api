import { Router } from 'express'
import OrderController from '../controllers/OrderController'

const router = Router()
router.get('/', OrderController.getAllOrders)
router.post('/', OrderController.add)
router.get('/:id', OrderController.getById)
router.put('/:id', OrderController.updateOrder)
router.delete('/:id', OrderController.deleteOrder)
router.get('/:id/items', OrderController.getItemsById)
router.post('/:id/items', OrderController.createItem)
router.put('./:id/items/itemId', OrderController.getItemsById)

export default router