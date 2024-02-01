const routes = (app) => {
    app.route('/')
    .get((req, res) =>
        res.send('Home GET request successful!')
    );

    app.route('/about')
    .get((req, res) =>
        res.send('About GET request successful!')
    );

    app.route('/project')
    .get((req, res) =>
        res.send('Project GET request successful!')
    )
    .post((req, res) => 
        res.send('Project POST request successful!')
    );

    app.route('/project/:projectId')
    .get((req, res) => 
        res.send('Project GET request successful!')
    )
    .put((req, res) => 
        res.send('Project PUT request successful!')
    )
    .delete((req, res) =>
        res.send('Project Delete request successful!')
    );

    app.route('/member')
    .get((req, res) =>
        res.send('Member GET request successful!')
    )
    .post((req, res) => 
        res.send('Member POST request successful!')
    );

    app.route('/member/:memberId')
    .get((req, res) => 
        res.send('Member GET request successful!')
    )
    .put((req, res) => 
        res.send('Member PUT request successful!')
    )
    .delete((req, res) =>
        res.send('Member Delete request successful!')
    );

    app.route('/involvement')
    .get((req, res) =>
        res.send('Involvement GET request successful!')
    );

    app.route('/contact')
    .get((req, res) =>
        res.send('Contact GET request successful!')
    );
}

export default routes;