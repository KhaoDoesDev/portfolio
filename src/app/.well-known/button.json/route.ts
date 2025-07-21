export function GET() {
  return Response.json({
    $schema:
      "https://codeberg.org/LunarEclipse/well-known-button/raw/branch/main/drafts/button-2024-06.schema.json",
    buttons: [
      {
        id: "khaodoes.dev",
        uri: "https://khaodoes.dev/88x31.png",
        alt: "Button to khaodoes.dev",
      },
    ],
  });
}
