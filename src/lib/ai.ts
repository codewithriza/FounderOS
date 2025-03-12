import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";

/**
 * FounderOS AI Provider Configuration
 *
 * Supports both OpenAI (GPT-4o) and Anthropic (Claude 3.5/3.7).
 * Set the appropriate API keys in your .env file.
 */

// OpenAI Provider (GPT-4o, GPT-4o-mini)
export const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// Anthropic Provider (Claude 3.5 Sonnet, Claude 3.7)
export const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

/**
 * Default model configurations.
 * Switch between providers by changing the model reference.
 */
export const models = {
  // Primary chat model
  chat: anthropic("claude-sonnet-4-20250514"),

  // Fast model for quick responses
  fast: openai("gpt-4o-mini"),

  // Premium model for complex tasks
  premium: anthropic("claude-sonnet-4-20250514"),
} as const;

/**
 * System prompts for different AI features.
 */
export const systemPrompts = {
  assistant: `You are FounderOS AI, a helpful assistant for SaaS founders. 
You help with product strategy, technical decisions, marketing copy, and business advice.
Be concise, actionable, and data-driven in your responses.
Format your responses in Markdown when appropriate.`,

  codeReview: `You are a senior software engineer reviewing code.
Provide constructive feedback on code quality, performance, and best practices.
Suggest specific improvements with code examples.`,

  copywriting: `You are an expert SaaS copywriter.
Write compelling, conversion-focused copy for landing pages, emails, and ads.
Use proven frameworks like AIDA, PAS, and BAB.`,
} as const;
