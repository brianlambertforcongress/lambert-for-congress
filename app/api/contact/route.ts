import { NextResponse } from "next/server";

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeAqhbqxJ1crRhIvOvJmim8wdaWP4niE7wW-dyHep9VDNARQg/formResponse";

export async function POST(request: Request) {
  try {
    const incomingFormData = await request.formData();

    const googleFormData = new URLSearchParams();

    googleFormData.append(
      "entry.2005620554",
      String(incomingFormData.get("entry.2005620554") || "")
    );

    googleFormData.append(
      "entry.1045781291",
      String(incomingFormData.get("entry.1045781291") || "")
    );

    googleFormData.append(
      "entry.498486184",
      String(incomingFormData.get("entry.498486184") || "")
    );

    googleFormData.append(
      "entry.839337160",
      String(incomingFormData.get("entry.839337160") || "")
    );

    const googleResponse = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: googleFormData.toString(),
    });

    return NextResponse.json({
      success: googleResponse.ok,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong submitting the form.",
      },
      { status: 500 }
    );
  }
}