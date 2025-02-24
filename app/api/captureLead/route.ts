import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email } = body;

    // Validar que todos los campos requeridos estén presentes
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validar formato de email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Enviar datos a n8n
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
      console.error('N8N_WEBHOOK_URL not configured');
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }

    // Enviar datos a n8n de forma asíncrona
    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!n8nResponse.ok) {
      console.error('Error sending data to n8n:', await n8nResponse.text());
      // Aún así retornamos success para no bloquear al usuario
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in captureLead API:', error);
    // Retornamos success incluso en caso de error para no bloquear al usuario
    return NextResponse.json({ success: true });
  }
}
