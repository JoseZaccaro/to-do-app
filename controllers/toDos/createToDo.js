import ToDo from "../../models/ToDo.js";

export default async function (req, res, next) {
    try {
        const todo = await ToDo.create(req.body)

        return res.status(201).json({
            success: true,
            message: 'To Do Created successfully',
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