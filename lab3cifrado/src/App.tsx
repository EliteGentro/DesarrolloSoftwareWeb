import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import CryptoJS from "crypto-js";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [key, setKey] = useState("12345678");
  const [cipher, setCipher] = useState("");
  const [decipher, setDecipher] = useState("");

  const cifrar = (texto: string) => {
    const textoCifrado = CryptoJS.AES.encrypt(texto, key).toString();
    setCipher(textoCifrado);
  };

  const descifrar = (texto: string) => {
    const bytes = CryptoJS.AES.decrypt(texto, key);
    const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    setDecipher(textoDescifrado);
  };

  return (
    <div className="App" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#f8f8fc" }}>
      <h1 style={{ marginBottom: 10, color: "#7c3aed" }}>AES Cipher Demo</h1>
      <div style={{ display: "flex", gap: 40, background: "#fff", padding: 32, borderRadius: 16, boxShadow: "0 4px 24px rgba(140, 100, 255, 0.08)", maxWidth: 800, width: "100%", justifyContent: "center" }}>
        {/* Cipher Column */}
        <div style={{ flex: 1, minWidth: 300, display: "flex", flexDirection: "column", gap: 18 }}>
          <h2 style={{ color: "#7c3aed", marginBottom: 0 }}>Cifrar</h2>
          <label style={{ fontWeight: 500, marginBottom: 4 }}>Clave (key):</label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            style={{ padding: 8, borderRadius: 6, border: "1px solid #d1d5db", marginBottom: 8 }}
            placeholder="Ingresa la clave"
          />
          <label style={{ fontWeight: 500, marginBottom: 4 }}>Texto a cifrar:</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ padding: 8, borderRadius: 6, border: "1px solid #d1d5db", marginBottom: 8 }}
            placeholder="Ingresa el texto"
          />
          <button
            onClick={() => cifrar(text)}
            style={{
              padding: "10px 0",
              borderRadius: 8,
              border: "none",
              background: "linear-gradient(90deg, #a78bfa 0%, #7c3aed 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              marginTop: 8,
              boxShadow: "0 2px 8px rgba(124, 58, 237, 0.08)"
            }}
          >
            Cifrar
          </button>
          <div style={{ marginTop: 12 }}>
            <span style={{ fontWeight: 500 }}>Texto Cifrado:</span>
            <div style={{
              background: "#f3f0ff",
              borderRadius: 6,
              padding: 8,
              marginTop: 4,
              wordBreak: "break-all",
              minHeight: 32,
              fontFamily: "monospace"
            }}>{cipher}</div>
          </div>
        </div>

        {/* Decipher Column */}
        <div style={{ flex: 1, minWidth: 300, display: "flex", flexDirection: "column", gap: 18 }}>
          <h2 style={{ color: "#7c3aed", marginBottom: 0 }}>Descifrar</h2>
          <label style={{ fontWeight: 500, marginBottom: 4 }}>Texto cifrado:</label>
          <input
            type="text"
            value={cipher}
            onChange={(e) => setCipher(e.target.value)}
            style={{ padding: 8, borderRadius: 6, border: "1px solid #d1d5db", marginBottom: 8 }}
            placeholder="Texto cifrado"
            readOnly
          />
          <label style={{ fontWeight: 500, marginBottom: 4 }}>Clave (key):</label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            style={{ padding: 8, borderRadius: 6, border: "1px solid #d1d5db", marginBottom: 8 }}
            placeholder="Ingresa la clave"
            readOnly
          />
          <button
            onClick={() => descifrar(cipher)}
            style={{
              padding: "10px 0",
              borderRadius: 8,
              border: "none",
              background: "linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              marginTop: 8,
              boxShadow: "0 2px 8px rgba(124, 58, 237, 0.08)"
            }}
          >
            Descifrar
          </button>
          <div style={{ marginTop: 12 }}>
            <span style={{ fontWeight: 500 }}>Texto Descifrado:</span>
            <div style={{
              background: "#f3f0ff",
              borderRadius: 6,
              padding: 8,
              marginTop: 4,
              minHeight: 32,
              fontFamily: "monospace"
            }}>{decipher}</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 32, color: "#888", fontSize: 14 }}>
        <span>Hecho con <span style={{ color: "#7c3aed" }}>React</span> y <span style={{ color: "#7c3aed" }}>CryptoJS</span></span>
      </div>
    </div>
  );
}

export default App;
