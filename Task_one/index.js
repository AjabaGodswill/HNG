import http from 'http'
import url from 'url'

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true)

    // Check if endpoint and method match
    if (parsedUrl.pathname === '/api' && req.method === 'GET') {
        const slack_name = parsedUrl.query.slack_name
        const track = parsedUrl.query.track

        // Current day of the week and UTC time
        const currentDate = new Date();
        const currentDay = currentDate.toLocaleString('en-us', { weekday: 'long' });
        const utcTime = currentDate.toISOString()

        const response = {
            slack_name: slack_name,
            current_day: currentDay,
            utc_time: utcTime,
            track: track,
            github_file_url: "https://github.com/username/repo/blob/main/server.js",
            github_repo_url: "https://github.com/AjabaGodswill/HNG",
            status_code: 200
        };

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(response))
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Not Found')
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
