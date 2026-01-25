"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Profile from "../assets/images/profile.png";
import ChatAPI from "../api/chat-quiz-data";
import UserProfile from "../assets/images/user-avatar.png";

type RenderedBubble = {
    id: number;
    role: "agent" | "user";
    content: any;
    show: boolean;
};

type Answers = Record<string, any>;

export default function Chats() {
    const [rendered, setRendered] = useState<RenderedBubble[]>([]);
    const [answers, setAnswers] = useState<Answers>({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [waitingForUser, setWaitingForUser] = useState(false);

    const bottomRef = useRef<HTMLDivElement | null>(null);
    const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // ---- Condition evaluator ----
    const checkCondition = (condition: any) => {
        if (!condition) return true;

        const evalOne = (c: any) => {
            const val = answers[c.field];
            if (c.operator === "lt") return Number(val) < c.value;
            if (c.operator === "gte") return Number(val) >= c.value;
            if (c.operator === "equals") return val === c.value;
            return false;
        };

        return Array.isArray(condition)
            ? condition.every(evalOne)
            : evalOne(condition);
    };

    // ---- Find next valid step ----
    const getNextValidIndex = (start: number) => {
        for (let i = start; i < ChatAPI.chats.length; i++) {
            if (checkCondition(ChatAPI.chats[i].condition)) {
                return i;
            }
        }
        return ChatAPI.chats.length;
    };

    // ---- Chat Engine ----
    useEffect(() => {
        if (waitingForUser) return;
        if (currentIndex >= ChatAPI.chats.length) return;

        const current = ChatAPI.chats[currentIndex];
        const delay = current.messageTimeInterval ?? 800;

        const timer = setTimeout(() => {
            setRendered((prev) => [
                ...prev,
                {
                    id: currentIndex,
                    role: current.role as "agent" | "user",
                    content: current,
                    show: false,
                },
            ]);

            // Reveal animation
            setTimeout(() => {
                setRendered((prev) =>
                    prev.map((b) =>
                        b.id === currentIndex ? { ...b, show: true } : b
                    )
                );
            }, 200);

            const isInteractive =
                current.input || current.button || current.optionsData;

            if (isInteractive) {
                setWaitingForUser(true);
            } else {
                setCurrentIndex(getNextValidIndex(currentIndex + 1));
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [currentIndex, waitingForUser, answers]);

    // ---- Two-step smooth scroll ----
    useEffect(() => {
        if (!rendered.length) return;

        const container = containerRef.current;
        const lastBubble = bubbleRefs.current[rendered.length - 1];

        if (!container || !lastBubble) return;

        const containerHeight = container.scrollHeight;
        const viewportHeight = window.innerHeight;

        // Only activate scroll behavior if content is taller than screen
        if (containerHeight <= viewportHeight) return;

        // Scroll so last message sits naturally at bottom
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [rendered]);

    // ---- Proceed to next step ----
    const proceedNext = () => {
        setTimeout(() => {
            setWaitingForUser(false);
            setCurrentIndex(getNextValidIndex(currentIndex + 1));
        }, 0);
    };

    return (
        <div ref={containerRef} className="flex justify-center">
            <div className="w-full max-w-[318px]">
                {rendered.map((bubble, i) => {
                    const isLastOfRole =
                        rendered.findLastIndex((b) => b.role === bubble.role) === i;
                    const content = bubble.content;

                    return (
                        <div
                            key={bubble.id}
                            ref={(el) => { bubbleRefs.current[i] = el; }}
                            className={`m-3 flex relative ${bubble.role === "user" ? "justify-end" : ""
                                }`}
                        >
                            <div className={`rounded-md p-3 ${bubble.role === "user" ? "bg-[#007BEE] text-white" : "bg-[#F0F0F0]"
                                }`}>
                                {bubble.show && (
                                    <div className="animate-[fadeIn_0.25s_ease-out] space-y-2 text-[16px] leading-[140%]">
                                        {/* TEXT */}
                                        {content.text && (
                                            <p dangerouslySetInnerHTML={{ __html: content.text }} />
                                        )}

                                        {/* INPUT */}
                                        {content.input && (
                                            <div className="flex flex-col gap-2">
                                                {/* {content.input.buttonText && (
                                                <label htmlFor="">{content.input.buttonText ?? "Confirm"}</label>
                                                )} */}
                                                <input
                                                    placeholder={content.input.placeholder}
                                                    className="border bg-[#007BEE] border-[#007BEE] p-[12px] rounded text-[16px] w-full min-w-[140px] bg-white"
                                                    onChange={(e) =>
                                                        setAnswers((prev) => ({
                                                            ...prev,
                                                            [content.input.name]: e.target.value,
                                                        }))
                                                    }
                                                />

                                                <button
                                                    onClick={() => {
                                                        const val = answers[content.input.name];

                                                        if (content.input.name === "age") {
                                                            const age =
                                                                new Date().getFullYear() - Number(val);

                                                            setAnswers((prev) => ({
                                                                ...prev,
                                                                age: val,
                                                                userAge: age,
                                                            }));
                                                        }

                                                        proceedNext();
                                                    }}
                                                    className="bg-[#007BEE] text-white rounded-full py-[12px] text-[16px] font-bold cursor-pointer hover:bg-blue-700 transition"
                                                >
                                                    Confirm
                                                </button>
                                            </div>
                                        )}

                                        {/* BUTTON */}
                                        {content.button && (
                                            <button
                                                onClick={() => {
                                                    setAnswers((prev) => ({ ...prev, cta: "yes" }));
                                                    proceedNext();
                                                }}
                                                className="bg-[#007BEE] text-white rounded-full py-[12px] text-[16px] font-bold cursor-pointer hover:bg-blue-700 transition w-[140px]"
                                            >
                                                {content.button.text}
                                            </button>
                                        )}

                                        {/* OPTIONS */}
                                        {content.optionsData && (
                                            <div className="flex gap-2 flex-col">
                                                {content.optionsData.options.map((opt: any) => (
                                                    <button
                                                        key={opt.value}
                                                        onClick={() => {
                                                            setAnswers((prev) => ({
                                                                ...prev,
                                                                [content.optionsData.name]: opt.value,
                                                            }));
                                                            proceedNext();
                                                        }}
                                                        className="bg-[#007BEE] text-white rounded-full py-[12px] text-[16px] font-bold cursor-pointer hover:bg-blue-700 transition w-[140px]"
                                                    >
                                                        {opt.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Agent avatar (left) */}
                            {bubble.role === "agent" && isLastOfRole && (
                                <Image
                                    src={Profile}
                                    alt="Agent"
                                    className="absolute right-[calc(100%+12px)] -bottom-1 w-8 h-8 rounded-full"
                                />
                            )}

                            {/* User avatar (right) */}
                            {bubble.role === "user" && isLastOfRole && (
                                <Image
                                    src={UserProfile}
                                    alt="User"
                                    className="absolute left-[calc(100%+12px)] -bottom-1 w-8 h-8 rounded-full"
                                />
                            )}

                        </div>
                    );
                })}

                {/* Scroll anchor */}
                <div ref={bottomRef} />

                {/* Fade animation */}
                <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
            </div>
        </div>
    );
}
