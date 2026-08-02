const {PrismaClient} = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();


exports.register = async(req, res) => {
    try{
        const {email, password, name, role, phone } = req.body;

        if(!email || !password || !name || !role) {
            return res.status(400).json({error: 'Todos los campos son requeridos'});
        }

        if (password.length < 8) {
            return res.status(400).json({error: 'La contraseña debe tener almenos 8 caracteres'});
        }

        const existing = await prisma.user.findUnique({where: {email}});

        if (existing) {
            return res.status(409).json({error: 'El email ya está registrado'});
        }
    } catch (error) {

    }
}