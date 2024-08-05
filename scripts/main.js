import { database } from "./database.js";

const generateMoodCards = () => {
  const container = document.getElementById("moods-container");
  let moodHTML = '<div class="row">';

  database.forEach((mood, card) => {
    moodHTML += `
            <div class="col-md-4">
                <div class="mood-card mx-auto">
                    <h2 class="text-center">${mood.name}</h2>
                    <img src="${mood.imageUrl}" class="img-fluid w-100" alt="${mood.name} Image">
                    <div class="advice">
                        <div>
                            <span class="font-weight-bold mr-2">Macho Advice:</span>
                            <div class="quotes text-right">
                                ${mood.quotes.map((quote) => `<p class="my-3 mx-0">${quote}</p>`).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    //Close the current row and start a new one
    if ((card + 1) % 3 === 0 && card !== database.length - 1) {
      moodHTML += '</div><div class="row">';
    }
  });

  moodHTML += "</div>";
  container.innerHTML = moodHTML;
};

generateMoodCards();
