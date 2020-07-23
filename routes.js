const connection = require('./connection')

exports.route = (app, connection) => {
    app.get('/status', (request, response) => {
        const status = {
            status: 'ok'
        }
        response.json(status);
    });
    app.get("/departments", async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM department`);
        response.json(data);
    });
    app.post("/departments", async (request, response) => {
        const [data] = await connection.query(`INSERT INTO department SET ?`, request.body);
        response.json({ ...request.body});
    });
    app.get("/roles", async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM role`);
        response.json(data);
    });
    app.post("/roles", async (request, response) => {
        const [data] = await connection.query(`INSERT INTO role SET ?`, request.body);
        response.json({ ...request.body});
    });
    app.get("/employees", async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM employee`);
        response.json(data);
    });
    app.post("/employees", async (request, response) => {
        const [data] = await connection.query(`INSERT INTO employee SET ?`, request.body);
        response.json({ ...request.body});
    });
    app.patch("/updaterole/:id", async (request, response) => {
        const id = request.params.id;
        const updated = request.body;
        console.log(updated);
        const [data] = await connection.query(`UPDATE employee SET ? WHERE id = ?`, [updated, id]);
        response.json({ ...request.body});
    });
}