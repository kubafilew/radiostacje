const radioPlayer = document.getElementById("radioPlayer")
const stations = document.getElementById("stations")

// Funkcja do odtwarzania radia
function playRadio() {
  radioPlayer.play()
}

// Funkcja do zatrzymywania radia
function stopRadio() {
  radioPlayer.pause()
  radioPlayer.currentTime = 0
}

// Funkcja do zmiany stacji
function changeStation() {
  const selectedStation = stations.value
  radioPlayer.src = selectedStation
  playRadio()
}

// Tworzenie nut
function createNotes() {
  const noteCount = 30 // Liczba nut
  for (let i = 0; i < noteCount; i++) {
    const note = document.createElement("div")
    note.className = "note"
    note.style.left = Math.random() * 100 + "vw" // Losowa pozycja w poziomie
    note.style.animationDuration = Math.random() * 2 + 2 + "s" // Losowy czas animacji
    note.style.top = Math.random() * 100 + "vh" // Losowa pozycja w pionie
    document.body.appendChild(note)
  }
}

// Wywołanie funkcji
createNotes()
