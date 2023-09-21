import ToDo from "../../models/ToDo.js";

export default async function (req, res, next) {
    try {
        const todos = await ToDo.find()
        return res.status(200).json({
            success: true,
            message: 'All todos',
            todos
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error',
            error
        })
    }
}