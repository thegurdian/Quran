// API to get a specific Ayah with its Surah and number
const api_url = "https://api.alquran.cloud/v1/ayah/";

async function generateAyah() {
    try {
        // Generate a random Ayah number (1 to 6236, since there are 6236 Ayahs in the Quran)
        const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;

        // Fetch the random Ayah from the API
        const response = await fetch(`${api_url}${randomAyahNumber}/en.asad`); // Using English translation by Asad
        const data = await response.json();

        if (response.ok) {
            // Extract Ayah text and Surah reference
            const ayahText = data.data.text;
            const surahName = data.data.surah.englishName;
            const ayahNumber = data.data.numberInSurah;
            const fullReference = `Surah: ${surahName} (Ayah: ${ayahNumber})`;

            // Display the Ayah and reference
            document.getElementById("ayah").textContent = `"${ayahText}"`;
            document.getElementById("reference").textContent = fullReference;
        } else {
            throw new Error("Error fetching the Ayah");
        }
    } catch (error) {
        document.getElementById("ayah").textContent = "Error fetching Ayah. Please try again.";
        document.getElementById("reference").textContent = "";
        console.error("Error:", error);
    }
}
