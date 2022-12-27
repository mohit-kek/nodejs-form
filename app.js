const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

const PORT = 3000;

app.get('/', function(req, res) {
    res.send(`
    <form action="/onboarding" method="POST">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password" />
        <button>Submit</button>
    </form>
    `);
});

app.post('/onboarding', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    console.log(name, email, password);
    res.send(`Welcome ${name}`);
});

app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`);
});