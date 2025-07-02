# Revolutionizing Polkadot’s On-Chain Governance with AI

[Polkadot](https://polkadot.network/), a pioneering blockchain platform, prides itself on its decentralized governance system. The token holders are who decide which proposals are enacted, placing the network's evolution in the hands of the community.

For decentralized governance to thrive, it’s crucial that the community remains engaged, well-informed, and capable of understanding active proposals and the governance system. However, given the busy lives of community members, achieving this level of engagement is challenging.

We saw an opportunity to harness recent advancements in **Large Language Models (LLMs)** to address this challenge. LLMs excel in understanding natural language, generating text, summarizing content, and performing sentiment analysis.

By integrating these capabilities, we developed an **AI assistant** that answers users' questions about:

- The governance system and Polkadot in general  
- Existing proposals: their objective, milestones, budget, team, etc.  
- Proposal summaries  
- Comments and reactions to proposals, facilitating a deeper understanding of community sentiments  

---

## Architecture Overview

Behind the scenes, the solution consists of **two main components**:

### 1. ETL Process
- Gathers data from Polkadot documentation and proposals  
- Preprocesses and stores it in optimized databases for efficient retrieval  
- Generates proposal summaries and stores them to avoid real-time generation  

### 2. AI Agent using Langchain
An **AI Agent** is a program that uses an LLM to determine the actions it has to take and the tools it has to use to accomplish a specific task.

The agent was provided access to the following databases as tools:

- The Polkadot documentation **vector database**  
- The proposal **vector database**  
- The summaries **SQL database**  
- The proposal comments and reactions **SQL database**

---

## Impact

Our solution transformed the way Polkadot’s community interacts with the governance system. The **AI-powered chat interface** made it easier for users to:

- Stay informed  
- Understand complex proposals  
- Engage in meaningful discussions  

This not only **increased community participation**, but also enhanced the overall **efficiency and transparency** of the governance process.
