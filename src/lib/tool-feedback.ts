import { track, type ToolContext } from "./analytics";

/**
 * Wires the compact "Did this result work for you?" control (see
 * components/ToolFeedback.astro). Only a yes/no result and a controlled
 * reason are ever recorded: no free text, filenames or file data.
 */
export function initToolFeedback(context: ToolContext | (() => ToolContext), thanks: string) {
  const root = document.getElementById("tool-feedback");
  const choices = document.getElementById("feedback-choices");
  const reasons = document.getElementById("feedback-reasons");
  const question = root?.querySelector("p");
  const originalQuestion = question?.textContent ?? "";

  const reset = () => {
    root?.classList.add("hidden");
    root?.classList.remove("flex");
    choices?.classList.remove("hidden");
    reasons?.classList.add("hidden");
    reasons?.classList.remove("flex");
    if (question) question.textContent = originalQuestion;
  };

  const submit = (result: "yes" | "no", reason?: string) => {
    const ctx = typeof context === "function" ? context() : context;
    track("tool_feedback_submitted", {
      tool_slug: ctx.tool_slug,
      tool_category: ctx.tool_category,
      result,
      reason,
    });
    choices?.classList.add("hidden");
    reasons?.classList.add("hidden");
    reasons?.classList.remove("flex");
    if (question) question.textContent = thanks;
  };

  choices?.addEventListener("click", (event) => {
    const value = (event.target as HTMLElement).closest<HTMLElement>("[data-feedback]")?.dataset.feedback;
    if (value === "yes") submit("yes");
    else if (value === "no") {
      choices.classList.add("hidden");
      reasons?.classList.remove("hidden");
      reasons?.classList.add("flex");
    }
  });

  reasons?.addEventListener("click", (event) => {
    const reason = (event.target as HTMLElement).closest<HTMLElement>("[data-reason]")?.dataset.reason;
    if (reason) submit("no", reason);
  });

  return {
    show() {
      reset();
      root?.classList.remove("hidden");
      root?.classList.add("flex");
    },
    hide: reset,
  };
}
