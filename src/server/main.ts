import { Server } from "socket.io"
import type { HttpServer, ViteDevServer } from "vite"

export function main(server: HttpServer) {
    const io = new Server(server)

    io.on('connection', async (socket) => {
        socket.on('update_graphic', (message) => {
            io.emit(`graphics_updated_${message.graphic}`, message.data);
        })
    })
}

export function main_vite(dev_server: ViteDevServer) {
    if (!dev_server.httpServer) return;

    main(dev_server.httpServer);
}