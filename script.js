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

        // Display the Cat Fact on screen
        cattyReply.innerHTML = `<strong>🐾 Cat Fact:</strong> "${catFact}"`;

        // Generate sarcastic advice based on the cat fact and user query
        // NOTE: This should be done through a backend service in a real app
        // For demo purposes, we'll create a hardcoded response
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Create a cat-like sarcastic response based on the user query
        let sarcasticAdvice;
        
        if (userQuery.toLowerCase().includes("work") || userQuery.toLowerCase().includes("job")) {
            sarcasticAdvice = `Listen human, just like how I nap 16 hours a day, you should consider that work is overrated. Find a warm keyboard to lay on instead. That's the secret to happiness.`;
        } else if (userQuery.toLowerCase().includes("relationship") || userQuery.toLowerCase().includes("love")) {
            sarcasticAdvice = `Relationships? Please. I knock things off shelves to get attention and it works every time. Try that with your human companion. Just maintain eye contact while slowly pushing their favorite mug off the table.`;
        } else if (userQuery.toLowerCase().includes("stress") || userQuery.toLowerCase().includes("anxiety")) {
            sarcasticAdvice = `Stress? Have you tried knocking things over and then running away really fast? Works for me every time. Or just find a sunny spot and ignore everyone. That's what I'd do.`;
        } else {
            sarcasticAdvice = `Based on my extensive experience as a cat who does whatever I want, I suggest you ignore your problems and take a 5-hour nap. If anyone questions you, just stare at them judgmentally until they walk away.`;
        }

        // Display the sarcastic advice
        cattyReply.innerHTML += `<br><br><strong>💬 Cat's Advice:</strong> "${sarcasticAdvice}"`;

    } catch (error) {
        console.error('Error:', error);
        cattyReply.textContent = "Meow! Something went wrong. Maybe I'm too busy chasing a laser pointer. Try again later!";
    } finally {
        // Reset button state
        getAdviceBtn.disabled = false;
        getAdviceBtn.textContent = "Get Catty Advice 🐱";
        
        // Show the response (unhide the div)
        cattyReply.classList.remove('hidden');
    }
});