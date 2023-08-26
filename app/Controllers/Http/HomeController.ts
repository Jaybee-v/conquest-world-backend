 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class HomeController {
    async index({view}: HttpContextContract){
        return view.render('home/index')
    }
}
