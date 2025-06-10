import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Na razie ustawiamy stałą lokalizację 'pl'
  // W przyszłości możemy dodać wykrywanie języka użytkownika
  const locale = "pl";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: "Europe/Warsaw",
  };
});
