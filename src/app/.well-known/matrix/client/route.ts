export function GET() {
  const response = Response.json({
    "m.homeserver": { base_url: "https://matrix.khaodoes.dev" },
  });
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}