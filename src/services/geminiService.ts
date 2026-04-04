import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface LocationResult {
  text: string;
  links: { uri: string; title: string }[];
}

export const findServiceCenters = async (lat?: number, lng?: number): Promise<LocationResult> => {
  try {
    const config: any = {
      tools: [{ googleMaps: {} }],
    };

    if (lat !== undefined && lng !== undefined) {
      config.toolConfig = {
        retrievalConfig: {
          latLng: {
            latitude: lat,
            longitude: lng,
          },
        },
      };
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Find iPixel Electronics service centers or TV repair shops in Bangalore. Provide their addresses and contact info.",
      config,
    });

    const text = response.text || "No information found.";
    const links: { uri: string; title: string }[] = [];

    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    if (chunks) {
      chunks.forEach((chunk: any) => {
        if (chunk.maps?.uri) {
          links.push({
            uri: chunk.maps.uri,
            title: chunk.maps.title || "View on Google Maps",
          });
        }
      });
    }

    return { text, links };
  } catch (error) {
    console.error("Error finding service centers:", error);
    return { 
      text: "Sorry, I couldn't find any service centers at the moment. Please check back later.", 
      links: [] 
    };
  }
};
