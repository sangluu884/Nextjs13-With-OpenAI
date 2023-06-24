"use client";
import { useCompletion } from "ai/react";

const Chat = () => {
  const { completion, input, isLoading, handleInputChange, handleSubmit } =
    useCompletion({
      api: "/api/openai",
    });

  return (
    <div className="flex flex-col justify-center h-full p-8 ml-[100px]">
      <div>
        <h1>Next.js & OpenAI</h1>
      </div>

      <form
        className="flex gap-2 items-end mt-12 ml-[12]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <div>You:</div>
          <textarea
            className="text-black p-2"
            placeholder="Enter a prompt"
            onChange={handleInputChange}
            value={input}
            cols={50}
            rows={5}
          />
        </div>
        <button
          style={{
            backgroundColor: "GrayText",
            padding: 12,
            borderRadius: 8,
            marginTop: 12,
          }}
          type="submit"
        >
          Send
        </button>
      </form>

      <div className="mt-2">
        {isLoading ? (
          <div>Waiting for response ...</div>
        ) : (
          <div>{!!completion ? `AI: ${completion}` : ""}</div>
        )}
      </div>
    </div>
  );
};

export default Chat;
