export function GET() {
  const response = Response.json({
    "m.server": "matrix.khaodoes.dev:443"
  });
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
};