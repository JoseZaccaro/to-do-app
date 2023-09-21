import express from 'express';
import getToDos from '../controllers/toDos/getToDos.js';
import createToDo from '../controllers/toDos/createToDo.js';
import updateToDo from '../controllers/toDos/updateToDo.js';
import deleteToDo from '../controllers/toDos/deleteToDo.js';
const router = express.Router();

/* GET users listing. */
router.get('/', getToDos);
router.post('/', createToDo);
router.put('/:_id', updateToDo);
router.delete('/:_id', deleteToDo);

export default router;
