import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Nabi Sumaya Node.js Backend is running" });
  });

  // Serve sitemap.xml with explicit XML content-type to prevent search engine HTML-fallback errors
  app.get("/sitemap.xml", (req, res) => {
    res.header("Content-Type", "application/xml");
    const publicPath = path.join(process.cwd(), "public", "sitemap.xml");
    res.sendFile(publicPath, (err) => {
      if (err) {
        const distPath = path.join(process.cwd(), "dist", "sitemap.xml");
        res.sendFile(distPath, (err2) => {
          if (err2) {
            res.status(404).send("Sitemap not found");
          }
        });
      }
    });
  });

  // Serve robots.txt with explicit text/plain content-type
  app.get("/robots.txt", (req, res) => {
    res.header("Content-Type", "text/plain");
    const publicPath = path.join(process.cwd(), "public", "robots.txt");
    res.sendFile(publicPath, (err) => {
      if (err) {
        const distPath = path.join(process.cwd(), "dist", "robots.txt");
        res.sendFile(distPath, (err2) => {
          if (err2) {
            res.status(404).send("Robots.txt not found");
          }
        });
      }
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
