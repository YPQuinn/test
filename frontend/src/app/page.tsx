"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const triggerWorkflow = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/workflow");
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      // Data expected to be { message: "..." }
      setResult(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching the workflow.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900 p-8">
      <main className="flex flex-col items-center justify-center gap-8 w-full max-w-2xl bg-white dark:bg-black p-12 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
            LangGraph Orchestration
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Click the button below to trigger the backend dummy LangGraph workflow.
          </p>
        </div>

        <button
          onClick={triggerWorkflow}
          disabled={loading}
          className="px-6 py-3 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors"
        >
          {loading ? "Running..." : "Trigger Workflow"}
        </button>

        <div className="w-full mt-4">
          {error && (
            <div className="p-4 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}
          
          {result && (
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                Workflow Result:
              </h2>
              <pre className="p-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg overflow-x-auto text-sm border border-zinc-200 dark:border-zinc-700">
                <code>{result}</code>
              </pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
