// script.js
const youtubeViewsInput = document.getElementById('youtube-views');
const youtubeCpmInput = document.getElementById('youtube-cpm');
const twitchSubsInput = document.getElementById('twitch-subs');
const twitchSubPriceInput = document.getElementById('twitch-sub-price');
const totalRevenueDisplay = document.getElementById('total-revenue');
const calculateButton = document.getElementById('calculate-button');
const paymentMethodSelect = document.getElementById('payment-method');

calculateButton.addEventListener('click', () => {
    const youtubeViews = parseFloat(youtubeViewsInput.value) || 0;
    const youtubeCpm = parseFloat(youtubeCpmInput.value) || 0;
    const twitchSubs = parseInt(twitchSubsInput.value) || 0;
    const twitchSubPrice = parseFloat(twitchSubPriceInput.value) || 0;
    const paymentMethod = paymentMethodSelect.value;

    let youtubeRevenue = 0;
    let twitchRevenue = 0;

    if (paymentMethod === 'youtube' || paymentMethod === 'both') {
        youtubeRevenue = (youtubeViews / 1000) * youtubeCpm;
    }

    if (paymentMethod === 'twitch' || paymentMethod === 'both') {
        twitchRevenue = twitchSubs * twitchSubPrice;
    }

    const totalRevenue = youtubeRevenue + twitchRevenue;
    totalRevenueDisplay.textContent = `$${totalRevenue.toFixed(2)}`;
});