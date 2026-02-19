// 1. Change the require to the correct package
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { questionAnswerPrompt, conceptExplainPrompt } = require("../utils/prompts");

// 2. Initialize using the correct Class name
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateInterviewQuestions = async (req, res) => {
    try {
        const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

        if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const prompt = questionAnswerPrompt(role, experience, topicsToFocus, numberOfQuestions);

        // 3. Proper way to select the model
        
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        // 4. Proper way to generate content
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const rawText = response.text();

        // 5. Clean and Parse JSON
        const cleanedText = rawText
            .replace(/^```json\s*/, "") 
            .replace(/```$/, "") 
            .trim(); 

        const data = JSON.parse(cleanedText);

        res.status(200).json(data);
    } catch (error) {
        console.error("AI Error:", error);
        res.status(500).json({ 
            message: "Failed to generate questions", 
            error: error.message 
        });
    }
};

const generateConceptExplanation = async (req, res) => {
    try {
       const { question } = req.body;

       if (!question) {
        return res.status(400).json({ message: "Missing required fields" });
       }

       const prompt = conceptExplainPrompt(question);

       const response = await genAI.getGenerativeModel({ model: "gemini-2.5-flash" }).generateContent(prompt);
       let rawText = response.response.text(); // Fixed: Added .response and () to the method call

       //Clean it: Remove  ```json and ``` from beginning and end
       const cleanedText = rawText
            .replace(/^```json\s*/, "") // remove starting ```json
            .replace(/```$/, "") // remove ending ```
            .trim(); // remove extra spaces

            // Now safe to parse
            const data = JSON.parse(cleanedText);

            res.status(200).json(data);
    } catch (error){
        res.status(500).json({ 
            message: "Failed to generate questions", 
            error: error.message 
        });
    }
};

module.exports = { generateInterviewQuestions, generateConceptExplanation };