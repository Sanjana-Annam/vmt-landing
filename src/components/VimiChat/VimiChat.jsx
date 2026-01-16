import { useState, useRef, useEffect } from "react";
import "./vimiChat.css";

export default function VimiChat() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "👋 Hi, I’m VIMI — your growth assistant.\nHow can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const lastIntent = useRef(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const detectIntent = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("price") || msg.includes("pricing")) return "pricing";
    if (msg.includes("book") || msg.includes("call") || msg.includes("meeting"))
      return "booking";
    if (msg.includes("service") || msg.includes("offer"))
      return "services";

    return "fallback";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const intent = detectIntent(input);

    setMessages((prev) => [...prev, userMessage]);

    let botReply = null;

    // ❌ Stop repeating same intent response
    if (lastIntent.current === intent) {
      botReply = {
        from: "bot",
        text: "🙂 I’ve already shared that. Would you like to book a free strategy call?",
      };
    } else {
      lastIntent.current = intent;

      switch (intent) {
        case "pricing":
          botReply = {
            from: "bot",
            text:
              "💰 Our pricing depends on your goals and ad budget.\n\n" +
              "We offer:\n" +
              "• Starter plans for small brands\n" +
              "• Performance-based growth plans\n\n" +
              "👉 Best way is a **free 30-min strategy call**.",
            cta: true,
          };
          break;

        case "booking":
          botReply = {
            from: "bot",
            text:
              "📅 You can book a **free 30-minute growth consultation** with our experts here 👇",
            link: true,
          };
          break;

        case "services":
          botReply = {
            from: "bot",
            text:
              "🚀 We help brands grow with:\n\n" +
              "• Paid Ads (Meta & Google)\n" +
              "• SEO & Organic Growth\n" +
              "• Branding & Funnels\n\n" +
              "Want a custom plan?",
            cta: true,
          };
          break;

        default:
          botReply = {
            from: "bot",
            text:
              "🤔 I can help with:\n\n" +
              "• Pricing\n" +
              "• Services\n" +
              "• Booking a free call\n\n" +
              "Just type what you need 😊",
          };
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botReply]);
    }, 500);

    setInput("");
  };

  return (
    <div className="vimi-chat">
      <div className="vimi-header">VIMI 💜</div>

      <div className="vimi-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.from}`}>
            <div className="bubble">
              {msg.text}
              {msg.link && (
                <a
                  href="https://viralmarketingtrends.zohobookings.in/#/406960000000039054"
                  target="_blank"
                  rel="noreferrer"
                  className="chat-cta"
                >
                  Book Free Strategy Call →
                </a>
              )}
              {msg.cta && (
                <button
                  className="chat-cta"
                  onClick={() =>
                    window.open(
                      "https://viralmarketingtrends.zohobookings.in/#/406960000000039054",
                      "_blank"
                    )
                  }
                >
                  Book Free Strategy Call →
                </button>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="vimi-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}