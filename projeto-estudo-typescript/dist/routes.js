"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWord = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWord(request, response) {
    var user = CreateUser_1.default({
        name: 'Pablo',
        email: 'pablo@gmail.com',
        password: 'oishdsf65sd46f',
        tecnologies: [
            "Node",
            "BootsTrap",
            {
                title: 'JavaScript',
                experience: 100
            }
        ]
    });
    return response.send("Hello Word");
}
exports.helloWord = helloWord;
