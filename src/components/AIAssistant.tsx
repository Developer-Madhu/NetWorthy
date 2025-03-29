
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";

const predefinedResponses = [
  "I recommend highlighting your specific achievements in your profile summary to stand out to recruiters.",
  "Based on your skills, you might consider adding 'project management' to your profile keywords.",
  "Your profile would benefit from more specific metrics and outcomes from your past work.",
  "Consider connecting with professionals in the AI field to expand your network in that area.",
  "Adding a professional headshot can increase your profile views by up to 40%.",
  "Based on your interests, the Frontend Developer role at TechCorp might be a great fit for you.",
  "I notice you haven't updated your skills section recently. Adding current technologies could help match you with more opportunities.",
  "Engaging with posts in your field can increase your visibility to potential employers by 30%.",
  "Your experience would be attractive to startups in the fintech sector. Consider exploring those opportunities.",
  "Adding recommendations from colleagues can significantly strengthen your professional profile."
];

export const AIAssistant = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi there! I'm your AI career assistant. How can I help with your professional networking today?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI typing and response
    setTimeout(() => {
      const randomResponse = predefinedResponses[Math.floor(Math.random() * predefinedResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Bot className="mr-2 h-5 w-5" />
          AI Career Assistant
        </CardTitle>
        <CardDescription>
          Get personalized career advice and profile tips
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-[300px] overflow-y-auto border rounded-md p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask for career advice..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <Button size="icon" onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
