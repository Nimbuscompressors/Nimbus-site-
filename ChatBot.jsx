
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone,
  Mail,
  Download,
  Settings,
  Minimize2,
  ExternalLink
} from 'lucide-react';

const ChatBot = ({ isOpen, onToggle }) => {
  const { toast } = useToast();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm Nimbus AI, your air compressor expert. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickActions = [
    { label: 'Product Specs', icon: Settings, action: 'specs' },
    { label: 'Get Quote', icon: Phone, action: 'quote' },
    { label: 'Download Catalog', icon: Download, action: 'catalog' },
    { label: 'Technical Support', icon: Mail, action: 'support' }
  ];

  const handleQuickAction = (action) => {
    let response = '';
    switch (action) {
      case 'specs':
        response = "I can help you with technical specifications for any of our products. Which compressor model are you interested in? We have reciprocating compressors (5-100 HP), air dryers, and filtration systems.";
        break;
      case 'quote':
        response = "I'd be happy to help you get a quote! Please tell me: 1) What type of compressor do you need? 2) Required CFM/pressure? 3) Your application? You can also call us at +1 (555) 123-4567 for immediate assistance.";
        break;
      case 'catalog':
        response = "Our complete product catalog is available for download. It includes detailed specifications for all reciprocating compressors, air dryers, filters, and spare parts. Would you like me to send you the download link?";
        break;
      case 'support':
        response = "Our technical support team is available 24/7. For immediate assistance: Phone: +1 (555) 123-4567 | Email: support@nimbuscompressors.com | Or continue chatting with me for quick answers!";
        break;
      default:
        response = "How can I assist you with your air compression needs?";
    }
    
    addMessage('user', quickActions.find(a => a.action === action)?.label || action);
    setTimeout(() => addBotMessage(response), 1000);
  };

  const addMessage = (type, content) => {
    const newMessage = {
      id: Date.now(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (content) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage('bot', content);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage('user', inputValue);
    const userMessage = inputValue.toLowerCase();
    setInputValue('');

    let botResponse = '';

    if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('quote')) {
      botResponse = "Pricing varies based on specifications and configuration. Our reciprocating compressors start from $2,850 for 5HP models up to $8,750+ for high-pressure units. For an accurate quote, I'll need to know your CFM requirements, pressure needs, and application. Would you like me to connect you with our sales team?";
    } else if (userMessage.includes('spec') || userMessage.includes('technical') || userMessage.includes('cfm') || userMessage.includes('pressure')) {
      botResponse = "I can provide detailed technical specifications! Our reciprocating compressors range from 5-100 HP with pressures up to 350 PSI. For example, our NRC-SS-5HP delivers 18.1 CFM @ 175 PSI. Which specific model or application are you interested in?";
    } else if (userMessage.includes('maintenance') || userMessage.includes('service') || userMessage.includes('repair')) {
      botResponse = "We offer comprehensive maintenance services including preventive maintenance programs, 24/7 support, and genuine spare parts. Our service intervals are typically every 500-1000 hours depending on usage. Would you like information about our service packages?";
    } else if (userMessage.includes('delivery') || userMessage.includes('shipping') || userMessage.includes('lead time')) {
      botResponse = "Standard delivery is typically 2-4 weeks for most models. Express shipping available for urgent requirements. We ship worldwide with proper packaging and documentation. What's your location and timeline?";
    } else if (userMessage.includes('warranty') || userMessage.includes('guarantee')) {
      botResponse = "All Nimbus compressors come with a comprehensive 2-year warranty covering parts and labor. Extended warranty options available up to 5 years. We also offer performance guarantees on efficiency and reliability metrics.";
    } else if (userMessage.includes('whatsapp') || userMessage.includes('contact')) {
      botResponse = "You can reach us on WhatsApp at +1 (555) 123-4567 for instant support! Our team responds within minutes during business hours. You can also call us directly or email support@nimbuscompressors.com.";
    } else {
      botResponse = "I'm here to help with any questions about our air compressors, dryers, filters, or services. You can ask me about specifications, pricing, maintenance, delivery, or anything else. What would you like to know?";
    }

    addBotMessage(botResponse);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("Hi! I'm interested in Nimbus Compressors products. Can you help me?");
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp chat with our support team",
      duration: 3000,
    });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-24 right-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600/30 z-50 ${
              isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
            } transition-all duration-300`}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Nimbus AI Assistant</h3>
                  <p className="text-green-400 text-xs">Online • Responds instantly</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => setIsMinimized(!isMinimized)}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white h-8 w-8"
                >
                  <Minimize2 className="h-4 w-4" />
                </Button>
                <Button
                  onClick={onToggle}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 h-96 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                            : 'bg-slate-700/50 text-gray-100'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === 'bot' && (
                            <Bot className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          )}
                          {message.type === 'user' && (
                            <User className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-700/50 p-3 rounded-2xl">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4 text-blue-400" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-slate-700">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {quickActions.map((action) => (
                      <Button
                        key={action.action}
                        onClick={() => handleQuickAction(action.action)}
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-gray-300 hover:bg-slate-700 text-xs"
                      >
                        <action.icon className="h-3 w-3 mr-1" />
                        {action.label}
                      </Button>
                    ))}
                  </div>

                  <div className="flex space-x-2 mb-3">
                    <div className="flex-1 relative">
                      <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about compressors, specs, pricing..."
                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none"
                        rows="2"
                      />
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-3"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    onClick={handleWhatsAppRedirect}
                    className="w-full bg-green-600 hover:bg-green-700 text-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Continue on WhatsApp
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={onToggle}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-2xl z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { scale: 0 } : { scale: 1 }}
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
          1
        </div>
      </motion.button>
    </>
  );
};

export default ChatBot;
