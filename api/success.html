<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Neo API Key Generator</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
    body {
      margin: 0;
      background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
      font-family: 'Orbitron', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      color: #00ffff;
      text-align: center;
    }
    .container {
      background: rgba(255, 255, 255, 0.07);
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 0 30px #00ffffaa;
      width: 320px;
      user-select: none;
    }
    h1 {
      margin-bottom: 20px;
      text-shadow: 0 0 15px #00ffffbb;
      font-size: 2rem;
    }
    button {
      background: #00ffff;
      border: none;
      padding: 15px 30px;
      border-radius: 12px;
      cursor: pointer;
      font-weight: 700;
      font-size: 1.1rem;
      color: #000;
      box-shadow: 0 0 30px #00ffffcc;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      width: 100%;
      margin-top: 10px;
    }
    button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 45px #00ffffee;
    }
    #key {
      margin-top: 25px;
      font-family: monospace;
      font-size: 1.2rem;
      background: rgba(0, 255, 255, 0.1);
      padding: 15px;
      border-radius: 10px;
      user-select: text;
      min-height: 36px;
      overflow-wrap: break-word;
    }
    #status {
      margin-top: 15px;
      font-size: 0.9rem;
      color: #0ff;
      min-height: 20px;
      user-select: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Neo API Key Generator</h1>
    <button id="generateBtn">Generate API Key</button>
    <div id="status"></div>
    <div id="key" title="Your API Key will appear here"></div>
  </div>

  <script>
    const generateBtn = document.getElementById('generateBtn');
    const keyDiv = document.getElementById('key');
    const statusDiv = document.getElementById('status');

    // Change this to your deployed Vercel API URL:
    const apiUrl = 'https://your-project.vercel.app/api/verify-gate';

    generateBtn.addEventListener('click', async () => {
      statusDiv.textContent = 'Generating API key... Please wait.';
      keyDiv.textContent = '';
      try {
        const response = await fetch(apiUrl, {
          method: 'POST'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.apiKey) {
          keyDiv.textContent = data.apiKey;
          statusDiv.textContent = 'API Key generated successfully!';
        } else {
          statusDiv.textContent = 'Failed to generate API key.';
        }
      } catch (error) {
        statusDiv.textContent = 'Error: ' + error.message;
      }
    });
  </script>
</body>
</html>
