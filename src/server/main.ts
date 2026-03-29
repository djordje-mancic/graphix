import { Server } from "socket.io"
import type { ViteDevServer } from "vite"

export function main(server: ViteDevServer) {
    if (!server.httpServer) return

    const io = new Server(server.httpServer)
    console.log("hello main");

    io.on('connection', async (socket) => {
        socket.on('update_graphic', (message) => {
            io.emit(`graphics_updated_${message.graphic}`, message.data);
        })
    })
}