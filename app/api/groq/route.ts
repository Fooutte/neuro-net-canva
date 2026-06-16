import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const groqKey = process.env.GROQ_API_KEY;

  if (!groqKey) {
    return NextResponse.json({ error: "Clé Groq non configurée sur Vercel" }, { status: 500 });
  }

  try {
    const body = await request.json();

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: body.messages,
        max_tokens: body.max_tokens || 1200,
        temperature: body.temperature || 0.75,
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error: any) {
    console.error('Groq Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
