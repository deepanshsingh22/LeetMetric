# LeetMetric

LeetMetric is a lightweight web app that lets you check a LeetCode user's problem-solving stats—broken down by Easy, Medium, and Hard difficulty levels.
## 🔍 Features

- 📊 Circular progress indicators for problem-solving status by difficulty
- 🔍 Search any valid LeetCode username
- 📈 Stats displayed using live data from the LeetCode GraphQL API
- ⚡ Real-time data fetched from [LeetCode Stats API](https://leetcode-stats-api.herokuapp.com/)  (via `script.js`)
- 🌐 CORS-compliant version using a proxy (via `script2.js`)
- ⚡ Fast, responsive, and easy to use
## 🌐 Live Demo

Check out the live app here:  
👉 [LeetMetric on Vercel](https://leet-metric-wine.vercel.app/)

> ⚠️ **Important**:  
> Before using the live demo, please request temporary access to the CORS proxy:  
> [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)  
> Just click the "Request temporary access" button on that page. This step is required for the app to fetch data via the CORS proxy in `script2.js`.

## 📸 Preview
<h3>Script1 Screenshot</h3>
<img src="screenshots/scrpit1_image.png" alt="LeetMetric Screenshot" width="600"/>
<br>
<h3>Script2 Screenshot</h3>
<img src="screenshots/script2_image.png" alt="LeetMetric Screenshot" width="600"/>

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- LeetCode Stats API
- LeetCode GraphQL API
## 📂 Project Structure
```bash
├── index.html # Main page
├── style.css # Styling for layout and progress visuals
├── script.js # Uses a public REST-like API to fetch stats
├── script2.js # Uses GraphQL with proxy for advanced stats
├── README.md # This file



