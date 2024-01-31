import appServer from './app';
import http from 'http';

const server = http.createServer(appServer);

appServer.get('/', async (req, res) => {
    // res.send('Server is up!');
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});