import "./db"
import "./models/Video";
import app from "./server";


const PORT = 4000;

const handleListening = (req, res) => console.log(`💚Server listening on port http://localhost:${PORT}🎃`);

app.listen(PORT, handleListening);