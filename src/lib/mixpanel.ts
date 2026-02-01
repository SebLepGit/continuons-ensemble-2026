// src/analytics.ts
import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;
const isProd = !import.meta.env.DEV && Boolean(MIXPANEL_TOKEN);

if (isProd) {
    mixpanel.init(MIXPANEL_TOKEN, {
        debug: false,             // true si tu veux logger en prod pour tests
        track_pageview: false,
        autocapture: false,
        record_sessions_percent: 0,
        api_host: "https://api-eu.mixpanel.com",
    });
} else {
    console.log("[Mixpanel] Mode dev - aucun event envoyé");
}

// ✅ fonction safe pour tracker les events
export const track = (event: string, props?: Record<string, any>) => {
    if (isProd) {
        try {
            mixpanel.track(event, props);
        } catch (e) {
            console.warn("[Mixpanel] Erreur de tracking :", e);
        }
    } else {
        console.log("[Mixpanel dev] Event :", event, props);
    }
};

export default mixpanel;