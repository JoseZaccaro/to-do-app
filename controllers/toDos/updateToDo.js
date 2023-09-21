import ToDo from "../../models/ToDo.js";

export default async function (req, res, next) {
    try {
        const todo = await ToDo.findOne({ _id: req.params._id })
        todo.done = req.body.done
        await todo.save()

        return res.status(200).json({
            success: true,
            message: 'To do modified successful',
            todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error',
            error
        })
    }
}