// Constants & Elements
const elements = {
    cityInput: document.getElementById('city-input'),
    searchBtn: document.getElementById('search-btn'),
    errorMessage: document.getElementById('error-message'),
    smartSuggestion: document.getElementById('smart-suggestion'),
    
    // Loading & Content
    loadingSpinner: document.getElementById('loading-spinner'),
    weatherContent: document.getElementById('weather-content'),
    appBody: document.getElementById('app-body'),

    // Current Weather Details
    locationName: document.getElementById('location-name'),
    currentDate: document.getElementById('current-date'),
    currentTemp: document.getElementById('current-temp'),
    weatherDesc: document.getElementById('weather-desc'),
    feelsLike: document.getElementById('feels-like'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('wind-speed'),
    
    // Main Icon
    currentIcon: document.getElementById('current-icon'),
    currentIconPlaceholder: document.getElementById('current-icon-placeholder'),
    
    // Forecast Elements
    forecastCards: [
        {
            name: document.getElementById('day-1-name'),
            max: document.getElementById('day-1-max'),
            min: document.getElementById('day-1-min'),
            iconPlaceholder: document.getElementById('day-1-icon-placeholder')
        },
        {
            name: document.getElementById('day-2-name'),
            max: document.getElementById('day-2-max'),
            min: document.getElementById('day-2-min'),
            iconPlaceholder: document.getElementById('day-2-icon-placeholder')
        },
        {
            name: document.getElementById('day-3-name'),
            max: document.getElementById('day-3-max'),
            min: document.getElementById('day-3-min'),
            iconPlaceholder: document.getElementById('day-3-icon-placeholder')
        }
    ]
};

// Weather Maps (WMO Code -> Icons, descriptions, suggestions and themes)
const weatherMap = {
    0: { 
        desc: 'Céu limpo', 
        iconDay: 'ph-sun', 
        iconNight: 'ph-moon', 
        suggestion: 'Tempo ótimo para passear ao ar livre!',
        themeDay: 'theme-sunny-day',
        themeNight: 'theme-sunny-night'
    },
    1: { 
        desc: 'Parcialmente nublado', 
        iconDay: 'ph-cloud-sun', 
        iconNight: 'ph-cloud-moon', 
        suggestion: 'Clima agradável. Ótimo para atividades externas.',
        themeDay: 'theme-cloudy-day',
        themeNight: 'theme-cloudy-night'
    },
    2: { desc: 'Parcialmente nublado', iconDay: 'ph-cloud-sun', iconNight: 'ph-cloud-moon', suggestion: 'Clima agradável. Ótimo para atividades externas.', themeDay: 'theme-cloudy-day', themeNight: 'theme-cloudy-night' },
    3: { 
        desc: 'Nublado', 
        iconDay: 'ph-cloud', 
        iconNight: 'ph-cloud', 
        suggestion: 'O sol está escondido, mas o clima está tranquilo.',
        themeDay: 'theme-overcast-day',
        themeNight: 'theme-overcast-night'
    },
    45: { desc: 'Nevoeiro', iconDay: 'ph-cloud-fog', iconNight: 'ph-cloud-fog', suggestion: 'Baixa visibilidade. Dirija com cuidado!', themeDay: 'theme-overcast-day', themeNight: 'theme-overcast-night' },
    48: { desc: 'Nevoeiro', iconDay: 'ph-cloud-fog', iconNight: 'ph-cloud-fog', suggestion: 'Baixa visibilidade. Dirija com cuidado!', themeDay: 'theme-overcast-day', themeNight: 'theme-overcast-night' },
    51: { desc: 'Garoa leve', iconDay: 'ph-cloud-rain', iconNight: 'ph-cloud-rain', suggestion: 'Pode chuviscar, leve um casaco leve.', themeDay: 'theme-rain-day', themeNight: 'theme-rain-night' },
    53: { desc: 'Garoa', iconDay: 'ph-cloud-rain', iconNight: 'ph-cloud-rain', suggestion: 'Tempo úmido. Bom dia para um café quente.', themeDay: 'theme-rain-day', themeNight: 'theme-rain-night' },
    55: { desc: 'Garoa forte', iconDay: 'ph-cloud-rain', iconNight: 'ph-cloud-rain', suggestion: 'Tempo úmido. Bom dia para um café quente.', themeDay: 'theme-rain-day', themeNight: 'theme-rain-night' },
    61: { desc: 'Chuva leve', iconDay: 'ph-cloud-rain', iconNight: 'ph-cloud-rain', suggestion: 'Pegue um guarda-chuva se for sair!', themeDay: 'theme-rain-day', themeNight: 'theme-rain-night' },
    63: { desc: 'Chuva', iconDay: 'ph-cloud-showers-heavy', iconNight: 'ph-cloud-showers-heavy', suggestion: 'Não esqueça o guarda-chuva!', themeDay: 'theme-rain-day', themeNight: 'theme-rain-night' },
    65: { desc: 'Chuva forte', iconDay: 'ph-cloud-showers-heavy', iconNight: 'ph-cloud-showers-heavy', suggestion: 'Muita chuva! Prefira ficar em ambientes fechados.', themeDay: 'theme-rain-day', themeNight: 'theme-rain-night' },
    71: { desc: 'Neve leve', iconDay: 'ph-cloud-snow', iconNight: 'ph-cloud-snow', suggestion: 'Nevando de leve, agasalhe-se bem!', themeDay: 'theme-snow-day', themeNight: 'theme-snow-night' },
    73: { desc: 'Neve', iconDay: 'ph-cloud-snow', iconNight: 'ph-cloud-snow', suggestion: 'Nevando! Brinque na neve, mas agasalhe-se bem!', themeDay: 'theme-snow-day', themeNight: 'theme-snow-night' },
    75: { desc: 'Neve forte', iconDay: 'ph-cloud-snow', iconNight: 'ph-cloud-snow', suggestion: 'Nevasca. Fique em casa bem aquecido.', themeDay: 'theme-snow-day', themeNight: 'theme-snow-night' },
    80: { desc: 'Pancadas de chuva', iconDay: 'ph-cloud-showers-heavy', iconNight: 'ph-cloud-showers-heavy', suggestion: 'Chuva passageira. Mantenha o guarda-chuva por perto.', themeDay: 'theme-rain-day', themeNight: 'theme-rain-night' },
    81: { desc: 'Pancadas de chuva', iconDay: 'ph-cloud-showers-heavy', iconNight: 'ph-cloud-showers-heavy', suggestion: 'Chuva passageira forte. Cuidado ao sair.', themeDay: 'theme-rain-day', themeNight: 'theme-rain-night' },
    82: { desc: 'Pancadas de chuva', iconDay: 'ph-cloud-showers-heavy', iconNight: 'ph-cloud-showers-heavy', suggestion: 'Chuva forte passageira!', themeDay: 'theme-storm-day', themeNight: 'theme-storm-night' },
    95: { desc: 'Tempestade', iconDay: 'ph-cloud-lightning', iconNight: 'ph-cloud-lightning', suggestion: 'Tempestade lá fora! Desligue os eletrônicos por precaução.', themeDay: 'theme-storm-day', themeNight: 'theme-storm-night' },
    96: { desc: 'Tempestade', iconDay: 'ph-cloud-lightning', iconNight: 'ph-cloud-lightning', suggestion: 'Tempestade lá fora! Desligue os eletrônicos por precaução.', themeDay: 'theme-storm-day', themeNight: 'theme-storm-night' },
    99: { desc: 'Tempestade severa', iconDay: 'ph-cloud-lightning', iconNight: 'ph-cloud-lightning', suggestion: 'Tempestade severa! Fique em local seguro.', themeDay: 'theme-storm-day', themeNight: 'theme-storm-night' },
};

// Functions
const showLoading = () => {
    elements.loadingSpinner.classList.remove('hidden');
    elements.weatherContent.classList.add('loading-state');
    elements.errorMessage.classList.add('hidden');
};

const hideLoading = () => {
    elements.loadingSpinner.classList.add('hidden');
    elements.weatherContent.classList.remove('loading-state');
};

const getWeatherData = (code) => {
    return weatherMap[code] || weatherMap[0]; // fallback to clear sky
};

const formatDate = (dateString) => {
    const options = { weekday: 'long', day: '2-digit', month: '2-digit' };
    let date = new Date(dateString + 'T12:00:00'); // append time to fix timezone offset issues
    return date.toLocaleDateString('pt-BR', options).replace('-feira', '');
};

const applyTheme = (themeClass) => {
    elements.appBody.className = themeClass;
};

const fetchWeather = async (city) => {
    if (!city) return;
    showLoading();

    try {
        // 1. Geocoding
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=pt`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found");
        }

        const location = geoData.results[0];
        const { latitude, longitude, name, admin1, country } = location;

        // 2. Weather Forecast
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`);
        const weatherData = await weatherRes.json();

        updateDOM(name, admin1, country, weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        elements.errorMessage.classList.remove('hidden');
    } finally {
        hideLoading();
    }
};

const updateDOM = (city, admin1, country, data) => {
    const current = data.current;
    const daily = data.daily;
    const isDay = current.is_day === 1;
    const weatherInfo = getWeatherData(current.weather_code);

    // Update Text Elements
    const locationDisplayName = admin1 && admin1 !== city ? `${city}, ${admin1}` : city;
    elements.locationName.textContent = locationDisplayName;
    
    const today = new Date();
    elements.currentDate.textContent = today.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    
    elements.currentTemp.textContent = `${Math.round(current.temperature_2m)}°`;
    elements.weatherDesc.textContent = weatherInfo.desc;
    elements.feelsLike.textContent = `${Math.round(current.apparent_temperature)}°`;
    elements.humidity.textContent = `${current.relative_humidity_2m}%`;
    elements.windSpeed.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
    
    elements.smartSuggestion.textContent = weatherInfo.suggestion;

    // Apply Icon
    const mainIconClass = isDay ? weatherInfo.iconDay : weatherInfo.iconNight;
    elements.currentIconPlaceholder.className = `ph ${mainIconClass}`;
    
    // Apply Theme
    const themeToApply = isDay ? weatherInfo.themeDay : weatherInfo.themeNight;
    applyTheme(themeToApply);

    // Update 3-Day Forecast (Skip today (index 0), show next 3 days (index 1, 2, 3))
    for (let i = 0; i < 3; i++) {
        const offset = i + 1; // 1, 2, 3
        const card = elements.forecastCards[i];
        const dayCode = daily.weather_code[offset];
        const dayWeatherInfo = getWeatherData(dayCode);

        // Name
        const dateStr = daily.time[offset];
        card.name.textContent = formatDate(dateStr).split(',')[0].trim().toUpperCase();
        
        // Temps
        card.max.textContent = Math.round(daily.temperature_2m_max[offset]);
        card.min.textContent = Math.round(daily.temperature_2m_min[offset]);
        
        // Icon
        card.iconPlaceholder.className = `ph ${dayWeatherInfo.iconDay}`;
    }
};

// Event Listeners
elements.searchBtn.addEventListener('click', () => {
    fetchWeather(elements.cityInput.value.trim());
});

elements.cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchWeather(elements.cityInput.value.trim());
    }
});

// Initial Load (e.g., São Paulo)
window.addEventListener('DOMContentLoaded', () => {
    fetchWeather('São Paulo');
});
