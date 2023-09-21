import ToDo from "../../models/ToDo.js";

export default async function (req, res, next) {
    try {
        await ToDo.findOneAndDelete({_id:req.params._id})
        return res.status(200).json({
            success: true,
            message: 'To Do deleted successful',
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error',
            error
        })
    }
}