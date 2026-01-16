"use server";

import { z } from "zod";

// Define a schema for the response to ensure type safety
const GroqResponseSchema = z.object({
  choices: z.array(
    z.object({
      message: z.object({
        content: z.string(),
      }),
    })
  ),
});

export async function getGroqResponse(message: string) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("Configuration Error: GROQ_API_KEY is not defined.");
  }

  // Basic input validation
  if (!message || message.trim().length === 0) {
    throw new Error("Message content cannot be empty.");
  }

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "You are a professional assistant." },
          { role: "user", content: message.trim() }
        ],
        temperature: 0.7, // Added for more natural responses
        max_tokens: 1024,  // Safety limit
      }),
      // Next.js specific: ensures the request isn't cached if you want fresh AI responses
      cache: 'no-store', 
    });

    const rawData = await response.json();

    if (!response.ok) {
      console.error("Groq API Registry Error:", rawData);
      throw new Error(rawData.error?.message || `API request failed with status ${response.status}`);
    }

    // Validate the structure of the incoming data
    const validatedData = GroqResponseSchema.parse(rawData);
    return validatedData.choices[0].message.content;

  } catch (error) {
    // Log error internally, but return a clean message to the UI
    console.error("Internal Server Action Error:", error);
    
    if (error instanceof z.ZodError) {
      throw new Error("Received unexpected data format from AI provider.");
    }
    
    throw new Error("Something went wrong. Please try again later.");
  }
}