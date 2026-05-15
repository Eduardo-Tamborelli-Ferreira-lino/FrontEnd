// Searcy character
const characterInput = document.getElementById('searchInput');
const errorState = document.getElementById('errorState');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyStateText');
const resultsGrid = document.getElementById('resultsGrid');




// Conf my input to accept the enter
characterInput.addEventListener('keypress', async function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log('Keypress is OK');
        const character = characterInput.value;
        loadingState.classList.remove('hidden');
        await searchCharacter(character);
        loadingState.classList.add('hidden');
    }
});

// Search the character.
async function searchCharacter(character) {

    try {
        emptyState.classList.add('hidden');
        resultsGrid.innerHTML = ``;

        const characterUrl = `https://rickandmortyapi.com/api/character/?name=${character}`;
        const characterResp = await fetch(characterUrl);
        if (!characterResp.ok) {
            errorState.classList.remove('hidden');
            return;
        }
        if (!errorState.classList.contains('hidden')) {
            errorState.classList.add('hidden');
        }

        const characterJson = await characterResp.json();
        const { status, species, name, image } = characterJson.results[0];

        let cardColor = "border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]";
        let statusLabel = "Unknown";
        let statusClass = "bg-purple-500/20 text-purple-400 border-purple-500/50";
        let dotClass = "bg-purple-500 animate-ping";
        let extraStyles = "mix-blend-luminosity";

        if (status === 'Dead') {
            cardColor = "border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)] grayscale";
            statusLabel = "Dead";
            statusClass = "bg-red-500/20 text-red-400 border-red-500/50";
            dotClass = "bg-red-500";
            extraStyles = "";
        } else if (status === 'Alive') {
            cardColor = "border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]";
            statusLabel = "Alive";
            statusClass = "bg-green-500/20 text-green-400 border-green-500/50";
            dotClass = "bg-green-500 animate-pulse";
            extraStyles = "";
        }

        resultsGrid.innerHTML = `
            <article class="bg-gray-800 rounded-2xl overflow-hidden border-2 ${cardColor} transition-all hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] duration-300 flex flex-col group">
                <div class="relative overflow-hidden">
                    <img src=${image} alt=${name} class="w-full h-64 object-cover ${extraStyles} transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                </div>
                <div class="p-6 flex flex-col flex-grow relative -mt-12 z-10">
                    <div class="flex justify-between items-start mb-2">
                        <h2 class="text-2xl font-bold text-white drop-shadow-md">${name}</h2>
                    </div>
                    <div class="mb-4">
                        <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${statusClass} inline-flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full ${dotClass}"></span>
                            ${statusLabel}
                        </span>
                    </div>
                    <p class="text-gray-300 text-sm mb-4">Species: ${species}</p>
                    
                    <div class="mt-auto pt-4 border-t border-gray-700">
                        <p class="text-sm font-medium text-orange-400 bg-orange-500/10 p-3 rounded-lg border border-orange-500/20">
                            ${species === 'Human' ? "Just another ordinary earthling. " : "Caution! This being might not be friendly."}
                        </p>
                    </div>
                </div>
            </article>
        `
    }
    catch (error) {
        console.log('Error in the search', error)
    }
}