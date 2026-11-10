// Same-origin form, with the referrer policy that makes browsers send `Origin: null`
export function GET() {
  return new Response(
    `<!doctype html>
<form method="POST">
  <button>Submit</button>
</form>`,
    { headers: { 'Content-Type': 'text/html', 'Referrer-Policy': 'no-referrer' } },
  );
}

export function POST(request: Request) {
  return Response.json({ origin: request.headers.get('origin') });
}
