"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
function App() {
    const [socket, setSocket] = (0, react_1.useState)();
    const inputRef = (0, react_1.useRef)();
    function sendMessage() {
        var _a;
        if (!socket) {
            return;
        }
        const message = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.value;
        socket.send(message);
    }
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);
        ws.onmessage = (ev) => {
            alert(ev.data);
        };
    }, []);
    return (<div>
			<input type="text" placeholder="Message" ref={inputRef}/>
			<button onClick={sendMessage}>Send</button>
		</div>);
}
exports.default = App;
