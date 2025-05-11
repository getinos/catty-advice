// Get DOM elements
const getAdviceBtn = document.getElementById('getAdviceBtn');
const userInput = document.getElementById('userInput');
const cattyReply = document.getElementById('cattyReply');

// Add button click event
getAdviceBtn.addEventListener('click', async () => {
    const userQuery = userInput.value.trim();

    // Check if the user has entered a query
    if (userQuery === "") {
        cattyReply.textContent = "Please tell me what you need advice on first! 😼";
        cattyReply.classList.remove('hidden');
        return;
    }

    // Show loading state
    getAdviceBtn.disabled = true;
    getAdviceBtn.textContent = "Getting advice...";
    cattyReply.textContent = "Thinking of purr-fect advice...";
    cattyReply.classList.remove('hidden');

    // Fetch a random Cat Fact
    try {
        const catFactResponse = await fetch('https://meowfacts.herokuapp.com/');
        const catFactData = await catFactResponse.json();
        const catFact = catFactData.data[0];  // Get the first fact (since the API returns an array)

       

        // Call Gemini API for sarcastic advice
        const API_KEY = "AIzaSyAKyKvLgfA-xEKHw7UN4qGLvf8NLWQVXVk"; // Replace with your actual Gemini API key
        const API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent";
        
        // Create prompt for Gemini
        const prompt = `You are a sarcastic cat. Give life advice based on the fact: "${catFact}" and this user's problem: "${userQuery}". The advice should be humorous and insulting and not true and sarcastic. Keep it under 70 words. example "Cats sleep for 70% of their lives."
"Unlike you, they actually look cute doing it. and let the advive phrase like a cats perspective`;
        
        // Make the API call
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.9,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 2048,
                }
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error("API Error:", errorData);
            throw new Error(`Gemini API request failed with status ${response.status}`);
        }

        const data = await response.json();
        const sarcasticAdvice = data.candidates[0].content.parts[0].text;

        // Display the sarcastic advice
        cattyReply.innerHTML += `<br><br><strong>💬 Cat's Advice:</strong> "${sarcasticAdvice}"`;

    } catch (error) {
        console.error('Error:', error);
        cattyReply.textContent = "Meow! Something went wrong with the API call. Check the console for details!";
    } finally {
        // Reset button state
        getAdviceBtn.disabled = false;
        getAdviceBtn.textContent = "Get Catty Advice 🐱";
        
        // Show the response (unhide the div)
        cattyReply.classList.remove('hidden');
    }
});
