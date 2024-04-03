const Project = require('../model/project');

module.exports.create = async function (req, res) {
    try {
        if(req.body.title) {
            let project = await Project.create({
                title: req.body.title,
                slug: req.body.slug,
                about: req.body.about
            })
            return res.status(200).json({
                message: "Project created successfully!",
                _id: project.id
            })
        } else {
            return res.status(403).json({
                message: "Project title missing"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}