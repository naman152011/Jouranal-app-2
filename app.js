// Journal Entries Storage
let entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

// Prompts
const prompts = [
  "What made you smile today?",
  "What’s something you’re proud of?",
  "Who are you grateful for today?",
  "What’s a small win you had today?",
  "What’s a kind thing someone did for you?"
];

// Display Prompt
function displayPrompt() {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById('prompt').innerText = `Prompt: ${prompt}`;
}

// Add Entry
function addEntry() {
  const mood = document.getElementById('mood').value;
  const text = document.getElementById('journalInput').value.trim();
  const date = new Date().toLocaleString();

  if (text) {
    const entry = { date, mood, text };
    entries.push(entry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));
    document.getElementById('journalInput').value = '';
    displayEntries();
  }
}

// Display Entries
function displayEntries() {
  const journalEntries = document.getElementById('journalEntries');
  journalEntries.innerHTML = entries.map((entry, index) => `
    <div class="entry">
      <span class="date">${entry.date}</span>
      <span class="mood">${entry.mood}</span>
      <p>${entry.text}</p>
      <span class="delete-btn" onclick="deleteEntry(${index})">Delete</span>
    </div>
  `).join('');
}

// Delete Entry
function deleteEntry(index) {
  entries.splice(index, 1);
  localStorage.setItem('journalEntries', JSON.stringify(entries));
  displayEntries();
}

// Initialize App
window.onload = function() {
  displayPrompt();
  displayEntries();
};
