"use client";

import React, { useEffect, useState } from "react";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import Image from "next/image";
import Profile from "../assets/images/profile.png";
import ChatAPI from "../api/chat-quiz-data";

// ---------------- MESSAGE PARSER ----------------
class MessageParser {
  constructor(_: any) {}
  parse() {}
}

// ---------------- ACTION PROVIDER ----------------
class ActionProvider {
  createChatBotMessage: any;
  setState: any;
  answers: any = {};
  index = 0;

  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;

    setTimeout(() => {
      this.run();
    }, 500);
  }

  checkCondition(condition: any) {
    if (!condition) return true;

    const evalOne = (c: any) => {
      const val = this.answers[c.field];
      if (c.operator === "lt") return Number(val) < c.value;
      if (c.operator === "gte") return Number(val) >= c.value;
      if (c.operator === "equals") return val === c.value;
      return false;
    };

    return Array.isArray(condition)
      ? condition.every(evalOne)
      : evalOne(condition);
  }

  nextValid(start: number) {
    for (let i = start; i < ChatAPI.chats.length; i++) {
      if (this.checkCondition(ChatAPI.chats[i].condition)) return i;
    }
    return ChatAPI.chats.length;
  }

  run() {
    if (this.index >= ChatAPI.chats.length) return;

    const step = ChatAPI.chats[this.index];
    if (!this.checkCondition(step.condition)) {
      this.index = this.nextValid(this.index + 1);
      this.run();
      return;
    }

    const delay = step.messageTimeInterval ?? 800;

    setTimeout(() => {
      if (step.text) {
        this.addMessage(step.text);
      }

      if (step.input) {
        this.addInput(step.input);
        return;
      }

      if (step.optionsData) {
        this.addOptions(step.optionsData);
        return;
      }

      if (step.button) {
        this.addButton(step.button);
        return;
      }

      this.index = this.nextValid(this.index + 1);
      this.run();
    }, delay);
  }

  addMessage(text: string) {
    const msg = this.createChatBotMessage(text);
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  }

  addInput(payload: any) {
    const msg = this.createChatBotMessage("", {
      widget: "inputWidget",
      payload,
    });
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  }

  addOptions(payload: any) {
    const msg = this.createChatBotMessage("", {
      widget: "optionsWidget",
      payload,
    });
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  }

  addButton(payload: any) {
    const msg = this.createChatBotMessage(payload.text, {
      widget: "buttonWidget",
      payload,
    });
    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, msg],
    }));
  }

  submit(name: string, value: string) {
    if (name === "age") {
      const age = new Date().getFullYear() - Number(value);
      this.answers.userAge = age;
    }

    this.answers[name] = value;

    this.index = this.nextValid(this.index + 1);
    this.run();
  }
}

// ---------------- WIDGETS ----------------
const InputWidget = (props: any) => {
  const [val, setVal] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={props.payload.placeholder}
        className="border border-[#007BEE] rounded-[5px] p-[12px] text-[16px] w-[140px]"
      />
      <button
        onClick={() => props.actions.submit(props.payload.name, val)}
        className="bg-[#007BEE] text-white font-extrabold py-[10px] rounded-full"
      >
        {props.payload.buttonText}
      </button>
    </div>
  );
};

const OptionsWidget = (props: any) => (
  <div className="flex gap-2 flex-wrap">
    {props.payload.options.map((opt: any) => (
      <button
        key={opt.value}
        onClick={() => props.actions.submit(props.payload.name, opt.value)}
        className="border border-[#007BEE] rounded-full px-4 py-1 text-sm hover:bg-[#007BEE] hover:text-white"
      >
        {opt.label}
      </button>
    ))}
  </div>
);

const ButtonWidget = (props: any) => (
  <button
    onClick={() => props.actions.submit("cta", "yes")}
    className="bg-[#007BEE] text-white px-4 py-2 rounded-full font-bold"
  >
    {props.payload.text}
  </button>
);

// ---------------- MAIN COMPONENT ----------------
export default function Chatslib() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[318px]">
        <Chatbot
          config={{
            botName: "Mary",
            initialMessages: [],
            customComponents: {
              botAvatar: () => (
                <Image
                  src={Profile}
                  alt="avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ),
            },
          }}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          widgets={[
            {
              widgetName: "inputWidget",
              widgetFunc: (props: any) => <InputWidget {...props} />,
            },
            {
              widgetName: "optionsWidget",
              widgetFunc: (props: any) => <OptionsWidget {...props} />,
            },
            {
              widgetName: "buttonWidget",
              widgetFunc: (props: any) => <ButtonWidget {...props} />,
            },
          ]}
        />
      </div>
    </div>
  );
}
