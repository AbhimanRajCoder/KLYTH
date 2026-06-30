import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Server-side validation
    if (!data.firstName || !data.email || !data.message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Simulate database write and transactional email trigger delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here is where we would trigger the Auto-Responder Email via SendGrid/AWS SES.
    // Subject: Message received. We're on it.
    // Body: Hi [User's First Name]...

    return NextResponse.json({ success: true, message: "Message received." });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
