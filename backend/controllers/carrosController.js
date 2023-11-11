const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Carro
 *     description: Endpoints relacionados as notas
 */

/**
 * @swagger
 * /carro/:
 *   post:
 *     summary: Cria um carro
 *     description: Create a new note with the provided data
 *     tags:
 *       - Carro
 *     parameters:
 *       - name: body
 *         in: body
 *         description: Note object
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Carro'
 *     responses:
 *       201:
 *         description: Successfully created
 *       400:
 *         description: Bad request
 */
router.get('/', (req, res) => {
    res.send('Carros aqui!!')
});

module.exports = router;