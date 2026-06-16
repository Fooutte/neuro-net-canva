async function askClaude(prompt, context) {
  const systemPrompt = context
    ? `Tu es une IA intégrée dans un mind-map cyberpunk infini. Réponds de façon concise et percutante (2-4 phrases max, ou du code). Contexte du nœud parent: "${context}".`
    : `Tu es une IA intégrée dans un mind-map cyberpunk infini. Réponds de façon concise et percutante (2-4 phrases max, ou du code propre). Détecte si c'est une demande de code et réponds avec du code.`;

  try {
    const response = await fetch('/api/groq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt }
        ],
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '// ERREUR DE CONNEXION NEURALE';

  } catch (err) {
    console.error(err);
    return '// NEURAL LINK LOST\n' + err.message;
  }
}
