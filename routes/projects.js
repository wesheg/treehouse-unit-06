const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');



// redirect to home if /projects is the only param
router.get('/', (req, res) => {
    res.redirect('./');
});

router.get('/:id', (req, res, next) => {
    const { id } = req.params;

    // redirect if id exceeds the bounds of the projects array
    if (id < 1 || id > projects.length) {
        const new_id = Math.max(1, 
            Math.min(id, projects.length)
            );
        res.redirect(`/projects/${new_id}`);
    }
    
    const project_data = projects[id - 1];
    res.locals.project_data = project_data;
    res.render('project');
})

module.exports = router;
