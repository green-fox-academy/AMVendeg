"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mysql = __importStar(require("mysql"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
;
let sqlConn = mysql.createConnection(process.env.DATABASE_URL);
// let sqlConn = mysql.createConnection({
//   password: 'yourpassword',
//   host: 'localhost',
//   user: 'root',
//   database: 'dogs',
// });
sqlConn.connect((err) => {
    if (err) {
        console.log('Cannot connect to the db', err);
        return;
    }
    console.log('connection established');
});
sqlConn.query("CREATE TABLE IF NOT EXISTS detail (id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, age INTEGER NOT NULL)", (error, _) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`table created if did not exits`);
});
// static file loading
app.get('/', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'index.html'));
});
// GET: json-t jön vissza a válaszban
app.get('/dogs', (_, res) => {
    sqlConn.query('SELECT * FROM detail', (err, dogs) => {
        if (err) {
            console.error(err);
            res.status(500).json(err);
        }
        res.json({ dogs });
    });
});
// add dog: POST, incoming dog: megnézem mi az amit el tudok küldeni
app.post('/dogs', (req, res) => {
    const dog = req.body;
    sqlConn.query('INSERT INTO detail(name, age) VALUES(?, ?)', [dog.name, dog.age], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json(err);
        }
        res.json({ dog, id: result.insertId });
    });
});
app.listen(PORT, () => console.info(`app is listening: ${PORT}`));
