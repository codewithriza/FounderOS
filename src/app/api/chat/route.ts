import { streamText, type ModelMessage } from "ai";
import { models, systemPrompts } from "@/lib/ai";

/**
 * POST /api/chat
 * AI Chat endpoint using Vercel AI SDK v6.
 * Streams responses from Claude 3.5 Sonnet (default) or GPT-4o.
 */
export async function POST(request: Request) {
  try {
    const { messages, model: modelName } = await request.json() as {
      messages: ModelMessage[];
      model?: string;
    };

    // Select model based on request (default: chat)
    const selectedModel =
      modelName === "fast"
        ? models.fast
        : modelName === "premium"
        ? models.premium
        : models.chat;

    const result = streamText({
      model: selectedModel,
      system: systemPrompts.assistant,
      messages,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("[Chat API] Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process chat request. Check your API keys.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
