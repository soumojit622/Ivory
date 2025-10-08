"use client";

import { vapi } from "@/lib/vapi";
import { useUser } from "@clerk/nextjs";
import { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

function VapiWidget() {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [callEnded, setCallEnded] = useState(false);

  const { user, isLoaded } = useUser();
  const messageContainerRef = useRef<HTMLDivElement>(null);

  // auto-scroll for messages
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // setup event listeners for VAPI
  useEffect(() => {
    const handleCallStart = () => {
      console.log("Call started");
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);
    };

    const handleCallEnd = () => {
      console.log("Call ended");
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };

    const handleSpeechStart = () => {
      console.log("AI started Speaking");
      setIsSpeaking(true);
    };

    const handleSpeechEnd = () => {
      console.log("AI stopped Speaking");
      setIsSpeaking(false);
    };

    const handleMessage = (message: any) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { content: message.transcript, role: message.role };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const handleError = (error: any) => {
      console.log("Vapi Error", error);
      setConnecting(false);
      setCallActive(false);
    };

    vapi
      .on("call-start", handleCallStart)
      .on("call-end", handleCallEnd)
      .on("speech-start", handleSpeechStart)
      .on("speech-end", handleSpeechEnd)
      .on("message", handleMessage)
      .on("error", handleError);

    // cleanup event listeners on unmount
    return () => {
      vapi
        .off("call-start", handleCallStart)
        .off("call-end", handleCallEnd)
        .off("speech-start", handleSpeechStart)
        .off("speech-end", handleSpeechEnd)
        .off("message", handleMessage)
        .off("error", handleError);
    };
  }, []);

  const toggleCall = async () => {
    if (callActive) vapi.stop();
    else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);

        await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID);
      } catch (error) {
        console.log("Failed to start call", error);
        setConnecting(false);
      }
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-col overflow-hidden pb-20">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-primary via-primary/70 to-foreground bg-clip-text text-transparent">
          Talk to Ivory — Your AI Dental Assistant
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Have real-time voice conversations with Ivory for smart dental advice
          and gentle guidance.
        </p>
      </div>

      {/* VIDEO CALL AREA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* AI ASSISTANT CARD */}
        <Card className="relative bg-gradient-to-br from-primary/10 via-background/40 to-card/80 border border-primary/20 backdrop-blur-xl shadow-lg rounded-3xl overflow-hidden group">
          <div className="aspect-video flex flex-col items-center justify-center p-6 relative">
            {/* AI VOICE ANIMATION */}
            <div
              className={`absolute inset-0 ${
                isSpeaking ? "opacity-40" : "opacity-0"
              } transition-opacity duration-300`}
            >
              <div className="absolute inset-0 flex justify-center items-center">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`mx-1 w-1 rounded-full bg-primary ${
                      isSpeaking ? "animate-sound-wave" : ""
                    }`}
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: isSpeaking
                        ? `${Math.random() * 50 + 20}%`
                        : "10%",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* AI LOGO */}
            <div className="relative size-32 mb-5">
              <div
                className={`absolute inset-0 bg-primary/20 rounded-full blur-2xl ${
                  isSpeaking ? "animate-pulse" : ""
                }`}
              />
              <div className="relative w-full h-full rounded-full border border-primary/30 flex items-center justify-center bg-gradient-to-b from-primary/5 to-background overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Ivory AI Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-foreground">Ivory AI</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Dental Assistant
            </p>

            {/* SPEAKING INDICATOR */}
            <div
              className={`mt-4 flex items-center gap-2 px-3 py-1 rounded-full border ${
                isSpeaking
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card/50"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isSpeaking ? "bg-primary animate-pulse" : "bg-muted"
                }`}
              />
              <span className="text-xs text-muted-foreground">
                {isSpeaking
                  ? "Speaking..."
                  : callActive
                  ? "Listening..."
                  : callEnded
                  ? "Call ended"
                  : "Waiting..."}
              </span>
            </div>
          </div>
        </Card>

        {/* USER CARD */}
        <Card className="relative bg-card/90 border border-border backdrop-blur-sm rounded-3xl overflow-hidden">
          <div className="aspect-video flex flex-col items-center justify-center p-6">
            <div className="relative size-32 mb-5">
              <Image
                src={user?.imageUrl || "/user.png"}
                alt="User"
                width={128}
                height={128}
                className="size-full object-cover rounded-full border border-border shadow-md"
              />
            </div>

            <h2 className="text-xl font-semibold text-foreground">You</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {user
                ? (user.firstName + " " + (user.lastName || "")).trim()
                : "Guest"}
            </p>

            <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60">
              <div className="w-2 h-2 rounded-full bg-muted" />
              <span className="text-xs text-muted-foreground">Ready</span>
            </div>
          </div>
        </Card>
      </div>

      {/* MESSAGE CONTAINER */}
      {messages.length > 0 && (
        <div
          ref={messageContainerRef}
          className="w-full bg-card/80 backdrop-blur-md border border-border/60 rounded-xl p-4 mb-8 h-64 overflow-y-auto scroll-smooth shadow-inner"
        >
          <div className="space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="message-item animate-in fade-in duration-300"
              >
                <div className="font-semibold text-xs text-muted-foreground mb-1">
                  {msg.role === "assistant" ? "Ivory AI" : "You"}:
                </div>
                <p className="text-foreground">{msg.content}</p>
              </div>
            ))}

            {callEnded && (
              <div className="message-item animate-in fade-in duration-300">
                <div className="font-semibold text-xs text-primary mb-1">
                  System:
                </div>
                <p className="text-foreground">
                  Call ended. Thank you for using Ivory AI!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CALL CONTROLS */}
      <div className="w-full flex justify-center">
        <Button
          className={`w-44 text-lg font-medium rounded-3xl shadow-lg transition-all duration-300 ${
            callActive
              ? "bg-destructive hover:bg-destructive/90"
              : callEnded
              ? "bg-muted cursor-not-allowed"
              : "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          } text-white relative`}
          onClick={toggleCall}
          disabled={connecting || callEnded}
        >
          {connecting && (
            <span className="absolute inset-0 rounded-full animate-ping bg-primary/40 opacity-75"></span>
          )}
          <span>
            {callActive
              ? "End Call"
              : connecting
              ? "Connecting..."
              : callEnded
              ? "Call Ended"
              : "Start Call"}
          </span>
        </Button>
      </div>
    </div>
  );
}

export default VapiWidget;
