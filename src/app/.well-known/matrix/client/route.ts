export function GET() {
  return Response.json({
    "m.homeserver": { base_url: "https://matrix.khaodoes.dev" },
  });
}