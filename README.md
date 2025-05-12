🐱 Catty Advice – A Sarcastic AI Life Coach (500-word Explanation)
Catty Advice is a fun, interactive web application that provides users with sarcastic life advice — all wrapped in a cat’s attitude. It’s built with HTML, Tailwind CSS, and vanilla JavaScript, and it integrates two APIs to deliver a unique and humorous user experience. The twist? The app uses a random cat fact behind the scenes to inspire each piece of advice, but it doesn't show this fact to the user. Instead, the focus stays on the witty, ironic response — making the app feel like it’s coming straight from a sassy feline mentor.

🐾 How It Works
When a user visits the Catty Advice page, they’re greeted with a playful heading and a warm invitation to ask for advice. They can type in any question or life dilemma — serious or silly — into a text area (e.g., "I’m stuck in my career," or "Should I adopt another cat?"). After clicking the "Get Catty Advice 🐱" button, the magic begins.

Behind the scenes, the app first fetches a random cat fact from the MeowFacts API. This fact isn't shown on the webpage, but it forms the hidden foundation for the advice that follows.

Next, using the google gemini, the application sends a prompt that says something like:

"You are a sarcastic cat. Give life advice based on the fact: 'Cats can rotate their ears 180 degrees.' The advice should be humorous and ironic."

The API responds with a funny, sarcastic piece of advice that loosely relates to the fact. For example:

"You’re feeling lost? Just do what cats do — turn your ears away from your problems and pretend they don’t exist."

This sarcastic reply is then shown on the webpage as the final output, giving users a funny and unexpected response to their question — as if a cat were giving them life coaching with a side of sass.

🔧 Technologies Used
HTML & Tailwind CSS: For layout, styling, and responsive design

JavaScript (vanilla): For DOM manipulation and handling API calls

MeowFacts API: For fetching random cat facts (used internally only)

google gemini : For generating sarcastic advice using AI

💡 Project Purpose
Catty Advice is a creative experiment that showcases how humor, AI, and interactivity can come together to build delightful user experiences. It’s not meant to be a serious life coach — rather, it’s a digital cat with a personality that pokes fun at your situation with ironic wisdom.

This project highlights practical frontend skills such as API integration, async/await handling, and clean UI design — along with prompt engineering to make AI responses engaging and thematic. It also explores the idea of using hidden data (like the cat fact) to influence visible output, adding a layer of creativity.
