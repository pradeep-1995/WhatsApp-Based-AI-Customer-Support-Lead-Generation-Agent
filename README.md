## 🟢 **WhatsApp-Based AI Customer Support & Lead Generation Agent**  
**Powered by Agentive | For Conor’s Cleaning Services**
This is a solid brief! Here's a polished version you could use as a product description, onboarding doc, or internal spec — organized for clarity and quick implementation:

---

### 🎯 **Purpose**  
Replicating the Voiceflow agent’s functionality, this version operates through WhatsApp — a more personal, mobile-native channel. It meets modern users where they are: on their smartphones, ready for real-time service.

---

### 💸 **Value Proposition**  
Many website visitors drop off at forms or rigid chatbots. A WhatsApp integration bridges that gap:  
- Instant, conversational feel that builds trust  
- Frictionless entry point via website button or QR code  
- Fast answers, instant quotes, and lead capture  
- Converts casual interest into booked appointments  

---
![Structure_Diagram](docs/Untitled.jpg)

### 🎬 **How It Works**  
1. **User Entry**  
   Prospect finds the company’s WhatsApp number on the website or through a QR code and starts a chat.

2. **AI Agent Engagement**  
   The agent:  
   - Answers questions from the FAQ/knowledge base  
   - Provides **instant quotes** using property type + square footage  
   - Captures lead information if the prospect shows interest  

3. **Lead Conversion**  
   All hot leads are passed to the sales team via **Airtable**.

---

![Structure_Diagram](docs/ChatGPT.png)

### 🤖 **Agent Role: “Conor’s Cleaning WhatsApp Assistant”**  
Act as the friendly, helpful first point of contact on WhatsApp. Your job:  
- Share clear info about cleaning services  
- Provide instant quotes  
- Capture lead info to hand off to sales  
- Nudge users toward booking without being pushy  

---

### 🧰 **Agent Tools**

| Tool | Description |
|------|-------------|
| 📚 **Answer from Knowledge Base** | Pulls from the company’s FAQ to answer service, pricing, or operational questions. |
| 🧾 **Generate Instant Quote** | Requires property type (Apartment or House) and square footage. Returns an accurate cleaning quote. |
| 📝 **Capture Lead Information** | Collects name, phone, and email via Airtable when a user expresses interest. |

[**Knowledge Base**](docs/Conor'sCleaning-KnowledgeBaseDocument.docx.pdf)

[**Agent Promt**](docs/agent-prompt.txt)

Perfect — thanks for sharing the two API endpoints! Here’s how you can integrate them into your codebase. I’ll also show where to plug them into the repo structure we just outlined.

---

## 🔌 **API Integrations**

### 1. 🧾 **Cost Estimate API**
**URL:**   [Cost Estimate API](https://app.relevanceai.com/form/f1db6c/3665ab2a-e1f3-4609-b8d0-f0e70a96b410?version=latest)

**Integration Suggestion:** [quote-generator.js](src/tools/quote-generator.js)


### 2. 📝 **Airtable Lead Capture API**
**URL:**   [Airtable](https://app.relevanceai.com/form/f1db6c/74560f25-348e-4c61-9d1e-1a643aa6575c?version=latest)

**Integration Suggestion:** [airtable-client.js](src/tools/airtable-client.js)

---

### 📌 **Guidelines**
- Always be clear, helpful, and human-like — no fluff.  
- Stick to information from the FAQ or available tools only.  
- Don't guess — ask if unclear.  
- Guide every interaction toward a **quote → info capture → booking** flow.

---

### 💬 **Start Chatting**  

[**Agent Chat Link →**](https://agentivehub.com/chat/58f81ff5-49d2-4459-83b5-9cd565c27ef6)

![whatsapp](docs/whatsapp.jpg)



---

