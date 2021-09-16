"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
function startServer() {
    const server = express_1.default();
    const PORT = 3000;
    server.listen(PORT, () => {
        console.log('Listening on port ', PORT);
    });
}
startServer();
